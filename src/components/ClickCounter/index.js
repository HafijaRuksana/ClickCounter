// Write your code here
import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  clickMe = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="card-container">
        <h1 className="heading">
          The Button has been Clicked <br />
          <span className="spanCount">{count}</span>
          times
        </h1>
        <p className="paragraph">Click the Button to increase the count!</p>
        <button type="button" className="Button" onClick={this.clickMe}>
          Click Me!
        </button>
      </div>
    )
  }
}
export default ClickCounter
