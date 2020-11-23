import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import VideoForm from './components/Videos/VideoForm';
import VideoList from './components/Videos/VideoList';
import Navbar from './components/Navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import 'bootswatch/dist/flatly/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <div className='container p-4'>
                    <Switch>
                        <Route exact path='/' component={VideoList} />
                        <Route path='/addvideo' component={VideoForm} />
                        <Route path='/update/:id' component={VideoForm} />
                    </Switch>
                    <ToastContainer />
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
