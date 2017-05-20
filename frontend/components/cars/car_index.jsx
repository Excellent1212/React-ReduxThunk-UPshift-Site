import React from 'react';
import CarIndexItem from './car_index_item'
import SearchFormContainer from '../search_form/search_form_container'

class CarIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getAllCars()
  }

  render() {
    return (
      <div className="index">
        <section className="car_index">
          <SearchFormContainer count={this.props.cars.length} />
          <ul className="all_cars">
            {this.props.cars.map(car => <CarIndexItem car={car} key={car.id} />)}
          </ul>
        </section>
      </div>
    )
  }
}

export default CarIndex;