import React from "react";
import StatsCard from "./StatsCard";

class SelectedCountryStats extends React.Component {
    render() {
        if (!this.props.selectedCountry) {
            return null;
        }
        return(
            <React.Fragment>
                <p style={{
                    fontSize: '18px',
                    fontWeight: 600,
                    textTransform: 'uppercase'
                }}>{this.props.selectedCountry.country}</p>
                <StatsCard
                    style={{
                        color: "red",
                        backgroundColor: "#FFCCCB",
                        marginBottom: '5px'
                    }}
                    title="CONFIRMED"
                    count={this.props.selectedCountry.cases.total}
                />
                <StatsCard
                    style={{
                        color: "blue",
                        backgroundColor: "#ADD8E6",
                        marginBottom: '5px'
                    }}
                    title="ACTIVE"
                    count={this.props.selectedCountry.cases.active}
                />
                <StatsCard
                    style={{
                        color: "green",
                        backgroundColor: "#90EE90",
                        marginBottom: '5px'
                    }}
                    title="RECOVERED"
                    count={this.props.selectedCountry.cases.recovered}
                />
                <StatsCard
                    style={{
                        color: "grey",
                        backgroundColor: "#D3D3D3",
                        marginBottom: '5px'
                    }}
                    title="DEATHS"
                    count={this.props.selectedCountry.deaths.total}
                />
            </React.Fragment>
        )
    }
}

export default SelectedCountryStats;