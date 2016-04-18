import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../actions/actions';
import Footer from './footer';

@connect((state) => ({
	counter: state.counter,
	heading: state.heading
}), (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
})

export default class App extends Component {
	render() {
		const { heading, counter } = this.props;
		const { changeHeading, incrementCounter, decrementCounter } = this.props.actions;
		return (
			<div>
				<h1 onClick={changeHeading}>{heading}</h1>
				<button onClick={incrementCounter}>+</button>
				<h2>{counter}</h2>
				<button onClick={decrementCounter}>-</button>
				<Footer/>
			</div>
		)
	}
}
