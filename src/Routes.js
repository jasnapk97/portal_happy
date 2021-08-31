import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Home from "./containers/home";
import CurrentOpenings from "./containers/currentOpenings";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
						exact
						path="/current_openings"
						component={CurrentOpenings}
					/>
        {/* <Route
						exact
						path="/forgot_password"
						component={ForgotPassword}
					/>
					<Route
						exact
						path="/reset_password"
						component={ResetPassword}
					/>
					<PrivateRoute exact path="/user" component={User} />
					<PrivateRoute
						exact
						path="/dashboard"
						component={DashBoard}
					/>
					<PrivateRoute
						exact
						path="/manage-user/:id"
						component={ManageUser}
					/>
					<PrivateRoute exact path="/admin" component={Admin} />
					<PrivateRoute
						exact
						path="/admin-user-info/:id"
						component={AdminUserInfo}
					/>
					<PrivateRoute
						exact
						path="/admin-add-member"
						component={AddMemberForm}
					/>
					<PrivateRoute
						exact
						path="/tickets"
						component={TicketsContainer}
					/>
					<PrivateRoute
						exact
						path="/ticket-details/:id"
						component={TicketDetails}
					/>
					<PrivateRoute
						exact
						path="/settings"
						component={SettingsContainer}
					/>
					<PrivateRoute
						exact
						path="/settings-edit"
						component={SettingsEdit}
					/>
					<PrivateRoute
						exact
						path="/city-management"
						component={CityManagement}
					/> */}
      </Switch>
    </Router>
  );
};

export default Routes;
