import React from "react";

function TotalsCard(props) {
    return(
        <div className="text-center" style={props.style}>
            <h6 style={{
                fontSize: '16px',
                fontWeight: 600
            }}>{props.title}</h6>
            <h5 style={{
                fontWeight: 600
            }}>{props.count ? props.count.toLocaleString() : props.count}</h5>
        </div>
    )
}

export default TotalsCard;