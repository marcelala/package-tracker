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
      setMap(map);
      onInit(map);
    }
  }, [ref, center, zoom, map]);
  return { ref };
}
