import React from 'react';
import './App.css';
import Dashboard from "./pages/dashboard";
import Footer from "./components/footer/Footer";

class App extends React.Component {
    render() {
        return(
            <React.Fragment>
                <div className="container page-container">
                    <Dashboard/>
                </div>
                <Footer/>
            </React.Fragment>
        )
    }
}

export default App;