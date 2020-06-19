import React from 'react'

import './MessMenuForm.css'

function MessMenuForm() {
	return (
		<form className="msform">
			{/* <!-- progressbar --> */}
			<ul className="progressbar">
				<li className="active">Breakfast</li>
				<li>Lunch</li>
				<li>Dinner</li>
			</ul>
			{/* <!-- fieldsets --> */}
			<fieldset>
				<h2 className="fs-title">Create your menu</h2>
				<h3 className="fs-subtitle">Breakfast</h3>
				<div className="input-group">
					<input
						type="text"
						className="form-control input1"
						placeholder="Add food item"
						aria-label="Recipient's username"
						aria-describedby="button-addon2"
					/>
					<div className="input-group-append">
						<button className="btn btn-outline-secondary bg-success text-white" type="button" id="button-addon2">
							+
						</button>
					</div>
				</div>
				<div id="pokmonlist">
					<div className="pokmon">
						<span className="sp1">Pheromosa</span>
						<span className="sp2">
							<button type="button" className="btn1 bg-info">
								–
							</button>
						</span>
					</div>
					<div className="pokmon">
						<span className="sp1">Buzzwole</span>
						<span className="sp2">
							<button type="button" className="btn1 bg-info">
								–
							</button>
						</span>
					</div>
					<div className="pokmon">
						<span className="sp1">Kartana</span>
						<span className="sp2">
							<button type="button" className="btn1 bg-info">
								–
							</button>
						</span>
					</div>
					<div className="pokmon">
						<span className="sp1">Celesteela</span>
						<span className="sp2">
							<button type="button" className="btn1 bg-info">
								–
							</button>
						</span>
					</div>
					<div className="pokmon">
						<span className="sp1">Xurkitree</span>
						<span className="sp2">
							<button type="button" className="btn1 bg-info">
								–
							</button>
						</span>
					</div>
					<div className="pokmon">
						<span className="sp1">Guzzlord</span>
						<span className="sp2">
							<button type="button" className="btn1 bg-info">
								–
							</button>
						</span>
					</div>
					<div className="pokmon">
						<span className="sp1">Nihilego</span>
						<span className="sp2">
							<button type="button" className="btn1 bg-info">
								–
							</button>
						</span>
					</div>
				</div>
				<input type="button" name="next" className="next action-button" value="Next" />
			</fieldset>
			<fieldset>
				<h2 className="fs-title">Create your menu</h2>
				<h3 className="fs-subtitle">Lunch</h3>
				<div className="input-group">
					<input
						type="text"
						className="form-control input1"
						placeholder="Add food item"
						aria-label="Recipient's username"
						aria-describedby="button-addon2"
					/>
					<div className="input-group-append">
						<button className="btn btn-outline-secondary bg-success text-white" type="button" id="button-addon2">
							+
						</button>
					</div>
				</div>
				<div id="pokmonlist">
					<div className="pokmon">
						<span className="sp1">Pheromosa</span>
						<span className="sp2">
							<button type="button" className="btn1 bg-info">
								–
							</button>
						</span>
					</div>
					<div className="pokmon">
						<span className="sp1">Buzzwole</span>
						<span className="sp2">
							<button type="button" className="btn1 bg-info">
								–
							</button>
						</span>
					</div>
					<div className="pokmon">
						<span className="sp1">Kartana</span>
						<span className="sp2">
							<button type="button" className="btn1 bg-info">
								–
							</button>
						</span>
					</div>
					<div className="pokmon">
						<span className="sp1">Celesteela</span>
						<span className="sp2">
							<button type="button" className="btn1 bg-info">
								–
							</button>
						</span>
					</div>
					<div className="pokmon">
						<span className="sp1">Xurkitree</span>
						<span className="sp2">
							<button type="button" className="btn1 bg-info">
								–
							</button>
						</span>
					</div>
					<div className="pokmon">
						<span className="sp1">Guzzlord</span>
						<span className="sp2">
							<button type="button" className="btn1 bg-info">
								–
							</button>
						</span>
					</div>
					<div className="pokmon">
						<span className="sp1">Nihilego</span>
						<span className="sp2">
							<button type="button" className="btn1 bg-info">
								–
							</button>
						</span>
					</div>
				</div>
				<input type="button" name="previous" className="previous action-button" value="Previous" />
				<input type="button" name="next" className="next action-button" value="Next" />
			</fieldset>
			<fieldset>
				<h2 className="fs-title">Create your menu</h2>
				<h3 className="fs-subtitle">Dinner</h3>
				<div className="input-group">
					<input
						type="text"
						className="form-control input1"
						placeholder="Add food item"
						aria-label="Recipient's username"
						aria-describedby="button-addon2"
					/>
					<div className="input-group-append">
						<button className="btn btn-outline-secondary bg-success text-white" type="button" id="button-addon2">
							+
						</button>
					</div>
				</div>
				<div id="pokmonlist">
					<div className="pokmon">
						<span className="sp1">Pheromosa</span>
						<span className="sp2">
							<button type="button" className="btn1 bg-info">
								–
							</button>
						</span>
					</div>
					<div className="pokmon">
						<span className="sp1">Buzzwole</span>
						<span className="sp2">
							<button type="button" className="btn1 bg-info">
								–
							</button>
						</span>
					</div>
					<div className="pokmon">
						<span className="sp1">Kartana</span>
						<span className="sp2">
							<button type="button" className="btn1 bg-info">
								–
							</button>
						</span>
					</div>
					<div className="pokmon">
						<span className="sp1">Celesteela</span>
						<span className="sp2">
							<button type="button" className="btn1 bg-info">
								–
							</button>
						</span>
					</div>
					<div className="pokmon">
						<span className="sp1">Xurkitree</span>
						<span className="sp2">
							<button type="button" className="btn1 bg-info">
								–
							</button>
						</span>
					</div>
					<div className="pokmon">
						<span className="sp1">Guzzlord</span>
						<span className="sp2">
							<button type="button" className="btn1 bg-info">
								–
							</button>
						</span>
					</div>
					<div className="pokmon">
						<span className="sp1">Nihilego</span>
						<span className="sp2">
							<button type="button" className="btn1 bg-info">
								–
							</button>
						</span>
					</div>
				</div>
				<input type="button" name="previous" className="previous action-button" value="Previous" />
				<input type="submit" name="submit" className="submit action-button" value="Submit" />
			</fieldset>
		</form>
	)
}

export default MessMenuForm
