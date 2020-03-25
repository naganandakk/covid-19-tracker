import React from "react";

class StatsCard extends React.Component {
    render() {
        return(
            <div style={{...this.props.style, padding: '5px', borderRadius: '5px'}}>
                <p style={{
                    fontSize: '10px',
                    fontWeight: 600,
                    padding: '0px',
                    margin:'0px'
                }}>{this.props.title}</p>
                <p style={{
                    fontSize: '16px',
                    fontWeight: 600,
                    margin:'3px'
                }}>{this.props.count ? this.props.count.toLocaleString() : this.props.count}</p>
            </div>
        )
    }
}

export default StatsCard;