import React from 'react';
import { Link } from 'react-router-dom';

class CarShow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getCar(this.props.match.params.carId)
  }

  componentWillReceiveProps(newProps) {
    if (newProps.match.params.carId !== this.props.match.params.carId) {
      this.props.getCar(newProps.match.params.carId)
    }
  }

  render() {
    return (
      <div className="car-show">
        <img src={this.props.car.image_url} alt={this.props.car.model}/>
        <section className="car-nav">
          <div className="car-nav-left">
            <div className="car-nav-basic-info">
              <h1 className="car-nav-name">
                {this.props.car.make} {this.props.car.model}
              </h1>
              <div className="car-nav-details">
                <p className="car-detail-yr">{this.props.car.year}</p> <p className="car-detail-miles">{this.props.car.mileage.toLocaleString()} miles</p>
              </div>
            </div>
            <div className="car-nav-price">
              ${this.props.car.price.toLocaleString()}
            </div>
          </div>
          <div className="car-nav-right">
            <button className="car-nav-favorite-button"><p className="car-nav-favorite-icon">♥</p></button>
            <button className="test-drive-button">
              <span className="car-nav-test-drive-text">Test Drive</span>
            </button>
          </div>
        </section>
        <section className="car-show-detail">
          <h2>Details for {this.props.car.year} {this.props.car.make} {this.props.car.model}</h2>
          <table className="car-show-detail-table responsive-table ">
            <thead>
              <tr>
                Month
              </tr>
            </thead>
            <tbody className="car-show-detail-table-data">
              <tr>
                <td className="left-table-text">Year</td>
                <td>{this.props.car.year}</td>
              </tr>
              <tr>
                <td className="left-table-text">Mileage</td>
                <td>{this.props.car.mileage}</td>
              </tr>
              <tr>
                <td className="left-table-text">Transmission</td>
                <td>{this.props.car.transmission}</td>
              </tr>
              <tr>
                <td className="left-table-text">Drivetrain</td>
                <td>{this.props.car.drivetrain.toUpperCase()}</td>
              </tr>
              <tr>
                <td className="left-table-text">Body Style</td>
                <td>{this.props.car.body_style}</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    )
  }
}
export default CarShow;
