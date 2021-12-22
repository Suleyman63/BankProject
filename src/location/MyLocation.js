import React, { useState, useEffect } from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div className="container" style={{ height: `600px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap defaultZoom={11} defaultCenter={{ lat: 40.6943, lng: -73.9249 }}>
    {props.isMarkerShown && (
      <Marker
        position={{ lat: 40.6943, lng: -73.9249 }}
        onClick={props.onMarkerClick}
      />
    )}
  </GoogleMap>
));

const MyLocation = () => {
  const [map, setMap] = useState(false);

  useEffect(() => {
    delayedShowMarker();
  });

  const delayedShowMarker = () => {
    setTimeout(() => {
      setMap({ isMarkerShown: true });
    }, 2000);
  };

  const handleMarkerClick = () => {
    setMap({ isMarkerShown: false });
    delayedShowMarker();
  };

  return (
    <MyMapComponent
      isMarkerShown={map.isMarkerShown}
      onMarkerClick={handleMarkerClick}
    />
  );
};

export default MyLocation;
