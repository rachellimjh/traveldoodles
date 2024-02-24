import React, { useState } from 'react';
import '../routes/css/MapPage.css';
import mapImage from "../../public/images/map.png";
import NavBar from '../components/NavBar';
import pinImage from "../../public/images/pin.png";

const Pin = React.memo(({ x, y }) => (
  <div className="pin" style={{ left: `${x}%`, top: `${y}%` }}>
    <img src={pinImage} alt="Pin" className="pin-image" />
  </div>
));

const MapPage = () => {
  const [pins, setPins] = useState([]);

  const handleMapClick = (event) => {
    const { offsetX, offsetY, target } = event.nativeEvent;
    const { offsetWidth, offsetHeight } = target;
    const x = (offsetX / offsetWidth) * 100;
    const y = (offsetY / offsetHeight) * 100;
    const newPin = { x, y };

    const existingPinIndex = pins.findIndex(pin => pin.x === newPin.x && pin.y === newPin.y);

    if (existingPinIndex !== -1) {
      setPins(pins.filter((_, index) => index !== existingPinIndex));
    } else {
      setPins([...pins, newPin]);
    }
  };

  const handleUndo = () => {
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
          <Pin key={index} x={pin.x} y={pin.y} />
        ))}
      </div>

      <div className="undo-button">
        <button onClick={handleUndo}>Undo</button>
      </div>
    </>
  );
};

export default MapPage;
