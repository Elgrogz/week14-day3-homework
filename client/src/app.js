import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main.jsx';
import Home from './components/Home.jsx';
import People from './components/People.jsx';
import Planets from './components/Planets.jsx';
import Starships from './components/Starships.jsx';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

window.onload = () => {
  ReactDOM.render(
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={Home} />
        <Route path="home" component={Home} />
        <Route path="people" component={People} />
        <Route path="planets" component={Planets} />
        <Route path="starships" component={Starships} />
      </Route>
    </Router>,

    document.getElementById('app')
  );
}