/* eslint-disable prettier/prettier */
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "assets/scss/material-kit-react.scss?v=1.10.0";

// pages for this product
import Components from "views/Components/Components.js";
import PCLandingPage from "views/PCLandingPage/PCLandingPage";
import LandingPage from "views/LandingPage/LandingPage.js";
import PCLoginPage from "views/PCLoginPage/LoginPage.js";
import PCRegisterPage from "views/PCRegisterPage/RegisterPage.js";
import PCRegisterChild from "views/PCRegisterChild/RegisterChild.js";
import PCLandingPageLogin from "views/PCLandingPage/PCLandingPageLogin.js";
import PCProfilePage from "views/PCProfilePage/PCProfilePage.js";
import PCRegisterControl from "views/PCRegisterControl/RegisterControl.js";
import PCRegisterControlCabeza from "views/PCRegisterControlCabeza/RegisterControlCabeza.js";
import PCVaccinesView from "views/PCVaccinesView/PCVaccinesView.js";
import PCRegisterVacuna from "views/PCRegisterVacuna/RegisterVacuna.js";
import PCPercentiles from "views/PCPercentiles/Percentiles.js";
import PCControles from "views/PCControlsView/PCControlsView.js"
import LoginPage from "views/LoginPage/LoginPage";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      {/* Componentes ORIGINAL */}
      <Route path="/components" component={Components} />
      {/* Landing Page ORIGINAL */}
      <Route path="/landing-page" component={LandingPage} />
      {/* Login Page ORIGINAL */}
      <Route path="/login-pageOG" component={LoginPage} />

      {/* Perfil */}
      <Route path="/profile-page" component={PCProfilePage} />
      {/* Loguearse */}
      <Route path="/login-page" component={PCLoginPage} />
      {/* Registro */}
      <Route path="/register-page" component={PCRegisterPage} />
      {/* Registrar Hijo */}
      <Route path="/register-child-page" component={PCRegisterChild} />
      {/* Landing Page Logueado */}
      <Route path="/landing-page-LI" component={PCLandingPageLogin} />
      {/* Vacunas */}
      <Route path="/vaccines" component={PCVaccinesView} />
      {/* Registrar Vacunas */}
      <Route path="/register-vaccine" component={PCRegisterVacuna} />
      {/* Percentiles */}
      <Route path="/percentiles" component={PCPercentiles} />
      {/* Controles */}
      <Route path="/controls" component={PCControles} />
      {/* Registrar Control */}
      <Route path="/register-control" component={PCRegisterControl} />      
      {/* Registrar Control Cabeza */}
      <Route path="/register-control-cabeza" component={PCRegisterControlCabeza} />
      
      {/* Landing Page */}
      <Route path="/" component={PCLandingPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
