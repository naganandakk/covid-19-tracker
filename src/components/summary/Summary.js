import React from 'react';
import SummaryCard from './SummaryCard';
import Grid from "@material-ui/core/Grid";
import Skeleton from '@material-ui/lab/Skeleton';

const summary = (props) => {
    const { summary, loading } = props;
    const renderSummaryCards = () => {
        const cardsInfo = [
            { variant: "confirmed", title: "CONFIRMED", total: summary.TotalConfirmed },
            { variant: "active", title: "ACTIVE", total: summary.TotalActive },
            { variant: "recovered", title: "RECOVERED", total: summary.TotalRecovered },
            { variant: "deceased", title: "DECEASED", total: summary.TotalDeaths }
        ];

        return(
            <Grid container spacing={1}>
                {cardsInfo.map(card => {
                    return(
                        <Grid key={card.title} item xs={6} sm={6} md>
                            <SummaryCard animation="wave" variant={card.variant} title={card.title} total={card.total} />
                        </Grid>
                    )
                })}
            </Grid>
        )
    }
    const renderLoader = () => {
        return(
            <Grid container spacing={1}>
                <Grid item xs>
                    <Skeleton variant="rect" height={100} />
                </Grid>
                <Grid item xs>
                    <Skeleton variant="rect" height={100} />
                </Grid>
                <Grid item xs>
                    <Skeleton variant="rect" height={100} />
                </Grid>
                <Grid item xs>
                    <Skeleton variant="rect" height={100} />
                </Grid>
            </Grid>
        )
    }

    return(
        <React.Fragment>
            <h2>GLOBAL STATISTICS</h2>
            { loading ? renderLoader() : renderSummaryCards() }
        </React.Fragment>
    )
}

export default summary;