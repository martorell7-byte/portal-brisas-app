'use client'

export default function Dashboard() {
  return (
    <main style={{
      minHeight: '100vh',
      background: '#f0f4f8',
      fontFamily: 'sans-serif'
    }}>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, #1a5276 0%, #2980b9 100%)',
        padding: '16px 32px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '28px' }}>🏢</span>
          <div>
            <h1 style={{ color: 'white', margin: 0, fontSize: '18px' }}>Portal Brisas</h1>
            <p style={{ color: '#aed6f1', margin: 0, fontSize: '12px' }}>Condominio Jardín de las Brisas Dos</p>
          </div>
        </div>
        <button style={{