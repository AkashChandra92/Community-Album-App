import React, { Component } from 'react'
import store from './store'
import { Provider } from 'react-redux'
import ListContainer from './components/ListContainer'
import LoginFormContainer from './components/LoginFormContainer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <LoginFormContainer/>
        <ListContainer/>
      </Provider>
    );
  }
}

export default App