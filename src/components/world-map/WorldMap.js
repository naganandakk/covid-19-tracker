import React, {createRef} from "react";
import SelectedCountryStats from "./SelectedCountryStats";
import {Map, TileLayer} from "react-leaflet";

class WorldMap extends React.Component {
    state = {
        selectedCountry: {
            country: 'China',
            cases: {
                new: 80,
                total: 900,
                active: 70,
                recovered: 78
            },
            deaths: {
                total: 100
            }
        },
        center: {
            lat: 40.8471,
            lng: 14.0625
        },
        zoom: 2
    };

    renderMap() {
        return(
            <Map
                center={this.state.center}
                zoom={this.state.zoom}>
                <TileLayer
                    attribution='...'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    maxZoom="18"
                />
            </Map>
        )
    }

    render() {
        return(
            <React.Fragment>
                <h6>Hover over a country for more details</h6>
                <div className="row">
                    <div className="col-md-2">
                        <SelectedCountryStats selectedCountry={this.state.selectedCountry}/>
                    </div>
                    <div className="col-md-10" style={{height: '100%'}}>
                        {this.renderMap()}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default WorldMap;