import React, { useEffect, useState } from "react";
import { Map, Marker, ZoomControl } from "pigeon-maps"

const MapComponent: React.FunctionComponent = () => {

    function getScreenHeight(): number {
        const screenHeight = window.innerHeight;
        return screenHeight;
        }

  return (
    <Map height={getScreenHeight()}  defaultCenter={[45.917844, 6.144424]} defaultZoom={15} metaWheelZoom={true}>
        <Marker width={50} anchor={[45.917844, 6.144424]} />
        <ZoomControl />
    </Map>
  );
};

export default MapComponent;
