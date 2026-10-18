function Login() {
  return (
    <div style={{ maxWidth: 360, margin: '60px auto' }}>
      <h2>Login FreshFruit</h2>
      <input type="email" placeholder="Email" style={{ display: 'block', width: '100%', marginBottom: 10 }} />
      <input type="password" placeholder="Password" style={{ display: 'block', width: '100%', marginBottom: 10 }} />
      <button>Masuk</button>
    </div>
  )
}

export default Login