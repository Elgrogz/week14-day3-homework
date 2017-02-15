import React from 'react';
// const peopleURL = "http://swapi.co/api/people/";

class People extends React.Component{
  constructor(props) {
    super(props);
    this.state = {people: []};
  }

  componentDidMount() {
    this.loadPeople()
  }

  loadPeople() {
    const request = new XMLHttpRequest();
    request.open('GET', "http://swapi.co/api/people/");
    request.onload = () => {
      if (request.status === 200) {
        const jsonString = request.responseText;
        const peopleList = JSON.parse(jsonString);
        this.setState({people: peopleList.results});
        // console.log(this.state.people);
      }
    }
    request.send(null);
  }

  render(){

    const characters = this.state.people.map(function(character, index) {
      return (
        console.log(characters),
        <div key={index}>
          <ul>{character.name}
          <li>{character.height}</li>
          <li>{character.birth_year}</li>
          </ul>
        </div>
        )
      })

    return(
      <div>
        <h4> Characters </h4>
        {characters}
      </div>
    )
  }
}

module.exports = People;