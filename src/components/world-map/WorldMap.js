import React, {createRef} from "react";
import _ from 'lodash';
import SelectedCountryStats from "./SelectedCountryStats";
import { Map, GeoJSON } from "react-leaflet";
import worldGeoJSON from 'geojson-world-map';
import 'leaflet/dist/leaflet.css';
import './WorldMap.css';
import convertCountryName from './CountryNameConverter'

const caseContributionColors = {
    "very-high": "#BD302A",
    "high": "#E93D36",
    "medium": "#FA7152",
    "medium-low": "#FCA588",
    "low": "#FDD533",
    "no-impact": "#FFF5F0"
};

class WorldMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCountry: null,
            center: {
                lat: 40.8471,
                lng: 14.0625
            },
            zoom: 2,
            maxZoom: 2
        };
        this.mapRef = createRef();
        this.stats = _.keyBy(props.stats, 'country');
    }

    render() {
        return(
            <React.Fragment>
                <h4>STATISTICS BY COUNTRY</h4>
                <h6>Hover over a country for more details</h6>
                <div className="row">
                    <div className="col-lg-12">
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
                ref={this.mapRef}
                maxZoom={this.state.maxZoom}
                minZoom={this.state.maxZoom}
            >
                {/*{this.renderSelectedCountryStats()}*/}
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
        const country = e.properties.name;
        const stats = this.stats[convertCountryName(country)];
        this.setState({
            selectedCountry: stats
        })
    };

    handleEventsOnCountries = (feature, layer) => {
        const handleMouseOver = this.handleMouseOver;
        layer.on("mouseover", function() {
            handleMouseOver(feature);
        })
    }

    getColorByContribution(contribution) {
        if (contribution >= 15) {
            return caseContributionColors["very-high"];
        } else if (contribution >= 10) {
            return caseContributionColors["high"];
        } else if (contribution >= 5) {
            return caseContributionColors["medium"];
        } else if (contribution >= 3) {
            return caseContributionColors["medium-low"];
        } else if (contribution >= 2) {
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
            const worldwideConfirmedCases = this.props.overallStats.cases.total;
            const contribution = (confirmedCases / worldwideConfirmedCases) * 100;
            fillColor = this.getColorByContribution(contribution);
        }

        return {
            color: '#D3D3D3',
            weight: 0.5,
            fillColor: fillColor,
            fillOpacity: 1,
        }
    }

    renderSelectedCountryStats() {
        if (!this.state.selectedCountry) {
            return null;
        } else {
            return(
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-2 selected-country-stats">
                    <SelectedCountryStats selectedCountry={this.state.selectedCountry}/>
                </div>
            )
        }
    }

}

export default WorldMap;