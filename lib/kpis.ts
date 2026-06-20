import { supabase } from './supabase'

export async function getKPIs() {

  const { data: orders, error } = await supabase
    .from('orders')
    .select('*')

  if (error) {
    console.log(error)
    return {
      revenue: 0,
      cost: 0,
      margin: 0,
      marginPct: 0,
      orders: 0,
      activeOrders: 0,
      chargers: 0
    }
  }

  const revenue = orders?.reduce((acc, o) =>
    acc + (o.total_price || 0), 0) || 0

  const cost = orders?.reduce((acc, o) =>
    acc + (o.total_cost || 0), 0) || 0

  const margin = revenue - cost

  const marginPct = revenue > 0
    ? (margin / revenue) * 100
    : 0

  return {
    revenue,
    cost,
    margin,
    marginPct,
    orders: orders?.length || 0,
    activeOrders: orders?.length || 0,
    chargers: 0
  }
}
