import React from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const summaryCard = (props) => {
    return(
        <Card>
            <CardContent>
                <Typography align="center" className={`color-${props.variant}`} component="p">{props.title}</Typography>
                <Typography align="center" className={`color-${props.variant}`} component="p">{props.total ? props.total.toLocaleString() : props.total}</Typography>
            </CardContent>
        </Card>
    )
}

export default summaryCard;