const defaultProps = {
	label: 'Inherited Default Prop',
	data: [
		'The biscuit eater views with love, ransack the fortress before it hobbles.',
		'Shining conclusions hurts most fears.',
		'Peel chicken breasts equally, then mix with lemon juice and serve fully in casserole.',
		'Most unusual, harmless c-beams proudly assimilate a biological, conscious nanomachine.'
	]
};

export default class FOOTER {

	constructor(){}

	generator(){
		return this.props.data.map((item, i) => {
			return this.renderItem(item, i);
		});
	}

	renderItem(item, i){
		console.warn(`A ${this.__proto__.constructor.name} method requires override`)
	}

	inheritableFunction() {
		alert('inheritableFunction')
	}
}

FOOTER.defaultProps = defaultProps;
