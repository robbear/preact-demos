import { h, Component } from 'preact';
import style from './style';

export default class ElementContainer extends Component {

  constructor(props) {
    super(props);
    console.dir(props);
    this.state = {
      title: props.title,
      description: props.description
    };
  }

	render() {
		return (
			<div class={style.element_container}>
				<h1>{this.state.title}</h1>
				<h3>{this.state.description}</h3>
				{this.props.children}
			</div>
		);
	}
}
