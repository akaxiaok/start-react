import React, { Component } from 'react';
import { observable } from "mobx";
import { observer } from 'mobx-react';

class Store {
  @observable tip = '';
}

const store = new Store();

@observer
class Tip extends Component {
  render() {
    return (<div >{this.props.store.tip}</div > );
  }
}


class App extends Component {
  handleClick = () => {
    store.tip = 'Hello World';
  };

  render() {
    return (
      <div >
        <div onClick={this.handleClick} >Click me.</div >
        <Tip store={store} />
      </div >
    );
  }
}

export default App;