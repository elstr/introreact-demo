import React, {Component} from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 0
    }
    this.setNewNumber = this.setNewNumber.bind(this)
  }
  setNewNumber() {
    this.setState({data: this.state.data + 1})
  }
  render() {
    const {data} = this.state
    return (
      <div>
        <button onClick = {this.setNewNumber}>INCREMENT</button>
        <Content myNumber = {data} />
      </div>
    );
  }
}
class Content extends Component {
  constructor(props) {
    super(props)
    console.log('Component CONSTRUCTOR')
    console.log(props)
  }
  componentWillMount() {
    console.log('Component WILL MOUNT!')
  }
  componentDidMount() {
    console.log('Component DID MOUNT!')
  }
  componentWillReceiveProps(newProps) {
    console.log('Component WILL RECIEVE PROPS!')
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('SHOULD COMPONENT UPDATE')
    return true;
    //console.log(nextProps)
    //const {myNumber} = nextProps
    //return myNumber % 2 === 0 ? true :  false
    //return myNumber % 2 === 0
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('Component WILL UPDATE!');
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('Component DID UPDATE!')
  }
  componentWillUnmount() {
    console.log('Component WILL UNMOUNT!')
  }
  render() {
    console.log('Component RENDER')
    const {myNumber} = this.props
    return (
      <div>
        <h3>{myNumber}</h3>
      </div>
    );
  }
}

export default Counter;