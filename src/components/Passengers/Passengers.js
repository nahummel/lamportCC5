import React, { Component } from 'react';
// THIS COMPONENT IS OUR INTERFACE FOR PASSENGER CHECK IN
// YOU SHOULD DISPLAY THE CURRENT PASSENGERS
// INPUT SHOULD COLLECT INFO, BUTTON SHOULD ADD THEM TO THE LIST

class Passengers extends Component {
  state = {
    passenger: '',
    passengers: []
  }

  componentDidMount(){
    console.log(this.state.passengers)
  }

  clickHandler = () => {
    console.log('in clickHandler for passengers')
    console.log(this.state.passenger);
    this.setState({
      passengers: [...this.state.passengers, this.state.passenger]
    })
    console.log(this.state.passengers)
  }

  handleChange = (event, property) => {
    console.log('in handleChange', property, event.target.value );
    this.setState({
      [property]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <h2>Passengers</h2>

        <input type="text" name="name" placeholder="Enter Name" onChange={(event) => this.handleChange(event, 'passenger')}/>
        <button onClick = {this.clickHandler}>Add Passenger</button>

        <ul>PASSENGER LIST: 
          {this.state.passengers.map((passenger) => {
            return(
              <li>{passenger}</li>
            )
          })}
        </ul>
      
      </div>
    )
  }
}

export default Passengers;