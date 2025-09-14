import { Routes, Route, NavLink } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Alerts from './pages/Alerts'
import Music from './pages/Music'
import History from './pages/History'
import Checkup from './pages/Checkup'
import Parking from './pages/Parking'
import Ranking from './pages/Ranking'
import Subscription from './pages/Subscription'
import Settings from './pages/Settings'
import BottomNav from './components/BottomNav'

export default function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Painel Car</h1>
        <nav className="top-nav">
          <NavLink to="/settings">⚙️</NavLink>
        </nav>
      </header>

      <main className="app-main">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/music" element={<Music />} />
          <Route path="/history" element={<History />} />
          <Route path="/checkup" element={<Checkup />} />
          <Route path="/parking" element={<Parking />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>

      <BottomNav />
    </div>
  )
}
