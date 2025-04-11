import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import { LatLngExpression, DivIcon } from "leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import DefectListingTooltip from "../DefectListingTooltip/DefectListingTooltip";
import ReactDOMServer from "react-dom/server";
import { RedMarkerIcon } from "../../../assets/Images/svg";
import { useRef, useEffect } from "react";

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const redMarkerIcon = new DivIcon({
  html: ReactDOMServer.renderToString(<RedMarkerIcon />),
  className: "", // removes default leaflet styles
  iconSize: [24, 24],
  iconAnchor: [31.5, 24], // adjust if needed to align point
  popupAnchor: [-5, -30],
});

const position: LatLngExpression = [51.505, -0.09]; // Default coordinates

// Create a new component to handle map events
const MapEventHandler = ({
  setOpenPopup,
}: {
  setOpenPopup: (value: boolean) => void;
}) => {
  useMapEvents({
    click: () => {
      setOpenPopup(false);
    },
  });
  return null;
};

const MapView = ({
  style = {},
  openPopup = false,
  setOpenPopup = () => {},
}: {
  style?: object;
  openPopup?: boolean;
  setOpenPopup?: (value: boolean) => void;
}) => {
  const markerRef = useRef<L.Marker | null>(null);

  useEffect(() => {
    if (openPopup && markerRef.current) {
      markerRef.current.openPopup();
    }
  }, [openPopup]);

  return (
    <MapContainer
      center={position}
      zoom={23}
      style={{
        minHeight: "700px",
        height: "100%",
        width: "100%",
        borderRadius: "24px",
        ...style,
      }}
    >
      <MapEventHandler setOpenPopup={setOpenPopup} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={redMarkerIcon} ref={markerRef}>
        <Popup
          // onClose={() => setOpenPopup(false)}
          closeButton={false}
          autoPan={true} // <-- Add this
          keepInView={true}
          className="leaflet-popup-outside"
          pane="popupPane"
          position={position}
        >
          <DefectListingTooltip />
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapView;
