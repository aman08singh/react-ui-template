import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Sidebar from "./components/sidebar/Sidebar";
import TopBar from "./components/topBar/TopBar";
import Footer from "./components/footer/Footer";
import LogoutModal from "./components/userAuth/LogoutModal";
import GotoPageTop from "./components/gotoPageTop/GotoPageTop";
import Buttons from "./components/buttonComponent";
import Cards from "./components/cardComponent";
import Colors from "./components/colorsComponent";
import Borders from "./components/borderComponent";
import Animation from "./components/animationComponent";
import Other from "./components/otherComponent";
import Login from "./components/userAuth/Login";
import Register from "./components/userAuth/Register";
import PageNotFound from "./components/userAuth/PageNotFound";
import BlankPage from "./components/otherComponent/BlankPage";
import ForgotPassword from "./components/userAuth/ForgotPassword";
import Charts from "./components/charts";
import Tables from "./components/tables";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/forgotpassword" component={ForgotPassword} />
        <div id="wrapper">
          <Sidebar />
          <div id="content-wrapper" className="d-flex flex-column">
            {/* Main Content */}
            <div id="content">
              <TopBar />
              <div className="container-fluid">
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/buttons" component={Buttons} />
                <Route exact path="/cards" component={Cards} />
                <Route exact path="/utilities-color" component={Colors} />
                <Route exact path="/utilities-border" component={Borders} />
                <Route
                  exact
                  path="/utilities-animation"
                  component={Animation}
                />
                <Route exact exact path="/utilities-other" component={Other} />
                <Route exact path="/404" component={PageNotFound} />
                <Route exact path="/blank" component={BlankPage} />
                <Route exact path="/charts" component={Charts} />
                <Route exact path="/tables" component={Tables} />
              </div>
            </div>
            <Footer />
            <GotoPageTop />
            <LogoutModal />
          </div>
          {/* Page Wrapper */}
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
