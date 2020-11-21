import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import VideoForm from './components/Videos/VideoForm';
import VideoList from './components/Videos/VideoList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={VideoList} />
          <Route path="/addvideo" component={VideoForm} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
