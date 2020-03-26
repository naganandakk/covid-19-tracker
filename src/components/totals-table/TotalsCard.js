import React from "react";
import './TotalsCard.css';

class TotalsCard extends React.Component {
    render() {
        if (!this.props.title) {
            return null;
        }

        return this.renderText();
    }

    renderText() {
        const colorClassName = "color-" + this.props.title.toLowerCase();
        return(
            <div className={`totals-card ${colorClassName}`}>
                <p className="totals-card-title">{this.props.title}</p>
                <p className="totals-card-count">{this.formatCount(this.props.count)}</p>
            </div>
        )
    }

    formatCount(count) {
        return count ? count.toLocaleString() : count
    }
}

export default TotalsCard;