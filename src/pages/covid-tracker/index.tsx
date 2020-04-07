import React, {useState} from 'react'
import ReactMapGL, {Marker} from 'react-map-gl'
import {token, mapStyle} from './map-info'
import {Cities} from './ph.js'

const IndexPage:React.FC = () => {
    const [viewport, setViewport] = useState({
        latitude: 12.415436073006665,
        longitude: 123.43105231968562,
        zoom: 7,
        width: "100%",
        height: 400,
      });

    return(
        <div>
            <h2>Covid tracker</h2>
            <ReactMapGL 
                {...viewport} 
                onViewportChange={(viewport:any) => {
                    setViewport(viewport)
                }} 
                mapboxApiAccessToken={token}
                mapStyle={mapStyle}
            >
            {
                Cities.map((country: any) => (
                    <Marker
                        key={country.country_code}
                        latitude={country.lat}
                        longitude={country.lng}
                    >
                    <button style={{
                        border: "none",
                        background: "none",
                        cursor: 'pointer'
                    }}>
                        <img style={{
                            width: '20px',
                            height: '20px'
                        }}
                        src="/location.svg" alt="Location"/>
                    </button>
                    </Marker>
                ))
            }
            </ReactMapGL>                 
            </div>
    )
}

IndexPage.displayName = 'CovidTrackerPage';
export default IndexPage;