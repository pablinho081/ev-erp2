import Card from '../../components/Card'
import { getKPIs } from '../../lib/kpis''

export default async function Dashboard() {

  const kpis = await getKPIs()

  return (
    <div style={{ padding: 20 }}>

      <h1>EV ERP DASHBOARD</h1>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10 }}>

        <Card title="Revenue" value={kpis.revenue} />
        <Card title="Cost" value={kpis.cost} />
        <Card title="Margin" value={kpis.margin} />
        <Card title="Margin %" value={kpis.marginPct} />

      </div>

    </div>
  )
}
