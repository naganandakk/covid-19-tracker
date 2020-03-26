import React from "react";
import TotalsCard from "./TotalsCard";

class TotalsTable extends React.Component {

    render() {
        const cardsInfo = [
            { title: "CONFIRMED", count: this.props.totals.cases.total},
            { title: "ACTIVE", count: this.props.totals.cases.active,},
            { title: "NEW", count: this.props.totals.cases.new,},
            { title: "CRITICAL", count: this.props.totals.cases.critical},
            { title: "RECOVERED", count: this.props.totals.cases.recovered},
            { title: "DEATHS", count: this.props.totals.deaths.total}
        ]

        return(
            <div className="row">
                { cardsInfo.map(cardInfo => {
                    return this.renderTotalsCard(cardInfo)
                })}
            </div>
        )
    }

    renderTotalsCard(cardInfo) {
        return(
            <div key={cardInfo.title} className="col-xs-2 col-sm-2 col-md-2 col-lg-2 totals-card-container">
                <TotalsCard
                    title={cardInfo.title}
                    count={cardInfo.count}
                />
            </div>
        )
    }
}

export default TotalsTable;