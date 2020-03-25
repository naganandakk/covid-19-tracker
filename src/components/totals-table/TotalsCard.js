import React from "react";

function TotalsCard(props) {
    return(
        <div className="text-center totals-card" style={props.style}>
            <p style={{
                fontSize: '16px',
                fontWeight: 600
            }}>{props.title}</p>
            <p style={{
                fontSize: '20px',
                fontWeight: 600
            }}>{props.count ? props.count.toLocaleString() : props.count}</p>
        </div>
    )
}

export default TotalsCard;