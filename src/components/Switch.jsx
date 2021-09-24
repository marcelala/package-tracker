// NPM Packages
import { Switch, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Details from "../pages/details/Details";
import Hero from "./Hero";

// Project files
export default function MySwitch({ data }) {
  return (
    <Switch>
      <Route exact path="/" />
      <Route path="/home">
        <Home data={data} />
      </Route>
      <Route path="/:details/:parcel_id" exact>
        <Details data={data} />
      </Route>
    </Switch>
  );
}
