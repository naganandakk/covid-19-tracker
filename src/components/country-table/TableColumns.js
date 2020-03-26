import React from "react";
import './TableColumn.css';

const countryFormatter = (country) => {
    return <div className="country-table-cell country-name">{country.toUpperCase()}</div>;
}

const countFormatter = (count) => {
    if (count) {
        count = count.toLocaleString();
    }

    return(
        <div className="country-table-cell count">{count}</div>
    )
}

const headerFormatter = (headerName) => {
    return(
        <div className="country-table-header">{headerName}</div>
    )
}

const columns = [
    {
        name: headerFormatter('COUNTRY'),
        selector: 'country',
        sortable: true,
        compact:true,
        cell: row => countryFormatter(row.country)
    },
    {
        name: headerFormatter('CONFIRMED'),
        selector: 'cases.total',
        sortable: true,
        right: true,
        compact:true,
        cell: row => countFormatter(row.cases.total)
    },
    {
        name: headerFormatter('ACTIVE'),
        selector: 'cases.active',
        sortable: true,
        right: true,
        compact:true,
        cell: row => countFormatter(row.cases.active)
    },
    {
        name: headerFormatter('NEW'),
        selector: 'cases.new',
        sortable: true,
        right: true,
        compact:true,
        cell: row => countFormatter(row.cases.new)
    },
    {
        name: headerFormatter('CRITICAL'),
        selector: 'cases.critical',
        sortable: true,
        right: true,
        compact:true,
        cell: row => countFormatter(row.cases.critical)
    },
    {
        name: headerFormatter('RECOVERED'),
        selector: 'cases.recovered',
        sortable: true,
        right: true,
        compact:true,
        cell: row => countFormatter(row.cases.recovered)
    },
    {
        name: headerFormatter('DEATHS'),
        selector: 'deaths.total',
        sortable: true,
        right: true,
        compact: true,
        cell: row => countFormatter(row.deaths.total)
    }
];

export default columns;