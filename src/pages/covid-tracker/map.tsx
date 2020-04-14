import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import { token, mapStyle } from "./api/map-info";
import { Countries } from "./api/countries.js";

export const Map: React.FC = () => {
  const [viewport, setViewport] = useState({
    latitude: 12.415436073006665,
    longitude: 123.43105231968562,
    zoom: 4,
    width: "100%",
    height: "800px",
  });

  return (
    <div>
      <ReactMapGL
        {...viewport}
        onViewportChange={(viewport: any) => {
          setViewport(viewport);
        }}
        mapboxApiAccessToken={token}
        mapStyle={mapStyle}
      >
        {Countries.map((country: any) => (
          <Marker
            key={country.name}
            latitude={country.latlng[0]}
            longitude={country.latlng[1]}
          >
            <button
              style={{
                border: "none",
                background: "none",
                cursor: "pointer",
              }}
              onClick={() => console.log(country.name)}
            >
              <img
                style={{
                  width: "20px",
                  height: "20px",
                }}
                src="/location.svg"
                alt="Location"
              />
            </button>
          </Marker>
        ))}
      </ReactMapGL>
    </div>
  );
};
