import 'cookie';
import { bold, red, yellow, dim, blue } from 'kleur/colors';
import 'html-escaper';
import 'clsx';
import './chunks/astro_rw0ytRGA.mjs';
import { compile } from 'path-to-regexp';

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
  return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
  return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
  return log(opts, "error", label, message, newLine);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}
class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message, newLine = true) {
    info(this.options, label, message, newLine);
  }
  warn(label, message, newLine = true) {
    warn(this.options, label, message, newLine);
  }
  error(label, message, newLine = true) {
    error(this.options, label, message, newLine);
  }
  debug(label, ...messages) {
    debug(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
}
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.label, message);
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const path = toPath(params);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/facturas.C5GmVMfA.css"},{"type":"inline","content":".factura_container,.facturas_grid_leyenda{background-color:#fff;padding:.3em;border-radius:.3em;margin:.1em;display:flex;justify-content:left}.factura_titulo,.factura_titulo_leyenda{width:40%;padding:.4em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.factura_id,.factura_id_leyenda{padding:.4em;width:10%}.factura_fecha_inicio,.factura_fecha_inicio_leyenda,.factura_fecha_final,.factura_fecha_final_leyenda,.factura_precio,.factura_precio_leyenda,.factura_pagada,.factura_pagada_leyenda{width:12%;padding:.4em}.facturas_grid_leyenda{background-color:#afadad}.modal-overlay{position:fixed;top:0;left:0;width:100%;height:100%;background-color:#00000080;display:flex;justify-content:center;align-items:center;padding:2em}.modal{background-color:#fff;padding:20px;width:80%;max-width:80%;max-height:80%;border-radius:5px;box-shadow:0 0 10px #0000004d;margin-right:1em}.modal button{margin-top:10px}.btnCerrarModal{background-color:#f39696;padding:.4em}.modal2{background-color:#fff;padding:20px;width:40%;max-width:80%;max-height:80%;border-radius:5px;box-shadow:0 0 10px #0000004d}.modal2 button{margin-top:10px}\n"}],"routeData":{"route":"/facturas","isIndex":false,"type":"page","pattern":"^\\/facturas\\/?$","segments":[[{"content":"facturas","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/facturas.astro","pathname":"/facturas","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/facturas.C5GmVMfA.css"},{"type":"inline","content":".proyectos_array_list{width:100%;height:100%;display:flex;flex-wrap:wrap;justify-content:center}.proyectos_array_grid{width:100%;height:100%;display:flex;flex-direction:column;justify-content:center}.proyectos_array_grid .proyectos_item{width:100%;max-width:100%;margin:.1em}.proyectos_changer{width:24px;filter:invert(40%);margin:1em}.proyectos_item{padding:1em;margin:1em;background-color:#ccc;border-radius:.3em;max-width:60%;max-height:60%;width:19em;height:40%}.proyectos_viewmodel{display:flex;justify-content:start;align-items:center;color:#ccc;background-color:#52525023;border-top-right-radius:.3em;border-top-left-radius:.3em}.proyectos_changer{margin-right:8px}\n"}],"routeData":{"route":"/proyectos","isIndex":false,"type":"page","pattern":"^\\/proyectos\\/?$","segments":[[{"content":"proyectos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/proyectos.astro","pathname":"/proyectos","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/facturas.C5GmVMfA.css"},{"type":"inline","content":".buttonIndex[data-astro-cid-j7pv25f6]{display:flex;align-items:center;justify-content:center}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/javie/Desktop/PROYECTOS PARA PORTFOLIO/astro/jmj-astro-utils/src/pages/facturas.astro",{"propagation":"none","containsHead":true}],["C:/Users/javie/Desktop/PROYECTOS PARA PORTFOLIO/astro/jmj-astro-utils/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/javie/Desktop/PROYECTOS PARA PORTFOLIO/astro/jmj-astro-utils/src/pages/proyectos.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_DB3obQVz.mjs","/src/pages/index.astro":"chunks/pages/index_5yJo1SDn.mjs","/src/pages/proyectos.astro":"chunks/pages/proyectos_CLh-63UF.mjs","\u0000@astrojs-manifest":"manifest_CMvCUCVJ.mjs","C:/Users/javie/Desktop/PROYECTOS PARA PORTFOLIO/astro/jmj-astro-utils/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_Dd8xquBn.mjs","\u0000@astro-page:src/pages/facturas@_@astro":"chunks/facturas_BYEggtma.mjs","\u0000@astro-page:src/pages/proyectos@_@astro":"chunks/proyectos_CEF6LMOM.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_BF1TvDCJ.mjs","@astrojs/react/client.js":"_astro/client.NPGP8d12.js","C:/Users/javie/Desktop/PROYECTOS PARA PORTFOLIO/astro/jmj-astro-utils/src/components/ProyectoCard":"_astro/ProyectoCard.seymNa3G.js","C:/Users/javie/Desktop/PROYECTOS PARA PORTFOLIO/astro/jmj-astro-utils/src/components/FacturaCard":"_astro/FacturaCard.APWEfhVb.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/facturas.C5GmVMfA.css","/aplicaciones.svg","/favicon.svg","/_astro/client.NPGP8d12.js","/_astro/FacturaCard.APWEfhVb.js","/_astro/facturas.p3RTshK6.css","/_astro/index.0WGRCh8f.js","/_astro/index.NEDEFKed.js","/_astro/jsx-runtime.K1e75nIr.js","/_astro/ProyectoCard.seymNa3G.js","/_astro/proyectos.CR8A17H6.css"],"buildFormat":"directory"});

export { AstroIntegrationLogger as A, Logger as L, getEventPrefix as g, levels as l, manifest };
