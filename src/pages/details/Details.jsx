//npm packages
import { useHistory, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
//project files
import PackageDetails from "./PackageDetails";
import Button from "../../components/Button";
import PackageCard from "../../components/PackageCard";
import Map from "./Map";
import arrow from "../../assets/images/icons/arrow-left.svg";
import Brand from "../../components/Brand";

export default function Details({ data }) {
  //global state
  const { t } = useTranslation("common");
  const { parcel_id } = useParams();
  const history = useHistory();
  //constants
  const item = data.find((item) => item.parcel_id === parcel_id);
  const { location_coordinate_latitude, location_coordinate_longitude } = item;
  const latitude = location_coordinate_latitude;
  const longitude = location_coordinate_longitude;
  return (
    <section id="details-page">
      <Brand />
      <section id="details">
        <div className="details-container">
          <PackageCard item={item} />
          <PackageDetails parcel={item} />
          <Map latitude={latitude} longitude={longitude} />
          <Button onClick={() => history.goBack()} theme={"ghost"}>
            <img src={arrow} alt="arrow pointing left" />{" "}
            {t(`details.button-label`)}
          </Button>
        </div>
      </section>
    </section>
  );
}
