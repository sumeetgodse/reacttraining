import React from 'react';

import HelloWorld from '../components/HelloWorld';
import Text from '../components/Text';
import InputText from '../components/InputText';
import Button from '../components/Button';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      message: "Hello from Text",
      label: "Submit Button",
      placeholder: "Please enter input...",
      value: ""
    };

    this.buttonHandler = this.buttonHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  buttonHandler() {
    this.setState({
      message: this.state.value,
      value: ""
    });
  }

  handleChange(event) {    
    this.setState({
      value: event.target.value
    }); 
  }
  
  render() {
    return (
      <div>
        <HelloWorld />
        <Text message = {this.state.message} />
        <Button label = {this.state.label} buttonHandler = {this.buttonHandler} />
        <InputText placeholder = {this.state.placeholder} value = {this.state.value} handleChange = {this.handleChange} />
      </div>
    );
  }
}

export default HomePage;
