import React, {Component} from 'react'

export default class Calculator extends Component {
  constructor () {
    super()

    this.state = {
      valorCel: 0,
      valorFah: 0,
    }

    this.handleInputCelsiusChange = this.handleInputCelsiusChange.bind(this)
    this.handleInputFahrenheitChange = this.handleInputFahrenheitChange.bind(this)
  }

  handleInputCelsiusChange ({target}) {
    const {value} = target
    // return (celsius * 9 / 5) + 32;
    const valorFah = (value * 9 / 5) + 32
    this.setState({valorCel: value, valorFah})
  }

  handleInputFahrenheitChange ({target}) {
    const {value} = target
    // return (fahrenheit - 32) * 5 / 9;
    const valorCel = (value - 32) * 5 / 9
    this.setState({valorFah: value, valorCel})
  }

  render() {
    const {valorCel, valorFah} = this.state
    return(
      <div>
        <span>Valor en Celsius</span>
        <input type="number" step="0.01" value={valorCel} onChange={this.handleInputCelsiusChange} />

        <br/>

        <span>Valor en Fahrenheit</span>
        <input type="number" step="0.01" value={valorFah} onChange={this.handleInputFahrenheitChange}/>
      </div>
    )
  }
}