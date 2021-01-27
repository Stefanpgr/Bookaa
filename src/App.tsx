import React from 'react';
import {StatusBar} from 'react-native';

import Nav from './navigation';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Nav />
    </>
  );
};

export default App;
