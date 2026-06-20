import { supabase } from './supabase'

export async function getKPIs() {

  const { data: orders } = await supabase
    .from('orders')
    .select('*')

  const revenue = orders?.reduce((a,o)=>a + (o.total_price||0),0) || 0
  const cost = orders?.reduce((a,o)=>a + (o.total_cost||0),0) || 0

  return {
    revenue,
    cost,
    margin: revenue - cost
  }
}
