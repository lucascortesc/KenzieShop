import { Switch, Route } from "react-router-dom";
import { Home } from "../Home";
import { Cart } from "../Cart";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/cart">
        <Cart />
      </Route>
    </Switch>
  );
};
