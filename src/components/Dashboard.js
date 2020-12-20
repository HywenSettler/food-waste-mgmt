import React, { useState, Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'

import foodMgmtApi from '../api'
import Navbar from './Navbar'
import BarChart from './BarChart'
import PieChart from './PieChart'

import './Dashboard.css'

const Dashboard = () => {
	// false - Pie Chart & true - Bar Chart
	const [chart, setChart] = useState(false)
	const toggleChart = () => {
		setChart(!chart)
	}

	const [data, setData] = useState('')

	useEffect(() => {
		let accessToken = sessionStorage.getItem('accessToken')
		let refreshToken = sessionStorage.getItem('refreshToken')

		foodMgmtApi.get('/user', { headers: { Authorization: `Bearer ${accessToken}` } }).then((res) => {
			setData(res.data.password)
		})
	}, [])

	return (
		<div>
			<Navbar />
			<div className="outside-div d-flex justify-content-around">
				<span className="welcome-span">
					<span>
						<img
							src="https://res.cloudinary.com/dc2o7coc1/image/upload/v1607699247/food-waste-mgmt/food-wasted.jpg"
							className="image-dim"
							alt="..."
						/>
					</span>
					<span className="hi-text pl-2">
						Hi!
						<div className="welcome-text">Welcome back</div>
					</span>
					<div className="input-group my-3 ml-5 search-div">
						<input type="text" className="form-control" placeholder="Search Contacts..." />
						<div className="input-group-append">
							<span className="input-group-text" id="basic-addon2">
								Search
							</span>
						</div>
					</div>
					{chart && (
						<Fragment>
							<BarChart />
							<button type="button" class="btn btn-primary" onClick={toggleChart}>
								Show Pie
							</button>
						</Fragment>
					)}
					{!chart && (
						<Fragment>
							<PieChart />
							<button type="button" class="btn btn-primary" onClick={toggleChart}>
								Show Bar
							</button>
						</Fragment>
					)}
				</span>
				<span className="card-span mt-2">
					<div className="card card-div">
						<img
							src="https://res.cloudinary.com/dc2o7coc1/image/upload/v1607699244/food-waste-mgmt/hungry-children.jpg"
							className="card-img-top img-size"
							style={{ borderRadius: '20px 20px 0px 0px' }}
							alt="..."
						/>
						<div className="card-body d-flex justify-content-center">
							<Link to="/create-menu" className="btn btn-primary ml-4">
								Create Your Mess Menu
							</Link>
						</div>
					</div>
					<div className="card mt-5 card-div second-search-div">
						<img
							src="https://res.cloudinary.com/dc2o7coc1/image/upload/v1607699244/food-waste-mgmt/hungry-children.jpg"
							className="card-img-top img-size"
							style={{ borderRadius: '20px 20px 0px 0px' }}
							alt="..."
						/>
						<div className="card-body d-flex justify-content-center">
							<Link to="/donate" className="btn btn-primary ml-4">
								Donate Food
							</Link>
						</div>
					</div>
				</span>
				<span className="mt-3 card-span" style={{ height: 'inherit' }}>
					<div className="card side-span-card">
						<img
							src="https://res.cloudinary.com/dc2o7coc1/image/upload/v1607699244/food-waste-mgmt/hungry-children.jpg"
							className="card-img-top px-2 py-3 rounded-sm"
							alt="..."
						/>
						<div className="card-body">
							{/* <h5 className="card-title">Card title</h5> */}
							<h5 className="card-title">{data}</h5>
							<p className="card-text">
								Some quick example text to build on the card title and make up the bulk of the card's content.
							</p>
						</div>
					</div>
				</span>
			</div>
		</div>
	)
}

export default Dashboard
