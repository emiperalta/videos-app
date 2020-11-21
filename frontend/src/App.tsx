import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import VideoForm from './components/Videos/VideoForm';
import VideoList from './components/Videos/VideoList';
import Navbar from './components/Navbar/Navbar';
import 'bootswatch/dist/flatly/bootstrap.min.css';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <div className='container'>
                    <Switch>
                        <Route exact path='/' component={VideoList} />
                        <Route path='/addvideo' component={VideoForm} />
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
