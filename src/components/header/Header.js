import React from "react";
import './Header.css';

class Header extends React.Component {
    render() {
        return(
            <div className="container-fluid">
                <div className="app-header">
                    <h3>COVID-19 TRACKER</h3>
                    {this.renderLastUpdateAt()}
                </div>
            </div>
        );
    }

    renderLastUpdateAt() {
        if (!this.props.lastUpdatedAt) {
            return null;
        }

        const lastUpdatedDate = new Date(this.props.lastUpdatedAt);
        return(
            <h6 className="last-updated-at">(Last Update At: {lastUpdatedDate.toLocaleString()})</h6>
        )
    }
}

export default Header;