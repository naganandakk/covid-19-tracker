import React from 'react';
import _ from 'lodash';
import covid19Api from '../../apis/covid19';
import recentNewsApi from '../../apis/recentNews';
import Container from '@material-ui/core/Container';
import Summary from "../summary/Summary";
import Grid from "@material-ui/core/Grid";
import CountryTable from "../country-table/CountryTable";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const MINUTE_5 = 1000 * 60 * 5;

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            summary: {},
            countries: [],
            articles: [],
            lastUpdatedAt: null,
            loading: {
                articles: true,
                summary: true,
                countries: true,
                chartData: false
            }
        }
    }

    componentDidMount() {
        this.fetchGlobalCovidStatsAndRecentNews();
        this.refreshDataHandler = setInterval(() => this.fetchGlobalCovidStatsAndRecentNews(), MINUTE_5);
    }

    fetchGlobalCovidStatsAndRecentNews() {
        this.fetchGlobalCovidStats();
        this.fetchRecentNews();
    }

    componentWillUnmount() {
        clearInterval(this.refreshDataHandler);
    }

    render() {
        return (
            <React.Fragment>
                <Header theme={this.props.theme} toggleTheme={this.props.toggleTheme} lastUpdatedAt={this.state.lastUpdatedAt}/>
                <Container maxWidth="xl">
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={7}>
                            <Summary loading={this.state.loading.summary} summary={this.state.summary}/>
                            <CountryTable loading={this.state.loading.countries} countries={this.state.countries} />
                        </Grid>
                    </Grid>
                </Container>
                <Footer/>
            </React.Fragment>

        );
    }

    async fetchGlobalCovidStats() {
        try {
            const response = await covid19Api.get("/summary");
            this.setState({
                summary: {
                    ...response.data.Global,
                    "TotalActive": response.data.Global.TotalConfirmed - response.data.Global.TotalRecovered - response.data.Global.TotalDeaths
                },
                countries: response.data.Countries,
                lastUpdatedAt: response.data.Date,
                loading: {
                    ...this.state.loading,
                    summary: false,
                    countries: false
                }
            })
        } catch (e) {
            console.log(e);
        }
    }

    async fetchRecentNews() {
        try {
            const response = await recentNewsApi.get("/everything", {
                params: {
                    language: "en",
                    q: 'corona covid covid19 "covid 19" "covid-19"',
                    pageSize: 5
                }
            });

            this.setState({
                articles: _.orderBy(response.data.articles,[
                    (obj) => {
                        return new Date(obj.publishedAt);
                    }
                ], ["desc"]),
                loading: {
                    ...this.state.loading,
                    articles: false
                }
            });
        } catch (e) {
            console.log(e);
        }
    }
}

export default Dashboard;