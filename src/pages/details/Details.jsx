import { useHistory, useParams } from "react-router-dom";
import PackageDetails from "./PackageDetails";
import Button from "../../components/Button";
import PackageCard from "../../components/PackageCard";
import { useTranslation } from "react-i18next";
import Map from "./Map";

export default function Details({ data }) {
  //global state
  const { t } = useTranslation("common");
  const { parcel_id } = useParams();

  const item = data.find((item) => item.parcel_id === parcel_id);
  const { location_coordinate_latitude, location_coordinate_longitude } = item;
  const history = useHistory();
  const latitude = location_coordinate_latitude;
  const longitude = location_coordinate_longitude;
  return (
    <section id="details">
      <PackageCard item={item} />
      <PackageDetails parcel={item} />
      <Map latitude={latitude} longitude={longitude} />
      <Button onClick={() => history.goBack()} theme={"ghost"}>
        {t(`details.button-label`)}
      </Button>
    </section>
  );
}
