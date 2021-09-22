import useMapBox from "../../utilities/MapBox";

export default function Map({ latitude, longitude }) {
  const onInitHandler = (map) => {
    // Add data and events here
  };
  const { ref } = useMapBox({
    center: [longitude, latitude],
    zoom: [17],
    onInit: onInitHandler,
  });
  return (
    <div
      ref={ref}
      className="map-container"
      style={{ width: "100%", height: "300px" }}
    />
  );
}
