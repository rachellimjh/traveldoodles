import React, { useState } from 'react';
import '../routes/css/MapPage.css';
import mapImage from "../../public/images/map.png"
import NavBar from '../components/NavBar';
import pinImage from "../../public/images/pin.png";

const MapPage = () => {
  const [pins, setPins] = useState([]);

  const handleMapClick = (event) => {
    const { offsetX, offsetY, target } = event.nativeEvent;
    const { offsetWidth, offsetHeight } = target;
    const x = (offsetX / offsetWidth) * 100;
    const y = (offsetY / offsetHeight) * 100;
    const newPin = {
      x,
      y
    };

    // Check if the pin already exists
    const existingPinIndex = pins.findIndex(pin => pin.x === newPin.x && pin.y === newPin.y);

    if (existingPinIndex !== -1) {
      // If pin already exists, remove it
      setPins(pins.filter((_, index) => index !== existingPinIndex));
    } else {
      // Otherwise, add the new pin
      setPins([...pins, newPin]);
    }
  };

  const handleUndo = () => {
    // Remove the last added pin
    setPins(prevPins => prevPins.slice(0, -1));
  };

  return (
    <>
      <div className="navbar">
        <NavBar />
      </div>

      <div className="content" onClick={handleMapClick}>
        <img src={mapImage} alt="Map" className="map-image" />
        {pins.map((pin, index) => (
          <div key={index} className="pin" style={{ left: `${pin.x}%`, top: `${pin.y}%` }}>
            <img src={pinImage} alt="Pin" className="pin-image" />
          </div>
        ))}
      </div>

      <div className="undo-button">
        <button onClick={handleUndo}>Undo</button>
      </div>
    </>
  );
};

export default MapPage;