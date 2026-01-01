import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import Button from '../components/ui/Button'

export default function AdminLogin() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setError('')

    const success = login(password)

    if (success) {
      navigate('/admin')
    } else {
      setError('Incorrect password')
      setPassword('')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-midnight px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-headline text-amber mb-2">Admin Login</h1>
          <p className="text-cream-dark">Enter password to access the admin panel</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-card-bg border border-cream/10 rounded-sm p-8 shadow-lg">
          <div className="mb-6">
            <label htmlFor="password" className="block text-cream text-sm font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-midnight border border-cream/20 rounded-sm text-cream placeholder-cream-dark/50 focus:outline-none focus:border-amber focus:ring-1 focus:ring-amber transition-colors"
              placeholder="Enter admin password"
              autoFocus
              required
            />
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-900/20 border border-red-500/30 rounded-sm">
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}

          <Button type="submit" variant="primary" className="w-full">
            Login
          </Button>
        </form>
      </div>
    </div>
  )
}
