import { optional } from "astro/zod";
import { defineDb, defineTable, column } from "astro:db";

const Factura = defineTable({
  columns: {
    nombre: column.text(),
    id: column.number({ primaryKey: true, unique: true }),
    descripcion: column.text({ optional: true }),
    fecha_registro: column.text({ optional: false }),
    fecha_pago: column.text({ optional: true }),
    pagada: column.boolean({ default: false }),
    importe: column.number({ optional: false }),
  },
});

const Proyecto = defineTable({
  columns: {
    nombre: column.text(),
    id: column.number({ primaryKey: true, unique: true }),
  },
});

export default defineDb({
  tables: { Factura, Proyecto },
});
