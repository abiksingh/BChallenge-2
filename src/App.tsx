import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LaunchScreen from './components/LaunchScreen';

const App = () => {
  return (
    <Router>
      <Route path="/" component={LaunchScreen} exact />
    </Router>
  );
};

export default App;
