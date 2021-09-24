import useMapBox from "../../utilities/MapBox";

export default function Map({ latitude, longitude }) {
  const { ref } = useMapBox({
    center: [longitude, latitude],
    zoom: [15],
  });
  return (
    <div
      ref={ref}
      className="map-container"
      style={{ width: "100%", height: "450px" }}
    />
  );
}
