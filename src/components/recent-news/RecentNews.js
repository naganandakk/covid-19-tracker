import React from 'react';
import Article from './Article';
import Grid from "@material-ui/core/Grid";
import './RecentNews.css';

const recentNews = props => {
    const renderArticles = () => {
        return props.articles.map((article, idx) => {
            return(
                <Grid item xs={12} key={idx}>
                    <Article article={article} />
                </Grid>
            )
        });
    }

    return(
        <React.Fragment>
            <h2>RECENT NEWS</h2>
            <Grid className="RecentNews-container" container spacing={1}>
                {renderArticles()}
            </Grid>
        </React.Fragment>
    )
}

export default recentNews;