import React, { Component } from 'react';
// THIS COMPONENT IS OUR INTERFACE FOR SPEED
// YOU SHOULD DISPLAY THE CURRENT SPEED
// BUTTONS SHOULD INCREASE OR DECREASE SPEED, RESPECTIVELY

class SpeedControl extends Component {
  state = {
    speed: 0
  }

  clickHandler = (event, property) => {
    console.log('in clickHandler:', event, property);
    if(property === 'increase'){
      this.setState({
        speed: this.state.speed + 1
      })
      this.props.dispatch({type:'increase', payload: this.state.speed + 1})
    } else if(property === 'decrease'){
        this.setState({
          speed: this.state.speed - 1
        })
        this.props.dispatch({type:'decrease', payload: this.state.speed - 1})
    }
  }

  render() {
    return (
      <div>
        <h2>Speed Control</h2>

        <button onClick ={(event => this.clickHandler(event, 'increase'))}>Increase Speed</button>
        <p>SPEED: {this.props.reduxState.speed}</p>
        <button onClick ={(event => this.clickHandler(event, 'decrease'))}>Decrease Speed</button>
      </div>
    )
  }
}

export default SpeedControl;