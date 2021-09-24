import useMapBox from "../../utilities/MapBox";

export default function Map({ latitude, longitude }) {
  const onInitHandler = (map) => {};
  const { ref } = useMapBox({
    center: [longitude, latitude],
    zoom: [15],
    onInit: onInitHandler,
  });
  return (
    <div
      ref={ref}
      className="map-container"
      style={{ width: "100%", height: "450px" }}
    />
  );
}
