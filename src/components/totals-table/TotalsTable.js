import React from "react";
import TotalsCard from "./TotalsCard";

class TotalsTable extends React.Component {

    render() {
        return(
            <div className="row">
                <div className="col-xs-6 col-md-3">
                    <TotalsCard
                        style={{
                            color: "red"
                        }}
                        title="CONFIRMED"
                        count={this.props.totals.cases.total}
                    />
                </div>
                <div className="col-xs-6 col-md-3">
                    <TotalsCard
                        style={{
                            color: "blue"
                        }}
                        title="ACTIVE"
                        count={this.props.totals.cases.active}
                    />
                </div>
                <div className="col-xs-6 col-md-3">
                    <TotalsCard
                        style={{
                            color: "green"
                        }}
                        title="RECOVERED"
                        count={this.props.totals.cases.recovered}
                    />
                </div>
                <div className="col-xs-6 col-md-3">
                    <TotalsCard
                        style={{
                            color: "grey"
                        }}
                        title="DEATHS"
                        count={this.props.totals.deaths.total}
                    />
                </div>
            </div>
        )
    }
}

export default TotalsTable;