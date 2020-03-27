import React from "react";
import covid19api from "../../apis/covid19";
import _ from "lodash";
import Moment from 'react-moment';
import TotalsTable from "../../components/totals-table/TotalsTable";
import CountryTable from "../../components/country-table/CountryTable";
import './index.css';

const MINUTE_5 = 1000 * 60 * 5;

function DashboardHeader(props) {
    return(
        <div className="row">
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-7 dashboard-header-col title">
                <h4 className="dashboard-header">COVID-19 TRACKER</h4>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-5 text-right dashboard-header-col time">
                <h6 className="last-updated-header">LAST UPDATED</h6>
                <h6 className="last-updated-time">ABOUT <Moment fromNow>{props.lastUpdatedAt}</Moment></h6>
            </div>
        </div>
    )
}

class Dashboard extends React.Component {
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

    setIsLoading(flag) {
        this.setState({
            isLoading: flag
        })
    }

    render() {
        return(
            <div className="row">
                {this.isPageLoading() && this.renderLoader()}
                {this.isStatsReady() && this.renderStats()}
            </div>
        )
    }

    isStatsReady() {
        return !this.state.isLoading;
    }

    isPageLoading() {
        return this.state.isLoading;
    }

    renderLoader() {
        return(
            <div className="col-lg-12 text-center">
                <h4>Loading...</h4>
            </div>
        );
    }

    renderStats() {
        return(
            <React.Fragment>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                    <DashboardHeader lastUpdatedAt={this.state.lastUpdatedAt}/>
                    <TotalsTable totals={this.state.totals}/>
                    <CountryTable statistics={this.state.statistics}/>
                </div>
            </React.Fragment>
        )
    }

    componentDidMount() {
        this.enableLoader();
        this.fetchData();
        this.refreshDashboardHandler = setInterval(() => this.fetchData(), MINUTE_5)
    }

    componentWillUnmount() {
        clearInterval(this.refreshDashboardHandler);
    }

    enableLoader() {
        this.setIsLoading(true);
    }

    disableLoader() {
        this.setIsLoading(false);
    }

    fetchData() {
        covid19api.get("/statistics")
            .then((response) => {
                let statsByCountry = response.data.response;
                let overallStats = _.find(statsByCountry, {
                    country: 'All'
                });
                _.remove(statsByCountry, {
                    country: 'All'
                });
                this.updateStats(statsByCountry, overallStats);
                this.disableLoader();
            }).catch((error) => {
            console.log(error);
            this.disableLoader();
        });
    }

    updateStats(statsByCountry, overallStats) {
        this.setState({
            statistics: statsByCountry,
            totals: overallStats,
            lastUpdatedAt: overallStats.time
        });
    }
}

export default Dashboard;