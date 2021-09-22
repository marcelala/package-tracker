import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ScrollToTop from "./utilities/ScrollToTop";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import FetchData from "./utilities/FetchData";

function App() {
  const data = FetchData();
  return (
    <Suspense fallback="loading">
      <div className="App">
        <BrowserRouter>
          <div className="App">
            <ScrollToTop>
              <Navigation />
              <Switch>
                <Route path="/" exact>
                  <Home data={data} />
                </Route>
                <Route path="/:details/:parcel_id" exact>
                  <Details data={data} />
                </Route>
              </Switch>
              <Footer />
            </ScrollToTop>
          </div>
        </BrowserRouter>
      </div>
    </Suspense>
  );
}

export default App;
