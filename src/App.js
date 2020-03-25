import React from 'react';
import _ from 'lodash';
import Header from "./components/header/Header";
import CountryTable from "./components/country-table/CountryTable";
import WorldMap from "./components/world-map/WorldMap";
import TotalsTable from "./components/totals-table/TotalsTable";
import covid19api from "./apis/covid19";

class App extends React.Component {
    state = {
        statistics: [],
        totals: {
            cases: {},
            deaths: {}
        },
        isLoading: true
    };

    constructor(props) {
        super(props);
        this.fetchData();
    }

    fetchData() {
        this.setState({
            isLoading: true
        })

        covid19api.get("/statistics")
            .then((response) => {
                let statistics = response.data.response;
                let totals = _.find(statistics, {
                    country: 'All'
                });
                _.remove(statistics, {
                    country: 'All'
                });
                this.setState({
                    statistics: statistics,
                    totals: totals,
                    isLoading: false
                });
            }).catch((error) => {
                console.log(error);
                this.setState({
                    isLoading: false
                })
            });
    }

    showStats() {
        if (this.state.isLoading) {
            return(
                <div className="text-center">
                    <h4>Loading...</h4>
                </div>
            );
        } else {
            return(
                <React.Fragment>
                    <div className="col-xs-12 col-md-6">
                        <TotalsTable totals={this.state.totals}/>
                        <CountryTable statistics={this.state.statistics}/>
                    </div>
                    <div className="col-xs-12 col-md-6">
                        <WorldMap/>
                    </div>
                </React.Fragment>
            )
        }
    }
    render() {
        return (
            <React.Fragment>
                <Header/>
                <div className="container-fluid" style={{
                    marginTop: '20px'
                }}>
                    <div className="row">
                        {this.showStats()}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default App;