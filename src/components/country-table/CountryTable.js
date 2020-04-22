import React from 'react';
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Grid from "@material-ui/core/Grid";
import Skeleton from '@material-ui/lab/Skeleton';

const countryTable = (props) => {
    const { countries, loading } = props;
    const renderTable = () => {
        return(
            <TableContainer component={Paper}>
                <Table aria-label="country-wise covid-19 information">
                    <TableHead>
                        <TableRow>
                            <TableCell>Country</TableCell>
                            <TableCell align="right">Confirmed</TableCell>
                            <TableCell align="right">Active</TableCell>
                            <TableCell align="right">Recovered</TableCell>
                            <TableCell align="right">Deceased</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {countries.map((country) => (
                            <TableRow key={country.CountryCode}>
                                <TableCell component="th" scope="row">
                                    {country.Country}
                                </TableCell>
                                <TableCell align="right">{country.TotalConfirmed}</TableCell>
                                <TableCell align="right">{country.TotalConfirmed - country.TotalRecovered - country.TotalDeaths}</TableCell>
                                <TableCell align="right">{country.TotalRecovered}</TableCell>
                                <TableCell align="right">{country.TotalDeaths}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }

    const renderLoader = () => {
        return(
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Skeleton animation="wave" variant="rect" height={50} />
                </Grid>
                <Grid item xs={12}>
                    <Skeleton animation="wave" variant="rect" height={50} />
                </Grid>
                <Grid item xs={12}>
                    <Skeleton animation="wave" variant="rect" height={50} />
                </Grid>
            </Grid>
        )
    }

    return(
        <React.Fragment>
            <h2>COUNTRY-WISE STATISTICS</h2>
            {loading ? renderLoader() : renderTable()}
        </React.Fragment>
    )
}

export default countryTable;