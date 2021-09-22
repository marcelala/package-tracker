import React from "react";
import ReactDOM from "react-dom";
import "mapbox-gl/dist/mapbox-gl.css";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import common_en from "./data/english/common.json";
import common_se from "./data/svenska/common.json";
import "./styles/index.css";
import App from "./App";
//translation tutorial: https://www.codeandweb.com/babeledit/tutorials/how-to-translate-your-react-app-with-react-i18next

i18next.init({
  interpolation: { escapeValue: false },
  resources: {
    en: {
      common: common_en,
    },
    se: {
      common: common_se,
    },
  },
  lng: "en",
});

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
