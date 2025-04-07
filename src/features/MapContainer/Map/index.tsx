// components/MapView.tsx
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import DefectListingTooltip from "../DefectListingTooltip/DefectListingTooltip";

// Fix marker icons not showing correctly in some builds
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const position: LatLngExpression = [51.505, -0.09]; // Default coordinates

const MapView = ({ style = {} }: { style?: object }) => {
  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{
        minHeight: "500px",
        height: "100%",
        width: "100%",
        borderRadius: "24px",
        ...style,
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          <DefectListingTooltip />
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapView;
