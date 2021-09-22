import Data from "../../components/Data";
import DateMoment from "../../utilities/DateMoment";
import { useTranslation } from "react-i18next";

export default function PackageDetails({ parcel }) {
  //global state
  const { t } = useTranslation("common");
  const { eta, last_updated, location_name, notes, verification_required } =
    parcel;

  function getLabel(tag) {
    return t(`details.labels.${tag}`);
  }

  function getText(tag) {
    if (parcel.tag !== null) return t(`details.descriptions.${tag}`);
    else return t(`details.descriptions.unavailable`);
  }

  return (
    <div className="package">
      <Data label={getLabel("eta")} text={DateMoment(eta) || getText("eta")} />
      <Data label={getLabel("last_updated")} text={DateMoment(last_updated)} />
      <Data label={getLabel("location")} text={location_name} />
      <Data
        label={getLabel("verification")}
        text={
          verification_required
            ? getText("verification")
            : getText("verification_false")
        }
      />
      <Data label={getLabel("notes")} text={notes ? notes : getText("notes")} />
      <span>Placeholder for map</span>
    </div>
  );
}
