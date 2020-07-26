import React, { Component } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

export default class BoxList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			boxes: [ { width: 10, height: 40, color: 'orange' } ]
		};
	}

	render() {
		return (
			<div>
				<h1>Color Box Maker</h1>
				<NewBoxForm />
				{this.state.boxes.map((box) => (
					<Box width={box.width} height={box.height} color={box.color} />
				))}
			</div>
		);
	}
}
