import Data from "./Data";
import PackageCard from "../pages/home/PackageCard";
import DateMoment from "../utilities/DateMoment";

export default function Package({ parcel }) {
  const {
    parcel_id,
    sender,
    status,
    eta,
    last_updated,
    location_name,
    notes,
    verification_required,
  } = parcel;
  return (
    <div className="package">
      <PackageCard parcel={parcel} />
      <Data label={"Estimated delivery"} text={DateMoment(eta)} />
      <Data label={"Last update"} text={DateMoment(last_updated)} />
      <Data label={"Pick up location"} text={location_name} />
      <Data label={"ID verification"} text={verification_required} />
      <Data label={"Notes"} text={notes} />
      <span>Placeholder for map</span>
    </div>
  );
}
