import React, {createRef} from "react";
import _ from 'lodash';
import SelectedCountryStats from "./SelectedCountryStats";
import { Map, GeoJSON } from "react-leaflet";
import worldGeoJSON from 'world-map-geojson';
import 'leaflet/dist/leaflet.css';
import './WorldMap.css';
import convertCountryName from './CountryNameConverter'

const caseContributionColors = {
    "very-high": "#BD302A",
    "high": "#CA4F4A",
    "medium": "#D76E6A",
    "medium-low": "#E48D8A",
    "low": "#F1ACAA",
    "no-impact": "#FFCCCB"
};

class WorldMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCountry: props.stats[0],
            center: {
                lat: 40.8471,
                lng: 14.0625
            },
            zoom: 1
        };
        this.mapRef = createRef();
        this.stats = _.keyBy(props.stats, 'country');
    }

    render() {
        return(
            <React.Fragment>
                <div className="world-map-header">
                    <h4>STATISTICS BY COUNTRY</h4>
                    <h6>Hover over a country for more details</h6>
                </div>
                <div className="row">
                    <div className="col-lg-12 selected-country-stats">
                        <SelectedCountryStats selectedCountry={this.state.selectedCountry}/>
                    </div>
                    <div className="col-lg-12 map-container">
                        {this.renderMap()}
                    </div>
                </div>
            </React.Fragment>
        );
    }

    renderMap() {
        return(
            <Map
                animate={true}
                className="world-map"
                center={this.state.center}
                zoom={this.state.zoom}
                zoomControl={false}
                draggable={false}
                ref={this.mapRef}
            >
                <GeoJSON
                    data={worldGeoJSON}
                    style={(feature) => {
                        return this.getCountryStyle(feature.properties.name);
                    }}
                    onEachFeature={this.handleEventsOnCountries}
                />
            </Map>
        )
    }

    handleMouseOver = (e)  => {
        const country = convertCountryName(e.properties.name);
        const stats = this.stats[country];
        if (stats) {
            this.setState({
                selectedCountry: stats
            })
        } else {
            this.setState({
                selectedCountry: {
                    country: country,
                    cases: {
                        total: 'NA',
                        active: 'NA',
                        recovered: 'NA'
                    },
                    deaths: {
                        total: 'NA'
                    }
                }
            })
        }
    };

    handleEventsOnCountries = (feature, layer) => {
        const handleMouseOver = this.handleMouseOver;

        layer.on("mouseover", function() {
            handleMouseOver(feature);
        });

        layer.on("click", function () {
            handleMouseOver(feature);
        })
    }

    getColorByContribution(contribution) {
        if (contribution >= 25000) {
            return caseContributionColors["very-high"];
        } else if (contribution >= 15000) {
            return caseContributionColors["high"];
        } else if (contribution >= 10000) {
            return caseContributionColors["medium"];
        } else if (contribution >= 3000) {
            return caseContributionColors["medium-low"];
        } else if (contribution > 500) {
            return caseContributionColors["low"];
        } else {
            return caseContributionColors["no-impact"];
        }
    }

    getCountryStyle(country) {
        const stats = this.stats[convertCountryName(country)];
        let fillColor = "#FFFFFF";

        if (stats) {
            const confirmedCases = stats.cases.total;
            fillColor = this.getColorByContribution(confirmedCases);
        }

        return {
            color: '#D3D3D3',
            weight: 0.5,
            fillColor: fillColor,
            fillOpacity: 1,
        }
    }
}

export default WorldMap;