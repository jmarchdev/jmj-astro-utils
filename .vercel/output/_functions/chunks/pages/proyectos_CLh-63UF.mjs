/* empty css                             */
import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead } from '../astro_rw0ytRGA.mjs';
import 'kleur/colors';
import 'html-escaper';
import { d as db, P as Proyecto, $ as $$Layout } from './facturas_OSlfvR69.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';
/* empty css                              */

const ProyectoCard = ({ data }) => {
  const [VerProyectosArray, setVerProyectosArray] = useState(data);
  const [isListMode, setIsListMode] = useState(false);
  const toggleViewMode = () => {
    setIsListMode(!isListMode);
  };
  const proyectosArray = VerProyectosArray.map((proyecto) => /* @__PURE__ */ jsx("div", { className: "proyectos_item", children: /* @__PURE__ */ jsx("div", { children: proyecto.nombre }) }, proyecto.id));
  return /* @__PURE__ */ jsxs("div", { className: "proyectos_container", children: [
    /* @__PURE__ */ jsxs("div", { className: "proyectos_viewmodel", onClick: toggleViewMode, children: [
      /* @__PURE__ */ jsx("img", { src: "public\\aplicaciones.svg", className: "proyectos_changer" }),
      " Cambiar vista "
    ] }),
    /* @__PURE__ */ jsx("div", { className: `proyectos_array ${isListMode ? "proyectos_array_list" : "proyectos_array_grid"}`, children: proyectosArray })
  ] });
};

const $$Astro = createAstro();
const $$Proyectos = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Proyectos;
  const proyectos = await db.select().from(Proyecto);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Proyectos" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="py-2 px-2 mx-auto max-w-full lg:py-0 lg:px-6"> <div class="mx-auto mb-6 lg:mb-10"> ${renderComponent($$result2, "ProyectoCard", ProyectoCard, { "data": proyectos, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/javie/Desktop/PROYECTOS PARA PORTFOLIO/astro/jmj-astro-utils/src/components/ProyectoCard", "client:component-export": "default" })} </div> </main> ` })}`;
}, "C:/Users/javie/Desktop/PROYECTOS PARA PORTFOLIO/astro/jmj-astro-utils/src/pages/proyectos.astro", void 0);

const $$file = "C:/Users/javie/Desktop/PROYECTOS PARA PORTFOLIO/astro/jmj-astro-utils/src/pages/proyectos.astro";
const $$url = "/proyectos";

export { $$Proyectos as default, $$file as file, $$url as url };
