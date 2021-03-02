import React, { memo } from "react";
import {ZoomableGroup, ComposableMap, Geographies, Geography}
from "react-simple-maps";

const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const MapEl = ({ setTooltipContent, props }) => {
    const covidCountries = props.props.data.map(country =>{
        return({
            name: country.name,
            new_confirmed: country.today.confirmed,
            id: country.code
        })
    })
  return (
    <>
      <ComposableMap data-tip="" projectionConfig={{ scale: 200 }}>
        <ZoomableGroup>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    const NAME = geo.properties;
                    const covidConfirmed = covidCountries.find(country => {return country.id === NAME.ISO_A2});
                    let covidConfirmedCountry;
                    if(covidConfirmed === undefined){
                        covidConfirmedCountry = 'unknown';
                    }else{
                        covidConfirmedCountry = covidConfirmed.new_confirmed
                    }
                    setTooltipContent(`${NAME.NAME} — ${covidConfirmedCountry}`);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                    
                  style={{
                    default: {
                      fill: "#D6D6DA",
                      outline: "none"
                    },
                    hover: {
                      fill: "#F53",
                      outline: "none"
                    },
                    pressed: {
                      fill: "#E42",
                      outline: "none"
                    }
                  }}
                />
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </>
  );
};

export default memo(MapEl);
