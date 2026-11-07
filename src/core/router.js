/**
 * Hash router — works on any static server (python3 -m http.server).
 *
 *   #/               intro    (Act 1)
 *   #/library        library  (Act 2: bookcase + Discover)
 *   #/shelf/:genre   shelf    (one genre, 3D rack)
 *   #/book/:id       reader   (page one of a book)
 *
 * A scene is { enter(params, ctx), leave?(), canEnter?(params) }.
 */
import { releaseStatic } from "./motion.js";

const ROUTES = [
  { name: "intro", pattern: /^\/?$/, keys: [] },
  { name: "library", pattern: /^\/library\/?$/, keys: [] },
  { name: "shelf", pattern: /^\/shelf\/([\w-]+)\/?$/, keys: ["genre"] },
  { name: "reader", pattern: /^\/book\/([\w-]+)\/?$/, keys: ["id"] },
];

export function parse(path) {
  for (const route of ROUTES) {
    const match = path.match(route.pattern);
    if (match) {
      const params = {};
      route.keys.forEach((key, i) => { params[key] = decodeURIComponent(match[i + 1]); });
      return { name: route.name, params };
    }
  }
  return null;
}

export function createRouter(scenes) {
  const root = document.documentElement;
  let current = null;
  let depth = 0; // in-app history entries, so "Back" can use history.back() safely

  const currentPath = () => location.hash.replace(/^#/, "") || "/";

  function show(route, ctx = {}) {
    const scene = scenes[route.name];
    if (scene.canEnter && !scene.canEnter(route.params)) {
      navigate("/library", { replace: true });
      return;
    }
    if (current && current.scene !== scene && current.scene.leave) current.scene.leave();
    root.dataset.scene = route.name;
    current = { scene, route };
    scene.enter(route.params, ctx);
  }

  function resolve() {
    show(parse(currentPath()) || parse("/"));
  }

  /** Navigate in-app. Also drops a ?state= capture query once the user moves on. */
  function navigate(path, { replace = false } = {}) {
    releaseStatic();
    const url = location.pathname + "#" + path;
    if (replace) history.replaceState(null, "", url);
    else { history.pushState(null, "", url); depth += 1; }
    window.scrollTo(0, 0);
    resolve();
  }

  function back(fallback = "/library") {
    if (depth > 0) history.back();
    else navigate(fallback);
  }

  function start() {
    window.addEventListener("popstate", () => {
      depth = Math.max(0, depth - 1);
      releaseStatic();
      resolve();
    });
    // In-app links (<a href="#/…">) go through navigate() for consistent history.
    document.addEventListener("click", (event) => {
      const link = event.target.closest('a[href^="#/"]');
      if (!link || event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      navigate(link.getAttribute("href").slice(1));
    });
  }

  return { start, show, resolve, navigate, back };
}
