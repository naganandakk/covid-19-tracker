export default function (country) {
    country = country.toLowerCase().trim();

    if (country === "united states") {
        country = "USA";
    } else if (country === "united kingdom") {
        country = "UK";
    } else if (country === "united arab emirates") {
        country = "UAE";
    } else if (country === "dominican rep.") {
        country = "Dominican-Republic";
    } else if (country === "central african rep.") {
        country = "CAR"
    } else if (country === "dem. rep. congo") {
        country = "DRC";
    } else if (country === "korea") {
        country = "S.-Korea";
    } else {
        country = country.replace(/ /g, "-");
        const countrySplits = country.split("-").map((e) => {
            return e.charAt(0).toUpperCase() + e.slice(1);
        });
        country = countrySplits.join("-");
    }

    if ((country === null) || (country === "")) {
        country = "India";
    }

    return country;
}