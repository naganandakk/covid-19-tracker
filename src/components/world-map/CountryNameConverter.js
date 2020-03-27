export default function (country) {

    if (country.toLowerCase() === "united states") {
        country = "USA";
    } else if (country.toLowerCase() === "united kingdom") {
        country = "UK";
    } else if (country.toLowerCase() === "dominican rep.") {
        country = "Dominican-Republic";
    } else {
        country = country.toLowerCase();
        country = country.replace(" ", "-");
        country = country.charAt(0).toUpperCase() + country.slice(1);
    }

    return country;
}