import React, { component } from 'react';
import Shit from './Button'

class Counter extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      counter: 0
    }
  }


  render() {
    const testText = 'fucking test';

    return(
      <div className='container'>
        <div className='counterClass'>
          {this.state.counter}
        </div>
        <Button
          onClick={() => this.setState({counter: this.state.counter +1})}
          num={this.state.counter}
        />
      </div>
    );
  }
}

export default Counter;
