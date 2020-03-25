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
    },
    {
        name: 'CONFIRMED',
        selector: 'cases.total',
        sortable: true,
        format: row => numberFormatter(row.cases.total),
        right: true
    },
    {
        name: 'ACTIVE',
        selector: 'cases.active',
        sortable: true,
        format: row => numberFormatter(row.cases.active),
        right: true
    },
    {
        name: 'NEW',
        selector: 'cases.new',
        sortable: true,
        format: row => numberFormatter(row.cases.new),
        right: true
    },
    {
        name: 'CRITICAL',
        selector: 'cases.critical',
        sortable: true,
        format: row => numberFormatter(row.cases.critical),
        right: true
    },
    {
        name: 'RECOVERED',
        selector: 'cases.recovered',
        sortable: true,
        format: row => numberFormatter(row.cases.recovered),
        right: true
    },
    {
        name: 'DEATHS',
        selector: 'deaths.total',
        sortable: true,
        format: row => numberFormatter(row.deaths.total),
        right: true
    }
];

export default columns;