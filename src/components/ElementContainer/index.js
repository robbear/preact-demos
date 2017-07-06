import { h, Component } from 'preact';
import style from './style';

export default class ElementContainer extends Component {

	render() {
		return (
			<div class={style.element_container}>
				<h1>{this.props.title}</h1>
				<h3>{this.props.description}</h3>
				{this.props.children}
			</div>
		);
	}
}
