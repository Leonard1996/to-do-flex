import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/map-marker';
import React from 'react';
import './LocationPin.css';

const LocationPin = props => {
    return (
            <div className="pin">
              <Icon icon={locationIcon} className="pin-icon" />
              <p className="pin-text">{props.text}</p>
            </div>
        );
}

export default LocationPin;