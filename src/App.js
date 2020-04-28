import React from 'react';
import _ from 'lodash';
import { DefaultTheme, DarkTheme } from './theme';
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
import Footer from "./components/footer/Footer";
import { createMuiTheme } from '@material-ui/core/styles';

const MINUTE_5 = 1000 * 60 * 5;

class App extends React.Component {
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
                countries: true
            },
            theme: "default"
        }
    }

    toggleTheme = theme => {
        this.setState({
            theme: theme
        })
    }

    componentDidMount() {
        this.fetchData();
        this.refreshDataHandler = setInterval(() => this.fetchData(), MINUTE_5);
    }

    componentWillUnmount() {
        clearInterval(this.refreshDataHandler);
    }

    render() {
        return (
            <ThemeProvider theme={this.state.theme === "dark" ? createMuiTheme(DarkTheme) : createMuiTheme(DefaultTheme)}>
                <CssBaseline />
                <Header theme={this.state.theme} toggleTheme={this.toggleTheme} lastUpdatedAt={this.state.lastUpdatedAt}/>
                <Container maxWidth="xl">
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={7}>
                            <Summary loading={this.state.loading.summary} summary={this.state.summary}/>
                            <CountryTable loading={this.state.loading.countries} countries={this.state.countries}/>
                        </Grid>
                        <Grid item xs={12} sm={5}>
                            <RecentNews loading={this.state.loading.articles} articles={this.state.articles}/>
                        </Grid>
                    </Grid>
                </Container>
                <Footer/>
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
            countries: response.data.Countries,
            lastUpdatedAt: response.data.Date,
            loading: {
                ...this.state.loading,
                summary: false,
                countries: false
            }
        })
    }

    async fetchArticles() {
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
    }
}

export default App;