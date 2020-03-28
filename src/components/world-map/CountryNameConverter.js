export default function (country) {
    country = country.toLowerCase().trim();
    const conversionMap = {
        "united states": "USA",
        "united kingdom": "UK",
        "united arab emirates": "UAE",
        "dominican rep.": "Dominican-Republic",
        "central african rep.": "CAR",
        "dem. rep. congo": "DRC",
        "korea": "S.-Korea"
    }
    const mappedCountry = conversionMap[country];
    if (mappedCountry) {
        country = mappedCountry;
    } else {
        country = country.replace(/ /g, "-");
        const countrySplits = country.split("-").map((e) => {
            return e.charAt(0).toUpperCase() + e.slice(1);
        });
        country = countrySplits.join("-");

        // Issue with map. J&K coming as empty
        if ((country === null) || (country === "")) {
            country = "India";
        }
    }

    return country;
}