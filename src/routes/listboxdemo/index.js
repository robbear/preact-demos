import { h, Component } from 'preact';
import ElementContainer from '../../components/ElementContainer'
import ListBox from '@elix/elix/elements/ListBox';
import items from './items';
import './style.css';

export default class ListBoxDemo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: items,
      selectedIndex: 0
    };
  }

  componentDidMount() {
    this.listBoxElem.addEventListener('selected-index-changed', event => {
      this.setState({
        selectedIndex: event.detail.selectedIndex
      });
    });
  }
  
	render() {
    const itemElements = this.state.items && this.state.items.map(item => (
      <div key={item}>{item}</div>
    ));
    const description = `Selection: ${this.state.items[this.state.selectedIndex]}`;

		return (
		  <ElementContainer 
		    title="React app with an Elix list box" 
		    description={description}>
        <elix-list-box
            ref={(el) => { this.listBoxElem = el; }}
            id="list"
            aria-label="Fruits"
            selected-index={this.state.selectedIndex}
            style={{height: "295px", maxWidth: "400px"}}>
          {itemElements}
        </elix-list-box>
		  </ElementContainer>
		);
	}
}