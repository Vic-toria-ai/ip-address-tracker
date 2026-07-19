import React from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import iconLocation from "../assets/icon-location.svg";
import { useEffect } from "react";

// this is for the custon pin on the map. This works when you are given the image of the custome pine, otherwise, it will live in another file.
const customIcon = L.icon({
  iconUrl: iconLocation,
  iconSize: [30, 40],
  iconAnchor: [15, 20],
  popupAnchor: [0, -40],
});
// to make the map dynamic, I imported useMap, and created it's own funtion/component
// pass the position in as a prop.
function DynamicMap({ position }) {
  const map = useMap();

  useEffect(() => {
    if (position) {
      map.setView(position);
    }
  }, [position, map]);
  return null;
}

function Map({ position, address }) {
  return (
    <div>
      <MapContainer
        center={position || [6.5244, 3.3792]}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "700px", width: "100vw" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <DynamicMap position={position} />
        {/* short circuit it ao that it only runs when the position is true. */}
        {position && (
          <>
            <Marker position={position} icon={customIcon}>
              <Popup>
                {/* in JS, the ? operator is called optional chaining.It's a JavaScript operator that safely accesses properties or calls methods on a value, returning undefined instead of throwing an error if something in the chain is null or undefined. Without it, the popup was showing "You are in, undefined, undefined.Optional chaining */}
                {`You are in ${address?.location?.city}, ${address?.location?.region}`}
              </Popup>
            </Marker>
          </>
        )}
      </MapContainer>
    </div>
  );
}

export default Map;
