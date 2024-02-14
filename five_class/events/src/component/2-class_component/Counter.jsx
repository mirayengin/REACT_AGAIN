
import { Component } from 'react'

class Counter extends Component {
  //! rconst ile bu constructer cıkıyor
  constructor(props) {
    super(props)
  
    //! count state ine başlangıç değeri atatık.
    this.state = {
      count: props.count || 0,
    }
    //? increment metodunun counter clasına bağlanması (bind)
    this.increment = this.increment.bind(this)
  }

  increment() {
    this.setState({
      count : this.state.count + 1
    })
  }

  //! Arrow func. yaptığımızda otomatik binding yapmış oluyoruz.
  decrement =() => {
    this.setState({
      count : this.state.count - 1
    })
  }


  render() {
    return (
      <div className="container text-center mt-4">
        <h1>CLASS ALL COMPONENT</h1>
        <h2 className='display-4 text-danger'>Count :{this.state.count} </h2>
      <button onClick={this.increment}  className="btn btn-success">INC</button>
      
      <button onClick={this.decrement} className="btn btn-danger">DEC</button>
      </div>
    )
  }
}

export default Counter