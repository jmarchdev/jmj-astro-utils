import{j as a}from"./jsx-runtime.K1e75nIr.js";/* empty css                          */import{r as c}from"./index.NEDEFKed.js";import{r as m}from"./index.0WGRCh8f.js";function x({onClose:r,data:s}){return a.jsxs("div",{className:"modal-overlay",children:[a.jsxs("div",{className:"modal",children:[a.jsxs("div",{className:"mx-auto text-center mb-6 lg:mb-10",children:[a.jsx("h2",{className:"text-lg font-bold text-gray-800 mb-2",children:s.nombre}),a.jsx("div",{className:"border border-gray-300 p-4 rounded-lg",children:a.jsx("p",{className:"text-sm text-gray-600",children:s.descripcion})}),a.jsxs("div",{className:"mt-4",children:[a.jsxs("p",{className:"text-sm text-gray-600",children:["Fecha Registro: ",s.fecha_registro]}),a.jsx("p",{className:"text-sm text-gray-600",children:s.pagada?"Fecha Pago: "+s.fecha_pago:""})]})]}),a.jsx("button",{onClick:r,className:"btnCerrarModal",children:"Cerrar"})]}),a.jsx("div",{className:"modal2",children:a.jsx("div",{class:"mx-auto text-center mb-6 lg:mb-10",children:a.jsx("h2",{class:"mb-4 text-xl tracking-tight font-mono text-gray-600",children:"Proyectos"})})})]})}const g=({data:r})=>{const[s,h]=c.useState(r),[l,t]=c.useState(!1),[i,d]=c.useState(null),n=e=>{t(!0),d(e)},o=s.map(e=>a.jsxs("div",{className:"factura_container",onClick:()=>n(e),children:[a.jsx("div",{className:"factura_id",children:e.id}),a.jsx("div",{className:"factura_titulo",children:e.nombre}),a.jsx("div",{className:"factura_fecha_inicio",children:e.fecha_registro}),a.jsx("div",{className:"factura_fecha_final",children:e.fecha_pago}),a.jsxs("div",{className:"factura_precio",children:[e.importe,"€"]}),a.jsx("div",{className:"factura_pagada",children:e.pagada?"si":"no"})]},e.id));return a.jsxs("div",{children:[a.jsxs("div",{className:"facturas_grid_leyenda",children:[a.jsx("div",{className:"factura_id_leyenda",children:"ID"}),a.jsx("div",{className:"factura_titulo_leyenda",children:"Factura"}),a.jsx("div",{className:"factura_fecha_inicio_leyenda",children:"Fecha Registro"}),a.jsx("div",{className:"factura_fecha_final_leyenda",children:"Fecha Pago"}),a.jsx("div",{className:"factura_precio_leyenda",children:"Importe"}),a.jsx("div",{className:"factura_pagada_leyenda",children:"Pagada"})]}),o,l&&m.createPortal(a.jsx(x,{onClose:()=>t(!1),data:i}),document.body)]})};export{g as default};
