import React from 'react';
import Home from './Home.jsx';
import People from './People.jsx';
import {Link} from 'react-router';

class Main extends React.Component {
  render() {
    return (
      <div>
        <h4>Main App</h4>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/people">People</Link>
          </li>
        </ul>
        {this.props.children}
      </div>
      )
  }
}

export default Main;