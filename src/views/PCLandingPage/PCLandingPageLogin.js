/* eslint-disable prettier/prettier */
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
// import GridContainer from "components/Grid/GridContainer.js";
// import GridItem from "components/Grid/GridItem.js";
// import Button from "components/CustomButtons/Button.js";
import HeaderLinksLoggedIn from "components/Header/PCHeaderLinksLoggedIn.js";
import styles from "assets/jss/material-kit-react/views/landingPage.js";



// Sections for this page
import BienvenidaUsuario from "./Sections/BienvenidaUsuario.js";
import Parallax from "components/Parallax/Parallax.js";
const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="info"
        routes={dashboardRoutes}
        brand="PediaCare"
        rightLinks={<HeaderLinksLoggedIn />}
        fixed
        {...rest}
      />
      <Parallax
        small
        filter
        image={require("assets/img/profile-bg.jpg").default}
      />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <BienvenidaUsuario />
        </div>
      </div>
      <Footer />
    </div>
  );
}
