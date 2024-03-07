"use client"

import React, { useContext, useEffect, useState } from "react";
import "leaflet-routing-machine";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import L from "leaflet";
import { useMap } from "react-leaflet";
import LocationContext from "../../../LocationContext";
const LeafletRoutingMaching= ()=>
{
    const {location,position} = useContext(LocationContext)
    const [coord,setCord] = useState({lat:position[0],long:position[1]})
    useEffect(()=>{
        setCord({
            ...coord,
            lat:position[0],
            long:position[1]
        })
    },[position])
    const map = useMap();
    
    
    ///Routes et leur nombres////
     useEffect(()=>{
      map.on("click", function(e){
        L.marker([e.latlng.lat,e.latlng.lng]).addTo(map)
        console.log(e.latlng.lat, e.latlng.lng);
        setCord((prevSt=>{
            L.Routing.control({
        waypoints:[
            L.latLng(prevSt.lat,prevSt.long),
            L.latLng(e.latlng.lat,e.latlng.lng)
        ],

            routeWhileDragging: true,
            geocoder: L.Control.Geocoder.nominatim(),
            show: false,
        })
        .on("error", (error) => {
    // Display the error message
      alert(error.message);
       })
        .addTo(map);

        return {lat:e.latlng.lat,long:e.latlng.lng}
        }))
        
        })
      
    },[])
    ///Routes et leur nombres////
return null
}
export default LeafletRoutingMaching