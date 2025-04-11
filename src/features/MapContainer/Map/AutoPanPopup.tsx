import { useEffect } from "react";
import { useMap } from "react-leaflet";
import { Popup } from "react-leaflet";

const AutoPanPopup = ({
  position,
  children,
}: // isOpen = false,
{
  position?: any;
  children: any;
  isOpen?: boolean;
}) => {
  const map = useMap();

  useEffect(() => {
    map.panTo(position); // Pan to the position
  }, [position]);

  return (
    <Popup keepInView={true} autoPan={true}>
      {children}
    </Popup>
  );
};

export default AutoPanPopup;
