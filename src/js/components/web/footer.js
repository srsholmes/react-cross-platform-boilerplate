import React, { Component } from 'react';
import FOOTER  from '../shared/footer';
const mixin = require('mixin');

export default class Footer extends mixin(FOOTER, Component) {

	renderItem(item, i){
		return(
			<li key={`${item}-${i}`}>
				{item}
			</li>
		);
	}

	render() {
		return (
			<div>
				<h1>{this.props.label}</h1>
				<p onClick={this.inheritableFunction}>
					Web Specific Text Not Flux
				</p>
				{this.generator()}
			</div>
		);
	}
}

Footer.defaultProps = FOOTER.defaultProps;
