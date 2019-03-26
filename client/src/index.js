import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './assets/scss/style.scss';
//routes
import Routes from './routes/routes';
//components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Navbar />
                <Routes />
                <Footer />
            </BrowserRouter>
        </React.Fragment>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));

