import { supabase } from './supabase'

export async function getKPIs(orgId: string) {

  const { data: orders } = await supabase
    .from('orders')
    .select('*')
    .eq('org_id', orgId)

  const { data: lines } = await supabase
    .from('order_lines')
    .select('*')

  const totalRevenue = orders?.reduce((acc, o) =>
    acc + (o.total_price || 0), 0)

  const totalCost = orders?.reduce((acc, o) =>
    acc + (o.total_cost || 0), 0)

  const margin = totalRevenue - totalCost

  const marginPct = totalRevenue
    ? (margin / totalRevenue) * 100
    : 0

  const activeOrders = orders?.filter(o =>
    o.status !== 'Finalizado'
  ).length

  return {
    totalRevenue,
    totalCost,
    margin,
    marginPct,
    totalOrders: orders?.length || 0,
    activeOrders: activeOrders || 0,
    totalChargers: lines?.length || 0
  }
}
