import React from 'react';
import Moment from 'react-moment';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import {makeStyles} from "@material-ui/core/styles";
import DefaultTheme from "@material-ui/icons/WbSunny";
import DarkTheme from "@material-ui/icons/NightsStayOutlined";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles(theme => ({
    rightContent: {
        marginLeft: "auto",
        marginRight: -1
    },
    lastUpdatedTitle: {
        fontSize: "0.7rem",
        textTransform: "uppercase",
        textAlign: "right",
        [theme.breakpoints.down('xs')]: {
            fontSize: '0.6rem'
        }
    },
    lastUpdatedTime: {
        fontSize: "0.8rem",
        textTransform: "uppercase",
        [theme.breakpoints.down('xs')]: {
            fontSize: '0.7rem'
        }
    }
}));


const ThemeToggle = props => {
    const icon = props.theme === "dark" ? <DefaultTheme/> : <DarkTheme/>;
    const toggleTo = props.theme === "dark" ? "default" : "dark";

    return(
        <IconButton onClick={() => props.toggleTheme(toggleTo)} edge="start" color="inherit" aria-label="theme-toggle">
            {icon}
        </IconButton>
    )
}

export default function Header(props) {
    const classes = useStyles();

    const renderLastUpdatedAt = () => {
        if (props.lastUpdatedAt) {
            return(
                <div className={classes.rightContent}>
                    <Typography className={classes.lastUpdatedTitle} component="h6">LAST UPDATED</Typography>
                    <Typography className={classes.lastUpdatedTime} component="h6"><Moment fromNow>{props.lastUpdatedAt}</Moment></Typography>
                </div>
            )
        }

        return null;
    }

    return(
        <AppBar position="sticky" color="default" elevation={0}>
            <Toolbar>
                <ThemeToggle theme={props.theme} toggleTheme={(theme) => {props.toggleTheme(theme)}}/>
                <Typography component="h1">COVID-19 TRACKER</Typography>
                {renderLastUpdatedAt()}
            </Toolbar>
        </AppBar>
    )
}