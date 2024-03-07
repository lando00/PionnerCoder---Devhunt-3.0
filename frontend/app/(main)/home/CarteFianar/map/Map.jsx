"use client"
import { MapContainer, TileLayer, useMap,Marker,Circle,Popup, Rectangle } from 'react-leaflet'
import L from 'leaflet'
import icone from './location.png'
import 'leaflet-control-geocoder/dist/Control.Geocoder.css'
import 'leaflet-control-geocoder/dist/Control.Geocoder.js'
import LeafletGeocoder from './Geocoder'
// import LeafletRoutingMaching from './LeafletRoutingMachine'
// import LeafletRoutingtrajet from './LeafletRoutingTrajet'
function Map() {
  const position = [-21.456466663981892,47.08601081382767]
  return (
    <div className="Map">
      
    <MapContainer center={position} zoom={15} scrollWheelZoom={true}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
        
        <Marker position={position}>
            <Popup>
              ENI
          </Popup>
          </Marker>

      <LeafletGeocoder/>
      {/* <LeafletRoutingMaching/> */}
      {/* <LeafletRoutingtrajet/> */}
  </MapContainer>
    </div>
  )
  
}
let defaultIcon = L.icon({
    iconUrl: icone,
    iconSize: [30, 30],
  
  })
  L.Marker.prototype.options.icon = defaultIcon
export default Map;
