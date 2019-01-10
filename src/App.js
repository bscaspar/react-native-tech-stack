import React from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers';
import { Header } from './components/common';

const App = () => (
  <Provider store={createStore(reducers)}>
    <SafeAreaView>
      <Header headerText="Tech Stack" />
    </SafeAreaView>
  </Provider>
);

export default App;
