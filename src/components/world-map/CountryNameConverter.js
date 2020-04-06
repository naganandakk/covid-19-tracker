export default function (country) {
    country = country.toLowerCase().trim();
    const conversionMap = {
        "united states": "USA",
        "united kingdom": "UK",
        "united arab emirates": "UAE",
        "dominican rep.": "Dominican-Republic",
        "central african rep.": "CAR",
        "dem. rep. congo": "DRC",
        "korea": "S.-Korea",
        "eq. guinea": "Equatorial-Guinea",
        "bosnia and herz.": "Bosnia-and-Herzegovina",
        "czech rep.": "Czechia",
        "lao pdr": "Laos",
        "macedonia": "North-Macedonia",
        "s. sudan": "South-Sudan",
        "w. sahara": "Western-Sahara",
        "trinidad and tobago": "Trinidad-and-Tobago"
    }
    const mappedCountry = conversionMap[country];
    if (mappedCountry) {
        country = mappedCountry;
    } else {
        country = country.replace(/ /g, "-");
        country = country.replace(/is.$/g, "islands");
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