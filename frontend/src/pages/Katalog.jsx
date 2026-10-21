import { useState } from 'react'
import { produk, kategori } from '../data/produk'

function Katalog() {
  const [cari, setCari] = useState('')
  const [aktif, setAktif] = useState('Semua')

  const tampil = produk.filter(
    (p) =>
      p.nama.toLowerCase().includes(cari.toLowerCase()) &&
      (aktif === 'Semua' || p.kategori === aktif)
  )

  return (
    <section className="section">
      <div className="wrap">
        <div className="judul-tengah"><h2>Katalog Buah</h2></div>

        <div className="toolbar">
          <div className="filter">
            {kategori.map((k) => (
              <button key={k} className={'chip' + (aktif === k ? ' aktif' : '')} onClick={() => setAktif(k)}>
                {k}
              </button>
            ))}
          </div>
          <input className="cari" placeholder="Cari buah..." value={cari} onChange={(e) => setCari(e.target.value)} />
        </div>

        {tampil.length === 0 ? (
          <p className="kosong">Produk tidak ditemukan.</p>
        ) : (
          <div className="grid">
            {tampil.map((p) => (
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
        )}
      </div>
    </section>
  )
}

export default Katalog