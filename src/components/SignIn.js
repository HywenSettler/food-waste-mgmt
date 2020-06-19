import React, { Fragment } from 'react'

function SignIn() {
	return (
		<Fragment>
			<nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#e3f2fd' }}>
				<a className="navbar-brand" href="#"></a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item">
							<a className="nav-link" href="#">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="AboutUs.html">
								About Us
							</a>
						</li>
					</ul>
				</div>
			</nav>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-6 mt-5">
						<form className="border border-success rounded p-5">
							<div className="form-group">
								<label htmlFor="inputName">Organization Name</label>
								<input type="text" className="form-control" id="inputAddress" placeholder="ABC" />
							</div>
							<div className="form-row">
								<div className="form-group col-md-6">
									<label htmlFor="inputEmail4">Email</label>
									<input type="email" className="form-control" id="inputEmail4" />
								</div>
								<div className="form-group col-md-6">
									<label htmlFor="inputPassword4">Password</label>
									<input type="password" className="form-control" id="inputPassword4" />
								</div>
							</div>
							<div className="form-group">
								<label htmlFor="inputAddress">Address</label>
								<input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
							</div>
							<div className="form-group">
								<label htmlFor="inputAddress2">Address 2</label>
								<input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
							</div>
							<div className="form-group">
								<label htmlFor="exampleFormControlSelect1">Select Category</label>
								<select className="form-control" id="exampleFormControlSelect1">
									<option>Donor</option>
									<option>Recipient</option>
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
										<option>...</option>
									</select>
								</div>
								<div className="form-group col-md-2">
									<label htmlFor="inputZip">Zip</label>
									<input type="text" className="form-control" id="inputZip" />
								</div>
							</div>
							<div className="form-group">
								<div className="form-check">
									<input className="form-check-input" type="checkbox" id="gridCheck" />
									<label className="form-check-label" htmlFor="gridCheck">
										Check me out
									</label>
								</div>
							</div>
							<button type="submit" className="btn btn-primary">
								Sign in
							</button>
						</form>
					</div>
				</div>
			</div>
		</Fragment>
	)
}

export default SignIn
