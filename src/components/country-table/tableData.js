const prepareFromCountries = countries => {
    const tableData = [];
    if (countries) {
        countries.forEach((country) => {
            tableData.push([
                country.Country,
                country.TotalConfirmed,
                country.TotalConfirmed - country.TotalRecovered - country.TotalDeaths,
                country.TotalRecovered,
                country.TotalDeaths
            ])
        });
    }

    return tableData;
}

export default {
    prepareFromCountries: prepareFromCountries
}