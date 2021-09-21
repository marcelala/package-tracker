import { BrowserRouter, Switch, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="App">
          <ScrollToTop>
            <Navigation />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/:details/:id" exact component={Details} />
            </Switch>
            <Footer />
          </ScrollToTop>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
