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

	handleChange = (evt) => {
		this.setState({
			[evt.target.name]: evt.target.value
		});
	};

	handleSubmit = (evt) => {
		evt.preventDefault();
		this.props.createBox(this.state);
		this.setState({ height: '', width: '', color: '' });
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
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
				<div>
					<label htmlFor="width">Width</label>
					<input
						type="text"
						name="width"
						value={this.state.width}
						id="width"
						onChange={this.handleChange}
					/>
				</div>
				<div>
					<label htmlFor="color">color</label>
					<input
						type="text"
						name="color"
						value={this.state.color}
						id="color"
						onChange={this.handleChange}
					/>
				</div>
				<button>Add New Box</button>
			</form>
		);
	}
}
