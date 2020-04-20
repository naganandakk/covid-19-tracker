import React from 'react';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";

const header = (props) => {
    return(
        <AppBar position="sticky">
            <Toolbar>
                <Typography component="h1">COVID-19 TRACKER</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default header;