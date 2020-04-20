import React from 'react';
import SummaryCard from './SummaryCard';
import Grid from "@material-ui/core/Grid";

const summary = (props) => {
    const summary = props.summary;

    return(
        <Grid container spacing={1}>
            <Grid item xs>
                <SummaryCard variant="confirmed" title="CONFIRMED" total={summary.TotalConfirmed} />
            </Grid>
            <Grid item xs>
                <SummaryCard variant="active" title="ACTIVE" total={summary.TotalActive} />
            </Grid>
            <Grid item xs>
                <SummaryCard variant="recovered" title="RECOVERED" total={summary.TotalRecovered} />
            </Grid>
            <Grid item xs>
                <SummaryCard variant="deceased" title="DECEASED" total={summary.TotalDeaths} />
            </Grid>
        </Grid>
    )
}

export default summary;