// NPM Packages
import { useTranslation } from "react-i18next";

export default function LoadingError() {
  // Global state
  const { t } = useTranslation();

  return (
    <div className="error">
      <p className="description-small">{t("common:no_internet_1")}</p>
      <p className="description-small">{t("common:no_internet_2")}</p>
    </div>
  );
}
