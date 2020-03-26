import React from 'react';
import _ from 'lodash';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import CountryTable from "./components/country-table/CountryTable";
import WorldMap from "./components/world-map/WorldMap";
import TotalsTable from "./components/totals-table/TotalsTable";
import covid19api from "./apis/covid19";
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            statistics: [],
            totals: {
                cases: {},
                deaths: {}
            },
            lastUpdatedAt: null,
            isLoading: true
        };
    }

    componentDidMount() {
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
                    lastUpdatedAt: totals.time,
                    isLoading: false
                });
            }).catch((error) => {
                console.log(error);
                this.setState({
                    isLoading: false
                })
            });
    }

    render() {
        return (
            <React.Fragment>
                <Header lastUpdatedAt={this.state.lastUpdatedAt}/>
                <div className="container page-container">
                    <div className="row">
                        {this.renderStats()}
                    </div>
                </div>
                <Footer/>
            </React.Fragment>
        )
    }

    renderStats() {
        if (this.state.isLoading) {
            return this.renderLoader();
        } else {
            return this.renderStatsComponents();
        }
    }

    renderLoader() {
        return(
            <div className="col-lg-12 text-center">
                <h4>Loading...</h4>
            </div>
        );
    }

    renderStatsComponents() {
        return(
            <React.Fragment>
                <div className="col-lg-12">
                    <TotalsTable totals={this.state.totals}/>
                </div>
                <div className="col-lg-12">
                    <CountryTable statistics={this.state.statistics}/>
                    {/*<WorldMap/>*/}
                </div>
            </React.Fragment>
        )
    }
}

export default App;