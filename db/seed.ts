import { date } from "astro/zod";
import { db, Factura, Proyecto } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(Factura).values([
    {
      nombre: "jaja",
      id: 1,
      descripcion: "jaja",
      fecha_registro: "hoy",
      fecha_pago: "hoy",
      pagada: true,
      importe: 12,
    },
    {
      nombre: "jaja",
      id: 2,
      descripcion: "jaja",
      fecha_registro: "hoy",
      fecha_pago: "hoy",
      pagada: true,
      importe: 12,
    },
  ]);

  await db.insert(Proyecto).values([
    {
      nombre: "proyecto 1",
      id: 1,
    },
    {
      nombre: "proyecto 2",
      id: 2,
    },
    {
      nombre: "proyecto 3",
      id: 3,
    },
    {
      nombre: "proyecto 4",
      id: 4,
    },
    {
      nombre: "proyecto 5",
      id: 5,
    },
  ]);
}
