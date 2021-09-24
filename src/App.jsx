//npm packages
import React from "react";
import { BrowserRouter } from "react-router-dom";
//project data
import ScrollToTop from "./utilities/ScrollToTop";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Spinner from "./components/Spinner";
import MySwitch from "./components/Switch";
import LoadingError from "./components/LoadingError";
import FetchData from "./utilities/FetchData";

function App() {
  const loadedData = FetchData().data;
  const status = FetchData().status;
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop>
          <Navigation />
          {status === 0 && <Spinner />}
          {status === 1 && <MySwitch data={loadedData} />}
          {status === !0 && 1 && <LoadingError />}
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
