import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
	return (
		<ul class="nav nav-tabs justify-content-around mx-auto mt-3 row col-6">
			<li class="nav-item">
				<Link class="nav-link active" to="/login">
					Login
				</Link>
			</li>
			<li class="nav-item">
				<Link class="nav-link active" to="/signup">
					Signup
				</Link>
			</li>
			<li class="nav-item">
				<Link class="nav-link active" to="/menu">
					Create Menu
				</Link>
			</li>
		</ul>
	)
}

export default Header
