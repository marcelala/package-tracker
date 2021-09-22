import { useHistory, useParams } from "react-router-dom";
import PackageDetails from "./PackageDetails";
import Button from "../../components/Button";
import PackageCard from "../../components/PackageCard";
import { useTranslation } from "react-i18next";

export default function Details({ data }) {
  //global state
  const { t } = useTranslation("common");
  const { parcel_id } = useParams();

  const item = data.find((item) => item.parcel_id === parcel_id);
  const history = useHistory();
  return (
    <section id="details">
      <PackageCard item={item} />
      <PackageDetails parcel={item} />
      <Button onClick={() => history.goBack()} theme={"ghost"}>
        {t(`details.button-label`)}
      </Button>
    </section>
  );
}
