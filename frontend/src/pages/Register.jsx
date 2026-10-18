function Register() {
  return (
    <div style={{ maxWidth: 360, margin: '60px auto' }}>
      <h2>Daftar Akun</h2>
      <input type="text" placeholder="Nama" style={{ display: 'block', width: '100%', marginBottom: 10 }} />
      <input type="email" placeholder="Email" style={{ display: 'block', width: '100%', marginBottom: 10 }} />
      <input type="password" placeholder="Password" style={{ display: 'block', width: '100%', marginBottom: 10 }} />
      <button>Daftar</button>
    </div>
  )
}

export default Register