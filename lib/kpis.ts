export async function getKPIs() {

  const revenue = 0
  const cost = 0

  const margin = revenue - cost

  const marginPct = revenue
    ? (margin / revenue) * 100
    : 0

  return {
    revenue,
    cost,
    margin,
    marginPct,
    orders: 0,
    activeOrders: 0,
    chargers: 0
  }
}
