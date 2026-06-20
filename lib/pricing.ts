export function calculatePricing(order: any, lines: any[]) {

  const hardware = lines.reduce((acc, l) => acc + l.qty * l.unit_cost, 0)

  const logistics =
    (order.shipping_factory || 0) +
    (order.shipping_client || 0) +
    (order.ior_cost || 0) +
    (order.raee_cost || 0)

  const base = hardware + logistics

  const contingency = base * ((order.contingency_pct || 5) / 100)

  const totalCost = base + contingency

  const margin = (order.margin_pct || 30) / 100

  const salePrice = totalCost / (1 - margin)

  return { hardware, logistics, contingency, totalCost, salePrice }
}
