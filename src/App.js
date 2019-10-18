import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Route path="/" component={Dashboard}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
