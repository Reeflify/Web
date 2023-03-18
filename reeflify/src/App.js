import React from "react";
import GoogleMapReact from "google-map-react";

const GOOGLE_MAPS_API_KEY = "AIzaSyBc2z-0e3rg9-oy5vQSMDbunbPhcymdd74";
const DEFAULT_LATITUDE = 0;
const DEFAULT_LONGITUDE = 0;
const DEFAULT_ZOOM = 2;

function App() {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: GOOGLE_MAPS_API_KEY }}
        defaultCenter={{ lat: DEFAULT_LATITUDE, lng: DEFAULT_LONGITUDE }}
        defaultZoom={DEFAULT_ZOOM}
      >
      </GoogleMapReact>
    </div>
  );
}

export default App;
