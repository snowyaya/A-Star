import React, { memo } from "react";
import {
  ComposableMap,
  Geographies,
  Marker,
  Geography,
  Annotation,
} from "react-simple-maps";
import { geoCentroid } from "d3-geo";
import allStates from "./allStates.json";
import { scaleQuantize } from "d3-scale";
import "../style/Dashboard.css";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const offsets = {
  VT: [50, -8],
  NH: [34, 2],
  MA: [30, -1],
  RI: [28, 2],
  CT: [35, 10],
  NJ: [34, 1],
  DE: [33, 0],
  MD: [47, 10],
  DC: [49, 21],
};

const colorScale = scaleQuantize()
  .domain([1, 10])
  .range([
    "#ffedea",
    "#ffcec5",
    "#ffad9f",
    "#ff8a75",
    "#ff5533",
    "#e2492d",
    "#be3d26",
    "#9a311f",
    "#782618",
  ]);

const MapChart = ({ statesQueryRes, setTooltipContent, minComp, maxComp}) => {
  console.log("StatesQueryRes:");
  console.log(statesQueryRes);

  // Showing the number of companies when mouse hover over on the state
  const handleMouseEnter = (stateCode) => {
    let text;
    if (
      statesQueryRes[stateCode] &&
      statesQueryRes[stateCode].Companies
    ) {
        text = `Companies: ${(statesQueryRes[stateCode].Companies)}`;
      }
    setTooltipContent(text);
  };

  //returns value between 1-40 for heatmap coloring
  const findStateDecile = (stateCode) => {
    let vals = statesQueryRes[stateCode]
      ? statesQueryRes[stateCode].Companies
      : null;

    //determine decile based on state's average value vs min and max average values
    if (vals) {
      return ((vals - minComp) / (maxComp - minComp)) * 40 + 1;
    } else {
      return 0;
    }
  };

  //takes in a state id, return an RGB color
  return (
    <ComposableMap
      projection="geoAlbersUsa"
      id="usmap"
    >
      <Geographies data-tip="" geography={geoUrl}>
        {({ geographies }) => (
          <>
            {geographies.map((geo) => {
              let color;
              if (geo.id === "20") {
                color = "CCC";
              } else {
                color = "#ABC";
              }
              const stateCode = allStates.find((s) => s.val === geo.id);
              let decile = findStateDecile(stateCode.id);
              return (
                <Geography
                  key={geo.rsmKey}
                  stroke="#FFF"
                  geography={geo}
                  // fill={color}
                  fill={colorScale(decile)}
                  onMouseEnter={() => {
                    const stateCode = allStates.find((s) => s.val === geo.id);
                    handleMouseEnter(stateCode.id);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent(null);
                  }}
                />
              );
            })}
            {geographies.map((geo) => {
              const centroid = geoCentroid(geo);
              const cur = allStates.find((s) => s.val === geo.id);
              return (
                <g key={geo.rsmKey + "-name"}>
                  {cur &&
                    centroid[0] > -160 &&
                    centroid[0] < -67 &&
                    // if state code not in offset list, add state code to the map. Otherwise annotate outside of the map
                    (Object.keys(offsets).indexOf(cur.id) === -1 ? (
                      <Marker coordinates={centroid}>
                        <text y="2" fontSize={14} textAnchor="middle">
                          {cur.id}
                        </text>
                      </Marker>
                    ) : (
                      <Annotation
                        subject={centroid}
                        dx={offsets[cur.id][0]}
                        dy={offsets[cur.id][1]}
                      >
                        <text
                          x={4}
                          fontSize={14}
                          alignmentBaseline="middle"
                          fill="#F10"
                        >
                          {cur.id}
                        </text>
                      </Annotation>
                    ))}
                </g>
              );
            })}
          </>
        )}
      </Geographies>
    </ComposableMap>
  );
};
export default memo(MapChart);
