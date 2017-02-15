import React from 'react';

class Planets extends React.Component{
  constructor(props) {
    super(props);
    this.state = {planets: []};
  }

  componentDidMount() {
    this.loadPlanets()
  }

  loadPlanets() {
    const request = new XMLHttpRequest();
    request.open('GET', "http://swapi.co/api/planets/");
    request.onload = () => {
      if (request.status === 200) {
        const jsonString = request.responseText;
        const peopleList = JSON.parse(jsonString);
        this.setState({planets: peopleList.results});
        // console.log(this.state.people);
      }
    }
    request.send(null);
  }

  render(){

    const planets = this.state.planets.map(function(planet, index) {
      return (
        console.log(planet),
        <div key={index}>
          <ul>{planet.name}
          <li>Diameter: {planet.diameter}</li>
          <li>Climate: {planet.climate}</li>
          </ul>
        </div>
        )
      })

    return(
      <div>
        <h4> Planets </h4>
        {planets}
      </div>
    )
  }
}

module.exports = Planets;