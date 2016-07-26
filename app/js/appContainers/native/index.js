import React, { Component, AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from '../../store/configureStore';
const store = configureStore();
import ApplicationNative from '../../components/native/App.js';

export default class App extends Component {
  render(){
    return (
      <Provider store={store}>
			  <ApplicationNative />
			</Provider>
    )
  }
};

AppRegistry.registerComponent('ApplicationNative', () => App);

