// NPM Packages
import { useTranslation } from "react-i18next";

export default function LoadingError() {
  // Global state
  const { t } = useTranslation();

  return (
    <div className="error">
      <p>{t("common:no_internet_1")}</p>
      <p>{t("common:no_internet_2")}</p>
    </div>
  );
}
