export default function Card({ title, value }) {
  return (
    <div style={{
      padding: 16,
      border: "1px solid #eee",
      borderRadius: 12,
      background: "white"
    }}>
      <p style={{ fontSize: 12, color: "#666" }}>{title}</p>
      <p style={{ fontSize: 22, fontWeight: "bold" }}>{value}</p>
    </div>
  )
}
