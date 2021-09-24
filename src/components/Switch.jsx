// npm Packages
import { Switch, Route } from "react-router-dom";
//project files
import Home from "../pages/home/Home";
import Details from "../pages/details/Details";
import Landing from "../pages/landing/Landing";

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
