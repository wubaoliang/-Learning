import React,{ Component } from "react";
import './index.css'

import Item from '../Item'

export default class List extends Component {
	render() {
		return (
			<div className="list">
				<Item />
				<Item />
				<Item />
				<Item />
			</div>
		);
	}
}
