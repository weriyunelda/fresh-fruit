const produk = [
  { id: 1, nama: 'Apel Fuji', harga: 25000 },
  { id: 2, nama: 'Jeruk Mandarin', harga: 20000 },
  { id: 3, nama: 'Pisang Cavendish', harga: 15000 },
]

function Katalog() {
  return (
    <div style={{ padding: 24 }}>
      <h2>Katalog Buah Segar</h2>
      <div style={{ display: 'flex', gap: 16 }}>
        {produk.map((p) => (
          <div key={p.id} style={{ border: '1px solid #ccc', padding: 16, borderRadius: 8 }}>
            <h3>{p.nama}</h3>
            <p>Rp {p.harga.toLocaleString('id-ID')}</p>
            <button>Tambah ke keranjang</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Katalog