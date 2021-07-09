import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';

class App extends React.Component {
  render() {
    return (
      <>
        <div>Hello, TrybeWallet!</div>
        <Switch>
          <Route exact path="/" component={ Login } />
        </Switch>
      </>
    );
  }
}

export default App;
