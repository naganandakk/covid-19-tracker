import React from 'react';
import theme from './theme';
import covid19Api from './apis/covid19';
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
            countries: []
        }
        this.fetchData();
    }

    render() {
        return (
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Header />
                <Container className="container">
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={8}>
                            <Summary summary={this.state.summary}/>
                            <CountryTable countries={this.state.countries}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <RecentNews/>
                        </Grid>
                    </Grid>
                </Container>
            </ThemeProvider>
        );
    }

    fetchData() {
        covid19Api.get("/summary").then(response => {
            this.setState({
                summary: {
                    ...response.data.Global,
                    "TotalActive": response.data.Global.TotalConfirmed - response.data.Global.TotalRecovered - response.data.Global.TotalDeaths
                },
                countries: response.data.Countries
            })
        }).catch(err => {
            console.log(err);
        })
    }
}

export default App;