"use client"
import { useEffect } from "react";
import L from "leaflet";
import { useMap } from "react-leaflet";
const LeafletGeocoder = () =>
{   
    /// Pour center un lieu recherchée dans la barre de la recherche ///
    const map = useMap()
    useEffect(()=>{ 
        L.Control.geocoder({
        defaultMarkGeocode: false
        })
        .on('markgeocode', function(e) {
            var bbox = e.geocode.bbox;
            var poly = L.polygon([
            bbox.getSouthEast(),
            bbox.getNorthEast(),
            bbox.getNorthWest(),
            bbox.getSouthWest()
            ]).addTo(map);
            map.fitBounds(poly.getBounds());
        })
        .addTo(map);
    },[])
    /// Pour center un lieu recherchée dans la barre de la recherche ///

    /// Re
}
export default LeafletGeocoder