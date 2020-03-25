const numberFormatter = (number) => {
    if (number) {
        return number.toLocaleString();
    } else {
        return number;
    }
}

const countryFormatter = (country) => {
    return country.toUpperCase();
}

const columns = [
    {
        name: 'COUNTRY',
        selector: 'country',
        sortable: true,
        format: row => countryFormatter(row.country),
        compact: true,
    },
    {
        name: 'CONFIRMED',
        selector: 'cases.total',
        sortable: true,
        format: row => numberFormatter(row.cases.total),
        compact: true,
        right: true
    },
    {
        name: 'ACTIVE',
        selector: 'cases.active',
        sortable: true,
        format: row => numberFormatter(row.cases.active),
        compact: true,
        right: true
    },
    {
        name: 'RECOVERED',
        selector: 'cases.recovered',
        sortable: true,
        format: row => numberFormatter(row.cases.recovered),
        compact: true,
        right: true
    },
    {
        name: 'DEATHS',
        selector: 'deaths.total',
        sortable: true,
        format: row => numberFormatter(row.deaths.total),
        compact: true,
        right: true
    }
];

export default columns;