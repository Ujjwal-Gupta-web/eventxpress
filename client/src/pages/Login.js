import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { login_user } from '../controllers/user';

const Login = () => {

  const navigate = useNavigate();

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/host_event");
    }
  }, [])

  const handle_login = () => {
    let obj = {
      email,
      password
    }
    login_user(obj).then(data => {
      alert(data.message);
      if (data.tag) {
        localStorage.setItem("user", data.token);
        navigate("/host_event");
      }
      else {
        setEmail("");
        setPassword("");
      }
    })
  }

  return (
    <>
      <div className='container border border-lg p-4' style={{ maxWidth: "300px" }}>
        <h3 className='mb-3' style={{ color: "#595dcff2" }}>Login</h3>
        <div className='text-muted my-1 fs-7'>Not registered ? <Link to="/signup">Register here</Link></div>
        <div class="mb-3">
          <label for="login_email" class="form-label">Email address</label>
          <input type="email" class="form-control" value={email} onChange={(e) => setEmail(e.target.value)} id="login_email" />
        </div>
        <div class="mb-3">
          <label for="login_password" class="form-label">Password</label>
          <input type="password" class="form-control" value={password} onChange={(e) => setPassword(e.target.value)} id="login_password" />
        </div>
        <button onClick={handle_login} class="btn btn-secondary">Login</button>
      </div>
    </>
  )
}

export default Login