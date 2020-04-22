import React from 'react';
import Moment from 'react-moment';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles(theme => ({
    source: {
        color: 'grey',
        fontSize: "0.9rem",
        [theme.breakpoints.down('xs')]: {
            fontSize: '0.7rem'
        }
    },
    readMore: {
        fontSize: "0.9rem",
        padding: theme.spacing(0),
        margin:theme.spacing(0),
        marginTop: theme.spacing(1),
        color: theme.palette.primary.main
    }
}));

export default function (props) {
    const { article } = props;
    const classes = useStyles();

    return (
        <Card>
            <CardContent>
                <h3>{article.title}</h3>
                <span className={classes.source}>
                    {article.source.name} - <Moment fromNow={article.publishedAt} />
                </span>
                <p className={classes.readMore}>
                    <a rel="noopener noreferrer" target="_blank" href={article.url}>Read more</a>
                </p>
            </CardContent>
        </Card>
    );
}
