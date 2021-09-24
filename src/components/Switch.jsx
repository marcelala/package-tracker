// NPM Packages
import { Switch, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Details from "../pages/details/Details";
import Hero from "./Hero";
import Landing from "../pages/landing/Landing";

// Project files
export default function MySwitch({ data }) {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/home">
        <Home data={data} />
      </Route>
      <Route path="/:details/:parcel_id">
        <Details data={data} />
      </Route>
      <Route path="*" component={Landing} />
    </Switch>
  );
}
