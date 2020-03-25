import React from "react";

class Header extends React.Component {
    render() {
        return(
            <div className="container-fluid text-center" style={{
                padding: '10px'
            }}>
                <h3>COVID-19 TRACKER</h3>
            </div>
        );
    }
}

export default Header;