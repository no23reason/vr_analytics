import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { WorkspaceProvider } from "../contexts/Workspace";
import Page from "../components/Page";

import Login from "./Login";
import Logout from "./Logout";
import Welcome from "./Welcome";
import Home from "./Home";
import CustomExecutionDemo from "./CustomExecutionDemo";
import VRDemo from "./VRDemo";

import styles from "./AppRouter.module.scss";
import Chart3D_v2 from "./Chart3D_v1";
import Chart3D_v0 from "./Chart3D_v2";

// Uncomment these lines if you want to redirect unauthorized users to login form
// import { useAuth } from "../contexts/Auth";
// import { AuthStatus } from "../contexts/Auth/state";
// const RedirectIfNotLoggedIn: React.FC = () => {
//     const auth = useAuth();
//     const shouldRedirectToLogin = auth.authStatus === AuthStatus.UNAUTHORIZED;
//     return shouldRedirectToLogin ? <Route component={() => <Redirect to="/login" />} /> : null;
// };

const AppRouter: React.FC = () => {
    return (
        <div className={styles.AppRouter}>
            <Router>
                {/* WorkspaceProvider depends on Router so it must be nested */}
                <WorkspaceProvider>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/custom_execution" component={CustomExecutionDemo} />
                    <Route exact path="/vr_demo" component={VRDemo} />
                    <Route exact path="/chart3d_v1" component={Chart3D_v2} />
                    <Route exact path="/chart3d_v2" component={Chart3D_v0} />
                    <Route exact path="/welcome" component={Welcome} />
                    <Route exact path="/dashboard" component={() => <Page>Dashboard</Page>} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/logout" component={Logout} />
                    {/* Uncomment the next line if you want to redirect unauthorized users to login form */}
                    {/* <RedirectIfNotLoggedIn /> */}
                </WorkspaceProvider>
            </Router>
        </div>
    );
};

export default AppRouter;
