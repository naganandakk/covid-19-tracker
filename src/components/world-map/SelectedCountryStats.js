import React from "react";
import StatsCard from "./StatsCard";
import './SelectedCountryStats.css'

class SelectedCountryStats extends React.Component {
    render() {
        const cards = this.prepareCards();
        return(
            <div className="row">
                <div className="col-lg-12">
                    <h6 className="color-active stats-card-country-name">{this.props.selectedCountry.country.toUpperCase()}</h6>
                </div>
                { cards.map(card => {
                    return this.renderCard(card)
                })}
            </div>
        )
    }

    prepareCards() {
        return [
            { title: "CONFIRMED", count: this.props.selectedCountry.cases.total},
            { title: "ACTIVE", count: this.props.selectedCountry.cases.active,},
            { title: "RECOVERED", count: this.props.selectedCountry.cases.recovered},
            { title: "DECEASED", count: this.props.selectedCountry.deaths.total}
        ];
    }

    renderCard(card) {
        return(
            <div key={card.title} className="col-lg-12 country-stats-card-wrapper">
                <StatsCard
                    title={card.title}
                    count={card.count}
                />
            </div>
        )
    }
}

export default SelectedCountryStats;