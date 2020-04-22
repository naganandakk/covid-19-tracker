import React from 'react';
import Article from './Article';
import Grid from "@material-ui/core/Grid";
import Skeleton from '@material-ui/lab/Skeleton';

const recentNews = props => {
    const { articles, loading } = props;

    const renderArticles = () => {
        return articles.map((article, idx) => {
            return(
                <Grid item xs={12} key={idx}>
                    <Article article={article} />
                </Grid>
            )
        });
    }

    const renderLoader = () => {
        return(
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Skeleton animation="wave" variant="rect" height={100} />
                </Grid>
                <Grid item xs={12}>
                    <Skeleton animation="wave" variant="rect" height={100} />
                </Grid>
                <Grid item xs={12}>
                    <Skeleton animation="wave" variant="rect" height={100} />
                </Grid>
            </Grid>
        )
    }

    return(
        <React.Fragment>
            <h2>RECENT NEWS</h2>
            <Grid className="RecentNews-container" container spacing={1}>
                {loading ? renderLoader() : renderArticles()}
            </Grid>
        </React.Fragment>
    )
}

export default recentNews;