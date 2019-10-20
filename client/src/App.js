import React , {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './views/Login';
import Home from './views/Home';

import './App.css';
const App = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({"username": 'ziad'});
  return (
    <Router>
      <div className="background">
          <Switch>
            <Route path="/login" render={(props) => <Login {...props} setLoggedIn={setLoggedIn} loggedIn={loggedIn}/>} />
            <Route path="/" render={() => <Home user={user}/>} />
          </Switch>
      </div>
    </Router>
  )

}

export default App;
