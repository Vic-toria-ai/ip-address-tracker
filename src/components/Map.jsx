import React from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import iconLocation from "../assets/icon-location.svg";


// this is for the custon pin on the map. This works when you are given the image of the custome pine, otherwise, it will live in another file.
const customIcon = L.icon({
  iconUrl: iconLocation,
  iconSize: [30, 40],
  iconAnchor: [84, 10],
  popupAnchor: [0, -40],
});

function Map({address}) {
    
  return (
    <div>
      <MapContainer
        center={[6.5244, 3.3792]}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "700px", width: "100vw" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[6.5244, 3.3792]} icon={customIcon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
