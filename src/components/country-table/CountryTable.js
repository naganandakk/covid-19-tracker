import React from 'react';
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";

const countryTable = (props) => {
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
                    {props.countries.map((country) => (
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

export default countryTable;