import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import foodMgmtApi from '../api'

const LoginForm = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const history = useHistory()

	const onFormSubmit = (e) => {
		e.preventDefault()
		foodMgmtApi
			.post('/login', { email, password })
			.then((tokens) => {
				sessionStorage.setItem('accessToken', tokens.access_token)
				sessionStorage.setItem('refreshToken', tokens.refresh_token)

				history.push('/dashboard')
			})
			.catch((err) => console.log(err))
	}

	return (
		<form className="border border-success rounded p-5" onSubmit={onFormSubmit}>
			<div className="form-group">
				<input
					type="email"
					className="form-control"
					id="exampleInputEmail1"
					aria-describedby="emailHelp"
					placeholder="Enter your E-mail"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<small id="emailHelp" className="form-text text-muted">
					We'll never share your email with anyone else.
				</small>
			</div>
			<div className="form-group">
				<input
					type="password"
					className="form-control"
					id="exampleInputPassword1"
					placeholder="Enter your Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</div>
			<div className="form-group">
				<div className="custom-control custom-switch">
					<input type="checkbox" className="custom-control-input" id="customSwitch1" />
					<label className="custom-control-label" htmlFor="customSwitch1">
						Remember me
					</label>
				</div>
			</div>
			<button type="submit" className="btn btn-success btn-lg btn-block">
				Login
			</button>
		</form>
	)
}

export default LoginForm
