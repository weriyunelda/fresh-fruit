import { Link } from 'react-router-dom'
import { produk } from '../data/produk'

const keunggulan = [
  { no: '01', judul: 'Pengiriman Cepat', ket: 'Pesanan sampai di hari yang sama' },
  { no: '02', judul: 'Pembayaran Aman', ket: 'Berbagai metode pembayaran terpercaya' },
  { no: '03', judul: 'Kesegaran Terjamin', ket: 'Buah dipilih langsung dari kebun' },
  { no: '04', judul: 'Layanan Pelanggan', ket: 'Siap membantu setiap hari' },
]

function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <div>
            <div className="label">100% Buah Segar</div>
            <h1>Buah Segar Pilihan untuk Keluarga Anda</h1>
            <p className="desc">
              Pilih buah favorit, masukkan ke keranjang, dan pantau status pesanan Anda dengan mudah.
            </p>
            <Link to="/katalog" className="btn">Lihat Katalog</Link>
            &nbsp;
            <Link to="/register" className="btn btn-outline">Daftar Sekarang</Link>
          </div>
          <div className="hero-visual">Foto Produk</div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="fitur">
            {keunggulan.map((k) => (
              <div key={k.no} className="fitur-item">
                <div className="fitur-nomor">{k.no}</div>
                <h3>{k.judul}</h3>
                <p>{k.ket}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="judul-section">
            <h2>Produk Pilihan</h2>
            <Link to="/katalog" className="btn btn-outline btn-kecil">Lihat Semua</Link>
          </div>
          <div className="grid">
            {produk.slice(0, 4).map((p) => (
              <div key={p.id} className="card">
                <span className="tag">{p.kategori}</span>
                <div className="thumb">{p.nama.charAt(0)}</div>
                <div className="isi">
                  <h3>{p.nama}</h3>
                  <p className="ket">{p.ket}</p>
                  <div className="bawah">
                    <span className="harga">Rp {p.harga.toLocaleString('id-ID')} <small>/ kg</small></span>
                    <button className="btn btn-outline btn-kecil">Tambah</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="banner">
        <div className="wrap">
          <div>
            <h2>Promo Buah Segar Minggu Ini</h2>
            <p>Diskon hingga 30% untuk produk pilihan.</p>
          </div>
          <Link to="/katalog" className="btn">Belanja Sekarang</Link>
        </div>
      </section>
    </>
  )
}

export default Home