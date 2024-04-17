/* empty css                             */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderHead, g as renderComponent, h as renderSlot } from '../astro_rw0ytRGA.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { jsxs, jsx } from 'react/jsx-runtime';
/* empty css                             */
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { createRemoteDatabaseClient, asDrizzleTable } from '@astrojs/db/runtime';
import '@astrojs/db/dist/runtime/virtual.js';

const $$Astro$2 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  console.log("jiji");
  return renderTemplate`${maybeRenderHead()}<header class="py-4 px-4 mx-auto max-w-xl lg:pt-12 lg:pb-8 lg:px-6" data-astro-cid-3ef6ksr2> <div class="mx-auto text-center mb-6 lg:mb-6 my-0" data-astro-cid-3ef6ksr2> <h2 class="mb-4 text-5xl tracking-tight font-extrabold text-slate-500" data-astro-cid-3ef6ksr2>
JDEV Utils
</h2> </div> <nav class="flex flex-col items-center justify-between w-full text-center md:flex-row font-mono" data-astro-cid-3ef6ksr2> <a href="/" class="text-white hover:scale-105" data-astro-cid-3ef6ksr2> Inicio </a> <a href="./proyectos" class="text-white hover:scale-105" data-astro-cid-3ef6ksr2> Proyectos </a> <a href="./facturas" class="text-white hover:scale-105" data-astro-cid-3ef6ksr2> Facturación </a> <a href="./about" class="text-white hover:scale-105" data-astro-cid-3ef6ksr2> otros </a> <a href="./about" class="text-white hover:scale-105" data-astro-cid-3ef6ksr2> Viejos </a> </nav> </header> `;
}, "C:/Users/javie/Desktop/PROYECTOS PARA PORTFOLIO/astro/jmj-astro-utils/src/components/Header.astro", void 0);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <main> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "C:/Users/javie/Desktop/PROYECTOS PARA PORTFOLIO/astro/jmj-astro-utils/src/layouts/Layout.astro", void 0);

function ModalContentFactura({ onClose, data }) {
  return /* @__PURE__ */ jsxs("div", { className: "modal-overlay", children: [
    /* @__PURE__ */ jsxs("div", { className: "modal", children: [
      /* @__PURE__ */ jsxs("div", { className: "mx-auto text-center mb-6 lg:mb-10", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-lg font-bold text-gray-800 mb-2", children: data.nombre }),
        /* @__PURE__ */ jsx("div", { className: "border border-gray-300 p-4 rounded-lg", children: /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: data.descripcion }) }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
          /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-600", children: [
            "Fecha Registro: ",
            data.fecha_registro
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: data.pagada ? "Fecha Pago: " + data.fecha_pago : "" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("button", { onClick: onClose, className: "btnCerrarModal", children: "Cerrar" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "modal2", children: /* @__PURE__ */ jsx("div", { class: "mx-auto text-center mb-6 lg:mb-10", children: /* @__PURE__ */ jsx(
      "h2",
      {
        class: "mb-4 text-xl tracking-tight font-mono text-gray-600",
        children: "Proyectos"
      }
    ) }) })
  ] });
}

const FacturaCard = ({ data }) => {
  const [VerFacturasArray, setVerFacturasArray] = useState(data);
  const [showModal, setShowModal] = useState(false);
  const [selectedFactura, setSelectedFactura] = useState(null);
  const facturaClick = (factura) => {
    setShowModal(true);
    setSelectedFactura(factura);
  };
  const facturasArray = VerFacturasArray.map((factura) => /* @__PURE__ */ jsxs("div", { className: "factura_container", onClick: () => facturaClick(factura), children: [
    /* @__PURE__ */ jsx("div", { className: "factura_id", children: factura.id }),
    /* @__PURE__ */ jsx("div", { className: "factura_titulo", children: factura.nombre }),
    /* @__PURE__ */ jsx("div", { className: "factura_fecha_inicio", children: factura.fecha_registro }),
    /* @__PURE__ */ jsx("div", { className: "factura_fecha_final", children: factura.fecha_pago }),
    /* @__PURE__ */ jsxs("div", { className: "factura_precio", children: [
      factura.importe,
      "€"
    ] }),
    /* @__PURE__ */ jsx("div", { className: "factura_pagada", children: factura.pagada ? "si" : "no" })
  ] }, factura.id));
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("div", { className: "facturas_grid_leyenda", children: [
      /* @__PURE__ */ jsx("div", { className: "factura_id_leyenda", children: "ID" }),
      /* @__PURE__ */ jsx("div", { className: "factura_titulo_leyenda", children: "Factura" }),
      /* @__PURE__ */ jsx("div", { className: "factura_fecha_inicio_leyenda", children: "Fecha Registro" }),
      /* @__PURE__ */ jsx("div", { className: "factura_fecha_final_leyenda", children: "Fecha Pago" }),
      /* @__PURE__ */ jsx("div", { className: "factura_precio_leyenda", children: "Importe" }),
      /* @__PURE__ */ jsx("div", { className: "factura_pagada_leyenda", children: "Pagada" })
    ] }),
    facturasArray,
    showModal && createPortal(
      /* @__PURE__ */ jsx(ModalContentFactura, { onClose: () => setShowModal(false), data: selectedFactura }),
      document.body
    )
  ] });
};

const db = await createRemoteDatabaseClient(process.env.ASTRO_STUDIO_APP_TOKEN, {"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}.ASTRO_STUDIO_REMOTE_DB_URL ?? "https://db.services.astro.build");
const Factura = asDrizzleTable("Factura", { "columns": { "nombre": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "nombre", "collection": "Factura", "primaryKey": false, "optional": false } }, "id": { "type": "number", "schema": { "unique": true, "deprecated": false, "name": "id", "collection": "Factura", "primaryKey": true } }, "descripcion": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "descripcion", "collection": "Factura", "primaryKey": false, "optional": true } }, "fecha_registro": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "fecha_registro", "collection": "Factura", "primaryKey": false, "optional": false } }, "fecha_pago": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "fecha_pago", "collection": "Factura", "primaryKey": false, "optional": true } }, "pagada": { "type": "boolean", "schema": { "optional": false, "unique": false, "deprecated": false, "name": "pagada", "collection": "Factura", "default": false } }, "importe": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "importe", "collection": "Factura", "primaryKey": false, "optional": false } } }, "deprecated": false, "indexes": {} }, false);
const Proyecto = asDrizzleTable("Proyecto", { "columns": { "nombre": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "nombre", "collection": "Proyecto", "primaryKey": false, "optional": false } }, "id": { "type": "number", "schema": { "unique": true, "deprecated": false, "name": "id", "collection": "Proyecto", "primaryKey": true } } }, "deprecated": false, "indexes": {} }, false);

const $$Astro = createAstro();
const $$Facturas = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Facturas;
  const facturas = await db.select().from(Factura);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Facturas" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="py-2 px-2 mx-auto max-w-full lg:py-0 lg:px-6"> <div class="mx-auto mb-6 lg:mb-10 text-center"> ${renderComponent($$result2, "FacturaCard", FacturaCard, { "data": facturas, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/javie/Desktop/PROYECTOS PARA PORTFOLIO/astro/jmj-astro-utils/src/components/FacturaCard", "client:component-export": "default" })} </div> </main> ` })}`;
}, "C:/Users/javie/Desktop/PROYECTOS PARA PORTFOLIO/astro/jmj-astro-utils/src/pages/facturas.astro", void 0);

const $$file = "C:/Users/javie/Desktop/PROYECTOS PARA PORTFOLIO/astro/jmj-astro-utils/src/pages/facturas.astro";
const $$url = "/facturas";

const facturas = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Facturas,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, Proyecto as P, db as d, facturas as f };
