import useMapBox from "../../utilities/MapBox";

export default function Map({ latitude, longitude }) {
  const onInitHandler = (map) => {};
  const { ref } = useMapBox({
    center: [longitude, latitude],
    zoom: [17],
    onInit: onInitHandler,
  });
  return (
    <div>
      <div className="sidebar">
        Longitude: {longitude} | Latitude: {latitude}
      </div>
      <div
        ref={ref}
        className="map-container"
        style={{ width: "100%", height: "300px" }}
      />
    </div>
  );
}
