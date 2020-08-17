import React from 'react';
import MUIDataTable from "mui-datatables";
import Grid from "@material-ui/core/Grid";
import Skeleton from '@material-ui/lab/Skeleton';
import columnConfig from './columnConfig';
import tableOptions from './tableOptions';
import tableData from './tableData';

export default function CountryTable(props) {
    const {countries, loading} = props;
    const renderTable = () => {
        return (
            <MUIDataTable
                data={tableData.prepareFromCountries(countries)}
                columns={columnConfig}
                options={tableOptions}
            />
        )
    }

    const renderLoader = () => {
        return (
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Skeleton animation="wave" variant="rect" height={50}/>
                </Grid>
                <Grid item xs={12}>
                    <Skeleton animation="wave" variant="rect" height={50}/>
                </Grid>
                <Grid item xs={12}>
                    <Skeleton animation="wave" variant="rect" height={50}/>
                </Grid>
            </Grid>
        )
    }

    return (
        <React.Fragment>
            <h2>Country-wise Statistics</h2>
            {loading ? renderLoader() : renderTable()}
        </React.Fragment>
    )
}