import React from "react";
import TotalsCard from "./TotalsCard";

class TotalsTable extends React.Component {

    render() {
        return(
            <div className="row">
                <div className="col-lg-2 col-sm-4 col-xs-4">
                    <TotalsCard
                        style={{
                            color: "#8B0000"
                        }}
                        title="CONFIRMED"
                        count={this.props.totals.cases.total}
                    />
                </div>
                <div className="col-lg-2 col-sm-4 col-xs-4">
                    <TotalsCard
                        style={{
                            color: "blue"
                        }}
                        title="ACTIVE"
                        count={this.props.totals.cases.active}
                    />
                </div>
                <div className="col-lg-2 col-sm-4 col-xs-4">
                    <TotalsCard
                        style={{
                            color: "red"
                        }}
                        title="CRITICAL"
                        count={this.props.totals.cases.critical}
                    />
                </div>
                <div className="col-lg-2 col-sm-4 col-xs-4">
                    <TotalsCard
                        style={{
                            color: "brown"
                        }}
                        title="NEW"
                        count={this.props.totals.cases.new}
                    />
                </div>
                <div className="col-lg-2 col-sm-4 col-xs-4">
                    <TotalsCard
                        style={{
                            color: "green"
                        }}
                        title="RECOVERED"
                        count={this.props.totals.cases.recovered}
                    />
                </div>
                <div className="col-lg-2 col-sm-4 col-xs-4">
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