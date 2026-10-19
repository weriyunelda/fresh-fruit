function Register() {
  return (
    <div className="form-box">
      <h2>Daftar Akun</h2>
      <input type="text" placeholder="Nama" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button className="btn btn-blok">Daftar</button>
    </div>
  )
}

export default Register