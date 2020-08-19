import React from 'react';
import covid19Api from '../../apis/covid19';
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
        this.fetchGlobalCovidStats();
        this.refreshDataHandler = setInterval(() => this.fetchGlobalCovidStats(), MINUTE_5);
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
                        <Grid item xs={12} md={3}></Grid>
                        <Grid item xs={12} md={6}>
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
}

export default Dashboard;