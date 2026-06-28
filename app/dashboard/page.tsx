'use client'

export default function Dashboard() {
  return (
    <main style={{
      minHeight: '100vh',
      background: '#f0f4f8',
      fontFamily: 'sans-serif'
    }}>
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
          background: 'rgba(255,255,255,0.2)',
          color: 'white',
          border: '1px solid rgba(255,255,255,0.3)',
          borderRadius: '8px',
          padding: '8px 16px',
          cursor: 'pointer',
          fontSize: '14px'
        }}>
          Cerrar sesión
        </button>
      </div>

      <div style={{ padding: '32px' }}>
        <h2 style={{ color: '#1a5276', marginBottom: '24px' }}>Panel de Administración</h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '16px',
          marginBottom: '32px'
        }}>
          {[
            { icon: '🏠', titulo: 'Departamentos', valor: '80', sub: '4 torres' },
            { icon: '🚗', titulo: 'Estacionamientos', valor: '160', sub: '157 regulares' },
            { icon: '👥', titulo: 'Residentes', valor: '0', sub: 'Sin registrar' },
            { icon: '💰', titulo: 'Gastos comunes', valor: '$0', sub: 'Mes actual' },
            { icon: '📅', titulo: 'Reservas', valor: '0', sub: 'Pendientes' },
            { icon: '📢', titulo: 'Comunicados', valor: '0', sub: 'Publicados' },
          ].map((card, i) => (
            <div key={i} style={{
              background: 'white',
              borderRadius: '12px',
              padding: '20px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '32px', marginBottom: '8px' }}>{card.icon}</div>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#1a5276' }}>{card.valor}</div>
              <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#2c3e50' }}>{card.titulo}</div>
              <div style={{ fontSize: '12px', color: '#95a5a6' }}>{card.sub}</div>
            </div>
          ))}
        </div>

        <h2 style={{ color: '#1a5276', marginBottom: '16px' }}>Módulos</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '16px'
        }}>
          {[
            { icon: '🏠', titulo: 'Departamentos', desc: 'Gestionar unidades y residentes' },
            { icon: '💰', titulo: 'Gastos Comunes', desc: 'Emisión y control de pagos' },
            { icon: '📅', titulo: 'Reservas', desc: 'Salón de eventos y quinchos' },
            { icon: '🚗', titulo: 'Estacionamientos', desc: 'Asignación y control' },
            { icon: '📖', titulo: 'Libro de Novedades', desc: 'Registro de conserjería' },
            { icon: '📢', titulo: 'Comunicados', desc: 'Avisos a residentes' },
          ].map((mod, i) => (
            <div key={i} style={{
              background: 'white',
              borderRadius: '12px',
              padding: '24px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '16px'
            }}>
              <span style={{ fontSize: '36px' }}>{mod.icon}</span>
              <div>
                <div style={{ fontWeight: 'bold', color: '#1a5276', fontSize: '16px' }}>{mod.titulo}</div>
                <div style={{ color: '#7f8c8d', fontSize: '13px' }}>{mod.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}