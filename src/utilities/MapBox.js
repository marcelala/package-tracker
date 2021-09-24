import { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";

// https://dev.to/justincy/using-mapbox-gl-in-react-d2n
mapboxgl.accessToken =
  "pk.eyJ1IjoibWFybWFybWFyY2VsYWNlbGEiLCJhIjoiY2t0dm5mc2tmMmJuODJubXAyOTNvZjMxbSJ9.2_SvCt2qwaGx9Oo_yTWkSQ";

export default function useMapBox({ center, zoom = 13, onInit }) {
  const ref = useRef(null);
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (ref.current && !map) {
      const map = new mapboxgl.Map({
        container: ref.current,
        style: "mapbox://styles/mapbox/dark-v10",
        center,
        zoom,
      });
      map.addControl(new mapboxgl.NavigationControl());
      const popup = new mapboxgl.Popup({ offset: 25 }).setText(
        `Pick up your package here! Coordinates(lng,lat): ${center}`
      );
      const marker = new mapboxgl.Marker({ color: "#F8AE3A" })
        .setLngLat(center)
        .setPopup(popup)
        .addTo(map);
      setMap(map);
      onInit(map);
    }
  }, [ref, center, zoom, map]);
  return { ref };
}
