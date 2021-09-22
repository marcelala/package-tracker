import { useHistory, useParams } from "react-router-dom";
import PackageDetails from "./PackageDetails";
import Button from "../../components/Button";
import PackageCard from "../../components/PackageCard";

export default function Details({ data }) {
  const history = useHistory();
  const { parcel_id } = useParams();
  // Constants
  const item = data.find((item) => item.parcel_id === parcel_id);

  return (
    <section id="details">
      <PackageCard item={item} />
      <PackageDetails parcel={item} />
      tea
      <Button onClick={() => history.goBack()} theme={"ghost"}>
        Go Back
      </Button>
    </section>
  );
}
