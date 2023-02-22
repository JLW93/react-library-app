import React from 'react';
import ReactDOM from 'react-dom';
import { Home, Books } from './components'
import './styles.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store'
import { firebaseConfig } from './firebaseConfig';
import { FirebaseAppProvider, AuthCheck } from 'reactfire';

const props = "Online Library"

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={ firebaseConfig }>
    <Provider store={ store }>
        <Router>
          <Switch>

            <Route exact path='/'>
              <Home title={ props } />
            </Route>
            <Route path='/books'>
              <Books />
            </Route>
            {/* <Route path='/profile'>
              <Profile></Profile>
            </Route>
            <Route path='/signin'>
              <SignIn></SignIn>
            </Route> */}

          </Switch>
        </Router>
      </Provider>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


