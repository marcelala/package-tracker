import Data from "../../components/Data";
import PackageCard from "../../components/PackageCard";
import DateMoment from "../../utilities/DateMoment";

export default function PackageDetails({ parcel }) {
  const { eta, last_updated, location_name, notes, verification_required } =
    parcel;
  return (
    <div className="package">
      <Data label={"Estimated delivery"} text={DateMoment(eta)} />
      <Data label={"Last update"} text={DateMoment(last_updated)} />
      <Data label={"Pick up location"} text={location_name} />
      <Data label={"ID verification"} text={verification_required} />
      <Data label={"Notes"} text={notes} />
      <span>Placeholder for map</span>
    </div>
  );
}
