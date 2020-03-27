import React from "react";
import TotalsCard from "./TotalsCard";

class TotalsTable extends React.Component {

    render() {
        const cards = this.prepareCards();
        return(
            <div className="row totals-card-table">
                { cards.map(card => {
                    return this.renderTotalsCard(card)
                })}
            </div>
        )
    }

    prepareCards() {
        return [
            { title: "CONFIRMED", count: this.props.totals.cases.total},
            { title: "ACTIVE", count: this.props.totals.cases.active,},
            { title: "RECOVERED", count: this.props.totals.cases.recovered},
            { title: "DECEASED", count: this.props.totals.deaths.total}
        ];
    }

    renderTotalsCard(card) {
        return(
            <div key={card.title} className="col-xs-3 col-sm-3 col-md-3 col-lg-3 totals-card-container">
                <TotalsCard
                    title={card.title}
                    count={card.count}
                />
            </div>
        )
    }
}

export default TotalsTable;