import React, { Component, StyleSheet, Text, View, Platform }  from 'react-native';
import FOOTER  from '../shared/footer';
import mixin from 'mixin'

export default class Footer extends mixin(FOOTER, React.Component) {

	renderItem(item, i){
		return(
			<Text key={i} style={styles.small}>
				{"\n"}-{item}
			</Text>
		);
	}

	render() {
		const { style, label } = this.props
		return (
			<Text style={style}>
				<Text style={styles.header}>
					{label}
				</Text>
				<Text onPress={this.inheritableFunction}>
					{"\n"}{Platform.OS} Specific Text Not Flux
				</Text>
				{this.generator()}
			</Text>
		);
	}
}

var styles = StyleSheet.create({
	general: {
		alignItems: 'center'
	},
	header: {
		fontSize: 30,
		top: 10,
		fontWeight: 'bold'
	},
	welcome: {
		fontSize: 40,
		textAlign: 'center',
		margin: 10,
	},
	small: {
		fontSize:8,
		textAlign: 'left',
		color: '#999999'
	},
});

Footer.defaultProps = FOOTER.defaultProps;
