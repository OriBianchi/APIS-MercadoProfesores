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
import HeaderLinks from "components/Header/HeaderLinks.js";
//import Parallax from "components/Parallax/Parallax.js";
import Carousel from "components/Carousel/Carousel.js";
import styles from "assets/jss/material-kit-react/views/landingPage.js";
// Sections for this page
import Articulos from "./Sections/ArticulosInteres.js";


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
        rightLinks={<HeaderLinks />}
        fixed
        {...rest}
      />
      

        <Carousel />
      


      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <Articulos />
        </div>
      </div>
      <Footer />
    </div>
  );
}
