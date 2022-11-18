import React from "react"
import './Card.css';

class Card extends React.Component {

  render() {
    return (
      <div className="card">
        <div>Name: {this.props.data.name}</div>
        <div>E-Mail: {this.props.data.email}</div>
        <div>Current Company: {this.props.data.company.name}</div>
        <div>Address: {this.props.data.address.street} {this.props.data.address.suite} {this.props.data.address.city}, {this.props.data.address.zipcode}</div>
        <div>Coordinates: ({this.props.data.address.geo.lat}, {this.props.data.address.geo.lng})</div>
      </div>
    )
  }
}

export default Card;