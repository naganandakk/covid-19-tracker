import React from "react";
import './StatsCard.css';

function StatsCard(props) {
    const colorClassName = "color-" + props.title.toLowerCase();
    const bgColorClassName = "bg-color-" + props.title.toLowerCase();

    return(
        <div className={`${colorClassName} ${bgColorClassName} country-stats-card`}>
            <p className="country-stats-card-title">{props.title}</p>
            <p className="country-stats-card-count">{props.count.toLocaleString()}</p>
        </div>
    )
}

export default StatsCard;