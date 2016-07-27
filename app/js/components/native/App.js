import React, { Component, StyleSheet, Text, View, Platform }  from 'react-native';
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
export default class ApplicationNative extends Component {

  renderPlatformSpecific() {
    return (<Text>{`${Platform.OS}`} Specific Component</Text>)
  }

	render() {
		const { changeHeading, incrementCounter, decrementCounter } = this.props.actions;
		const { heading, counter } = this.props;
		return (
			<View style={styles.container}>
				{this.renderPlatformSpecific()}
				<Text>Hot module enabled, try it out!</Text>
				<Text onPress={changeHeading} style={styles.welcome}>{heading}</Text>
				<Text onPress={incrementCounter} style={styles.welcome}>+</Text>
				<Text style={styles.counter}>{counter}</Text>
				<Text onPress={decrementCounter} style={styles.welcome}>-</Text>
				<Footer style={styles.default}/>
			</View>
		)
	};
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	counter: {
		fontSize: 30,
		top: 10,
		fontWeight: 'bold'
	},
	welcome: {
		fontSize: 40,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});
