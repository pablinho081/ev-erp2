import { getKPIs } from '@/lib/kpis'

export default async function Dashboard() {

  const kpis = await getKPIs("demo-org")

  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold">
        EV ERP Dashboard
      </h1>

      {/* GRID KPIs */}
      <div className="grid grid-cols-4 gap-4 mt-6">

        <Card title="Revenue" value={`€${kpis.totalRevenue}`} />
        <Card title="Cost" value={`€${kpis.totalCost}`} />
        <Card title="Margin" value={`€${kpis.margin}`} />
        <Card title="Margin %" value={`${kpis.marginPct.toFixed(2)}%`} />

      </div>

      <div className="grid grid-cols-3 gap-4 mt-6">

        <Card title="Orders" value={kpis.totalOrders} />
        <Card title="Active Orders" value={kpis.activeOrders} />
        <Card title="Chargers Sold" value={kpis.totalChargers} />

      </div>

    </div>
  )
}
