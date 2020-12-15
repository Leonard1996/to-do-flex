import React from 'react';
import './MapModal.css'
import GoogleMapReact from 'google-map-react';
import LocationPin from '../LocationPin/LocationPin';

const API_KEY = 'AIzaSyADjYBcHW8B3tQ-Y1DzW0ljUROmbYHHM7w';
const MapModal = props => {
    return (
        <div className="map-container" >
            <div className="google-map">
                <GoogleMapReact
                    bootstrapURLKeys={{ key: API_KEY }}
                    defaultCenter={{address:"Pajtoni Center",lat:41.345455,lng:19.77079}}
                    defaultZoom={8}
                >
                    <LocationPin
                        lat={props.lat}
                        lng={props.long}
                        text={props.description}
                    />
                </GoogleMapReact>
                <button onClick={props.setVisibility}> close</button>
            </div>

        </div>
    );
}

export default MapModal;