'use client'

import { useState } from 'react'
import { signIn } from './lib/supabase'

export default function Home() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async () => {
    setLoading(true)
    setError('')
    const result = await signIn(email, password)
    if (result.error || result.error_code) {
      setError('Correo o contraseña incorrectos')
    } else {
      window.location.href = '/dashboard'
    }
    setLoading(false)
  }

  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #1a5276 0%, #2980b9 100%)',
      fontFamily: 'sans-serif'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '48px',
        width: '100%',
        maxWidth: '400px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
        textAlign: 'center'
      }}>
        <div style={{ marginBottom: '8px', fontSize: '48px' }}>🏢</div>
        <h1 style={{ color: '#1a5276', margin: '0 0 4px 0', fontSize: '24px' }}>
          Portal Brisas
        </h1>
        <p style={{ color: '#7f8c8d', margin: '0 0 32px 0', fontSize: '14px' }}>
          Condominio Jardín de las Brisas Dos
        </p>

        <div style={{ marginBottom: '16px', textAlign: 'left' }}>
          <label style={{ display: 'block', marginBottom: '6px', color: '#2c3e50', fontSize: '14px', fontWeight: 'bold' }}>
            Correo electrónico
          </label>
          <input
            type="email"
            placeholder="correo@ejemplo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '8px',
              border: '1px solid #bdc3c7',
              fontSize: '14px',
              boxSizing: 'border-box'
            }}
          />
        </div>

        <div style={{ marginBottom: '24px', textAlign: 'left' }}>
          <label style={{ display: 'block', marginBottom: '6px', color: '#2c3e50', fontSize: '14px', fontWeight: 'bold' }}>
            Contraseña
          </label>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '8px',
              border: '1px solid #bdc3c7',
              fontSize: '14px',
              boxSizing: 'border-box'
            }}
          />
        </div>

        {error && (
          <p style={{ color: '#e74c3c', fontSize: '14px', marginBottom: '16px' }}>
            {error}
          </p>
        )}

        <button
          onClick={handleLogin}
          disabled={loading}
          style={{
            width: '100%',
            padding: '14px',
            background: loading ? '#95a5a6' : 'linear-gradient(135deg, #1a5276, #2980b9)',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: loading ? 'not-allowed' : 'pointer'
          }}>
          {loading ? 'Ingresando...' : 'Ingresar'}
        </button>

        <p style={{ marginTop: '24px', color: '#95a5a6', fontSize: '12px' }}>
          ¿Problemas para ingresar? Contacta a administración
        </p>
      </div>
    </main>
  )
}