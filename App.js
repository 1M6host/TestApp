import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from "./src/Routes/RootNavigator"
import { Provider } from 'react-redux';
import configureStore from './src/app/store';

function App() {
  return (
    <NavigationContainer>
      <Provider store={configureStore()}>
        <RootNavigator />
      </Provider>
    </NavigationContainer>
  )
}

export default App
