import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import { token, mapStyle } from "./api/map-info";
import { Countries } from "./api/worldjson.js";
import * as types from "./types";

const Map: React.FC<types.MapProps> = ({ toBeMap }) => {
  const [viewport, setViewport] = useState({
    latitude: 12.415436073006665,
    longitude: 123.43105231968562,
    zoom: 7,
    width: "100%",
    height: "475px",
  });

  const checkCountryToBeMap = () => {
    // eslint-disable-next-line array-callback-return
    Countries.map((item: any) => {
      if (item.name === toBeMap) {
        setViewport({
          latitude: item.latlng[0],
          longitude: item.latlng[1],
          zoom: 7,
          width: "100%",
          height: "475px",
        });
      }
    });
  };

  useEffect(() => {
    checkCountryToBeMap();
    console.log("rendering-map");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toBeMap]);
  return (
    <ReactMapGL
      {...viewport}
      onViewportChange={(viewport: any) => {
        setViewport(viewport);
      }}
      mapboxApiAccessToken={token}
      mapStyle={mapStyle}
      minZoom={4}
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
                width: "100",
                height: "100px",
              }}
              src={require("../../assets/images/infected-blood.png")}
              alt={country.name}
            />
          </button>
        </Marker>
      ))}
    </ReactMapGL>
  );
};

export default Map;
