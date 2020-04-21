import React from 'react';
import _ from 'lodash';
import theme from './theme';
import covid19Api from './apis/covid19';
import recentNewsApi from './apis/recentNews';
import Container from '@material-ui/core/Container';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import './App.css';
import Summary from "./components/summary/Summary";
import Grid from "@material-ui/core/Grid";
import CountryTable from "./components/country-table/CountryTable";
import Header from './components/header/Header';
import RecentNews from "./components/recent-news/RecentNews";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            summary: {},
            countries: [],
            articles: []
        }
        this.fetchData();
    }

    render() {
        return (
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Header />
                <Container className="container" maxWidth="xl">
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={7}>
                            <Summary summary={this.state.summary}/>
                            <CountryTable countries={this.state.countries}/>
                        </Grid>
                        <Grid item xs={12} sm={5}>
                            <RecentNews articles={this.state.articles}/>
                        </Grid>
                    </Grid>
                </Container>
            </ThemeProvider>
        );
    }

    fetchData() {
        this.fetchCovidData();
        this.fetchArticles();
    }

    async fetchCovidData() {
        const response = await covid19Api.get("/summary");
        this.setState({
            summary: {
                ...response.data.Global,
                "TotalActive": response.data.Global.TotalConfirmed - response.data.Global.TotalRecovered - response.data.Global.TotalDeaths
            },
            countries: response.data.Countries
        })
    }

    async fetchArticles() {
        const response = await recentNewsApi.get("/everything", {
            params: {
                language: "en",
                q: 'corona covid covid19 "covid 19" "covid-19"',
                pageSize: 100
            }
        });

        this.setState({
            articles: _.orderBy(response.data.articles,[
                (obj) => {
                    return new Date(obj.publishedAt);
                }
            ], ["desc"])
        });
    }
}

export default App;