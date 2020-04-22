import React from 'react';
import SummaryCard from './SummaryCard';
import Grid from "@material-ui/core/Grid";
import Skeleton from '@material-ui/lab/Skeleton';

const summary = (props) => {
    const { summary, loading } = props;
    const renderSummary = () => {
        return(
            <Grid container spacing={1}>
                <Grid item xs>
                    <SummaryCard animation="wave" variant="confirmed" title="CONFIRMED" total={summary.TotalConfirmed} />
                </Grid>
                <Grid item xs>
                    <SummaryCard animation="wave" variant="active" title="ACTIVE" total={summary.TotalActive} />
                </Grid>
                <Grid item xs>
                    <SummaryCard animation="wave" variant="recovered" title="RECOVERED" total={summary.TotalRecovered} />
                </Grid>
                <Grid item xs>
                    <SummaryCard animation="wave" variant="deceased" title="DECEASED" total={summary.TotalDeaths} />
                </Grid>
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
            { loading ? renderLoader() : renderSummary() }
        </React.Fragment>
    )
}

export default summary;