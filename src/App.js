import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  withRouter,
  Switch,
} from 'react-router-dom';
// Style
import './App.css';
// Components
import Landing from './components/Landing';
import Art from './components/Art';
import Crypto from './components/Crypto';
import EComm from './components/EComm';
import Photo from './components/Photo';
import Approach from './components/Approach';

function App() {
  return (
    <div className="App">
      <header></header>
      <main>
        <div className="main">
          <Router>
            <Switch>
              <Route exact path ="/" component={Landing} />
              <Route exact path="/art" component={Art} />
              <Route exact path="/crypto" component={Crypto} />
              <Route exact path="/ecomm" component={EComm} />
              <Route exact path="/photo" component={Photo} />
              <Route exact path="/approach" component={Approach} />
            </Switch>
          </Router>
        </div>
      </main>
    </div>
  );
}

export default withRouter(App);
