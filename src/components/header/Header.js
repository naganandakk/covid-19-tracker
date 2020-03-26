import React from "react";
import './Header.css';

class Header extends React.Component {
    render() {
        return(
            <div className="container-fluid">
                <div className="app-header">
                    <h3>COVID-19 TRACKER</h3>
                </div>
            </div>
        );
    }
}

export default Header;