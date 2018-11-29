import React from 'react';
import './assets/scss/main.css';
import UserList from './containers/UserList';
import Details from './containers/Details';
import {BrowserRouter as Router, Route} from 'react-router-dom';


const App = () => (
      <div className="App">
        <Router>
        <div>
          <Route path="/" component={UserList} exact />
          <Route path="/users/:username" component={Details} exact />
</div>
        </Router>
      </div>
    )
export default App;
