import React, { Component } from 'react';

export default class NewBoxForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			height: '',
			width: '',
			color: ''
		};
	}

	handleChange = (evt) => {};

	render() {
		return (
			<form>
				<div>
					<label htmlFor="height">Height</label>
					<input
						type="text"
						name="height"
						value={this.state.height}
						id="height"
						onChange={this.handleChange}
					/>
				</div>
			</form>
		);
	}
}
