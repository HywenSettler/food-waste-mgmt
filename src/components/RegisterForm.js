import React, { useReducer } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

import foodMgmtApi from '../api'
import { logIn } from '../actions'

function registerFormReducer(state, action) {
	switch (action.type) {
		case 'EMAIL':
			return { ...state, email: action.payload }

		case 'PASSWORD':
			return { ...state, password: action.payload }

		default: {
			// helps us avoid typos!
			throw new Error(`Unhandled action type: ${action.type}`)
		}
	}
}

const states = [
	'Andhra Pradesh',
	'Arunachal Pradesh',
	'Assam',
	'Bihar',
	'Chhattisgarh',
	'Goa',
	'Gujarat',
	'Haryana',
	'Himachal Pradesh',
	'Jharkhand',
	'Karnataka',
	'Kerala',
	'Madhya Pradesh',
	'Maharashtra',
	'Manipur',
	'Meghalaya',
	'Mizoram',
	'Nagaland',
	'Odisha',
	'Punjab',
	'Rajasthan',
	'Sikkim',
	'Tamil Nadu',
	'Telangana',
	'Tripura',
	'Uttarakhand',
	'West Bengal'
]

const RegisterForm = (props) => {
	const [state, dispatch] = useReducer(registerFormReducer, {
		email: '',
		password: ''
	})

	const history = useHistory()

	const onFormSubmit = (e) => {
		e.preventDefault()
		foodMgmtApi
			.post('/register', state)
			.then((response) => {
				props.logIn()
				foodMgmtApi.post('/login', response.data)
			})
			.then((tokens) => {
				localStorage.setItem('accessToken', tokens.access_token)
				localStorage.setItem('refreshToken', tokens.refresh_token)

				history.push('/dashboard')
			})
			.catch((err) => console.log(err))
		// console.log(state)
	}

	const { email, password } = state

	return (
		<>
			<div style={{ paddingBottom: '15px' }}>
				<div className="container">
					<div className="row justify-content-center">
						<div className="mt-3">
							<form className="border border-success rounded p-5" onSubmit={onFormSubmit}>
								<div className="form-group">
									<label htmlFor="inputName">Organization Name</label>
									<input type="text" className="form-control" id="inputName" placeholder="ABC" />
								</div>
								<div className="form-row">
									<div className="form-group col-md-6">
										<label htmlFor="inputEmail4">Email</label>
										<input
											type="email"
											className="form-control"
											id="inputEmail4"
											value={email}
											onChange={(e) => dispatch({ type: 'EMAIL', payload: e.target.value })}
										/>
									</div>
									<div className="form-group col-md-6">
										<label htmlFor="inputPassword4">Password</label>
										<input
											type="password"
											className="form-control"
											id="inputPassword4"
											value={password}
											onChange={(e) => dispatch({ type: 'PASSWORD', payload: e.target.value })}
										/>
									</div>
								</div>
								<div className="form-group">
									<label htmlFor="inputAddress">Address</label>
									<input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
								</div>
								<div className="form-group">
									<label htmlFor="exampleFormControlSelect1">Select Category</label>
									<select className="form-control" id="exampleFormControlSelect1">
										<option>Mess</option>
										<option>NGO</option>
									</select>
								</div>
								<div className="form-row">
									<div className="form-group col-md-6">
										<label htmlFor="inputCity">City</label>
										<input type="text" className="form-control" id="inputCity" />
									</div>
									<div className="form-group col-md-4">
										<label htmlFor="inputState">State</label>
										<select id="inputState" className="form-control">
											<option selected>Choose...</option>
											{states.map((state) => (
												<option>{state}</option>
											))}
										</select>
									</div>
									<div className="form-group col-md-2">
										<label htmlFor="inputPin">PIN Code</label>
										<input type="text" className="form-control" id="inputPin" />
									</div>
								</div>
								<button type="submit" className="btn btn-primary">
									Sign in
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default connect(null, { logIn })(RegisterForm)
