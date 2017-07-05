import { h, Component } from 'preact';
import ElementContainer from '../../components/ElementContainer'
import './style.css';

export default class ListBoxDemo extends Component {
	render() {
		return (
		  <ElementContainer title="ListBox" description="ListBox description text">
		    <div>Div text is placed temporarily here</div>
		  </ElementContainer>
		);
	}
}