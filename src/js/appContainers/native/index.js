import React from 'react-native';
import ApplicationNative from '../../components/native/App.js';

var { AppRegistry } = React;

import { Provider } from 'react-redux';
import configureStore from '../../store/configureStore';
const store = configureStore();

let App = React.createClass({
  render(){
    return (
      <Provider store={store}>
			  <ApplicationNative />
			</Provider>
    )
  }
});

AppRegistry.registerComponent('ApplicationNative', () => App);

