/** Fecha ISO (aaaa-mm-dd o aaaa-mm-ddThh:mm:ss) → "15 de septiembre de 2021". */
export function fechaLegible(iso: string): string {
  if (!iso) return "";
  const partes = iso.trim().split("T")[0].split("-");
  if (partes.length !== 3) return iso;
  const [a, m, d] = partes;
  const meses = [
    "enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre",
  ];
  const mes = meses[Number(m) - 1];
  if (!mes) return iso;
  return `${Number(d)} de ${mes} de ${a}`;
}
