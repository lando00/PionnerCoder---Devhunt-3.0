"use client"
import React, { useEffect, useState, useContext } from "react";
import "leaflet-routing-machine";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import L from "leaflet";
import { useMap } from "react-leaflet";
import TransportContext from "../TransportContext";

const LeafletRoutingMaching = () => {
  const {Destinations} = useContext(TransportContext)
  const map = useMap();

  useEffect(() => {
    for(let i=0;i<Destinations.length-2;i++){

        L.marker([Destinations[i+1].latitude, Destinations[i+1].longitude]).addTo(map);
        console.log(Destinations[i+1].latitude, Destinations[i+1].longitude);
  
        L.Routing.control({
          waypoints: [
            L.latLng(Destinations[i].latitude, Destinations[i].longitude),
            L.latLng(Destinations[i+1].latitude, Destinations[i+1].longitude),
          ],
          routeWhileDragging: true,
          geocoder: L.Control.Geocoder.nominatim(),
          instructions: '<button id="popup" onclick="closePopup()">Close</button>',
          show: false,
        })
          .on("error", (error) => {
            alert(error.message);
          })
          .addTo(map);
  
        window.closePopup = () => {
          const popup = document.querySelector('.leaflet-popup-content-wrapper');
          if (popup) {
            map.closePopup(popup);
          }
        };

    }
     
    
  }, [Destinations]);

  return null;
};

export default LeafletRoutingMaching;
