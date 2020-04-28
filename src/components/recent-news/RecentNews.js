import React from 'react';
import Article from './Article';
import Grid from "@material-ui/core/Grid";
import Skeleton from '@material-ui/lab/Skeleton';
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const recentNews = props => {
    const {articles, loading} = props;

    const renderArticles = () => {
        const articleList = articles.map((article, idx) => {
            return (
                <Grid item xs={12} key={idx}>
                    <Article article={article}/>
                </Grid>
            )
        });
        const dailyNewsSearchUri = encodeURI('https://naganandakk.github.io/daily-news/#/search?q=corona covid covid19 "covid 19" "covid-19"');

        return (
            <React.Fragment>
                {articleList}
                <Box style={{flexGrow: 1, textAlign: "center", padding: "5px"}}>
                    <Typography component="h6">For more visit <Link rel="noopener noreferrer" target="_blank" href={dailyNewsSearchUri}>Daily
                        News</Link></Typography>
                </Box>
            </React.Fragment>
        )
    }

    const renderLoader = () => {
        return (
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Skeleton animation="wave" variant="rect" height={100}/>
                </Grid>
                <Grid item xs={12}>
                    <Skeleton animation="wave" variant="rect" height={100}/>
                </Grid>
                <Grid item xs={12}>
                    <Skeleton animation="wave" variant="rect" height={100}/>
                </Grid>
            </Grid>
        )
    }

    return (
        <React.Fragment>
            <h2>RECENT NEWS</h2>
            <Grid className="RecentNews-container" container spacing={1}>
                {loading ? renderLoader() : renderArticles()}
            </Grid>
        </React.Fragment>
    )
}

export default recentNews;