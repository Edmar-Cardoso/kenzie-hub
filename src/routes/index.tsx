import { Switch, Route, useLocation } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Register from "../pages/Register";
import { AnimatePresence } from "framer-motion";

const MainRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route exact path={"/"}>
          <Login />
        </Route>
        <Route exact path={"/dashboard"}>
          <Dashboard />
        </Route>
        <Route exact path={"/register"}>
          <Register />
        </Route>
      </Switch>
    </AnimatePresence>
  );
};

export default MainRoutes;
