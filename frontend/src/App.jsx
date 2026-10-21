import { BrowserRouter, Routes, Route, NavLink, Link } from 'react-router-dom'
import Home from './pages/Home'
import Katalog from './pages/Katalog'
import Login from './pages/Login'
import Register from './pages/Register'

const IkonKeranjang = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 7h12l-1 13H7L6 7z" /><path d="M9 7a3 3 0 0 1 6 0" />
  </svg>
)
const IkonUser = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
  </svg>
)

function App() {
  return (
    <BrowserRouter>
      <div className="topbar">
        <div className="wrap">
          <span>Jl. Contoh No. 123, Indonesia &nbsp;|&nbsp; support@freshfruit.com</span>
          <span>Kebijakan Privasi &nbsp;/&nbsp; Syarat Penggunaan</span>
        </div>
      </div>

      <header className="navbar">
        <div className="wrap">
          <Link to="/" className="logo">FreshFruit</Link>
          <nav className="menu">
            <NavLink to="/" end>Beranda</NavLink>
            <NavLink to="/katalog">Katalog</NavLink>
            <NavLink to="/register">Register</NavLink>
          </nav>
          <div className="aksi">
            <Link to="/katalog" className="ikon-btn" aria-label="Keranjang">
              <IkonKeranjang />
              <span className="badge-cart">0</span>
            </Link>
            <Link to="/login" className="ikon-btn" aria-label="Login"><IkonUser /></Link>
          </div>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/katalog" element={<Katalog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <footer className="footer">
        <div className="wrap">
          <div className="footer-atas">
            <div>
              <Link to="/" className="logo">FreshFruit</Link>
              <span>Buah segar pilihan</span>
            </div>
          </div>
          <div className="footer-kolom">
            <div>
              <h4>Tentang Kami</h4>
              <p>FreshFruit adalah toko buah online yang menghadirkan buah segar langsung ke rumah Anda.</p>
            </div>
            <div>
              <h4>Informasi</h4>
              <Link to="/">Beranda</Link>
              <Link to="/katalog">Katalog</Link>
              <Link to="/katalog">Keranjang</Link>
            </div>
            <div>
              <h4>Akun</h4>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
              <Link to="/katalog">Riwayat Pesanan</Link>
            </div>
            <div>
              <h4>Kontak</h4>
              <p>Jl. Contoh No. 123, Indonesia</p>
              <p>support@freshfruit.com</p>
              <p>+62 812 3456 7890</p>
            </div>
          </div>
        </div>
        <div className="footer-bawah">&copy; 2026 FreshFruit. Seluruh hak cipta dilindungi.</div>
      </footer>
    </BrowserRouter>
  )
}

export default App