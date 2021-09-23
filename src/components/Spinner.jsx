// NPM Packages
import { useTranslation } from "react-i18next";

export default function Spinner() {
  const { t } = useTranslation("common");
  return (
    <div className="loading">
      <div className="spinner" />
      <small>{t("common:loading")}</small>
    </div>
  );
}
