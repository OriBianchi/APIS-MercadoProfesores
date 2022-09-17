/* eslint-disable prettier/prettier */
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// Cuerpo
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import HeaderLinksLI from "components/Header/PCHeaderLinksLoggedIn.js";
//Core
//import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
import styles from "assets/jss/material-kit-react/views/profilePage.js";
//import { Link } from "react-router-dom";
import montana from "assets/img/CuteCons/montana.png"
//Percentiles
import minaPeso from "assets/img/Curvas/Mina Peso.jpg"
import pibePeso from "assets/img/Curvas/Pibe Peso.jpg"
import minaEstatura from "assets/img/Curvas/Mina Estatura.jpg"
import pibeEstatura from "assets/img/Curvas/Pibe Estatura.jpg"
import minaCabeza from "assets/img/Curvas/Mina Cabeza.jpg"
import pibeCabeza from "assets/img/Curvas/Pibe Cabeza.jpg"

const useStyles = makeStyles(styles);
export default function ProfilePage(props) {
  // eslint-disable-next-line no-unused-vars
  const [cardAnimation, setCardAnimation] = React.useState("cardHidden");

  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;

  return (
    <div>
      <Header
        color="info"
        brand="Pediacare"
        rightLinks={<HeaderLinksLI />}
        fixed
        {...rest}
      />
      <Parallax
        small
        filter
        image={require("assets/img/profile-bg.jpg").default}>


      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem>                  <p style={{ color: "white" }}>.</p></GridItem>

            <img src={montana} style={{ width: "100px", left: "10%", bottom: "8%" }}></img>
          </GridContainer>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.profile}>
                <div>
                  <p style={{ color: "white" }}>.</p>
                  <p style={{ color: "white" }}>.</p>
                </div>
                <div className={classes.name}>
                  <h2 className={classes.title}>Percentiles de Curvas de Crecimientos</h2>
                  <p style={{  fontSize: "1.3em" }}>Patrones de crecimiento infantil de la OMS</p>

                </div>
              </div>
            </GridItem>
          </GridContainer>

          <GridItem xs={12} sm={12} md={12}>
            <GridContainer>
              <h style={{ fontWeight: "bold",fontSize: "3em", color: "#F199C4"}}>Niñas</h>
              <GridItem xs={1} sm={1} md={8}>
              </GridItem>
              <GridItem xs={2} sm={2} md={2}>
                <h style={{ fontWeight: "bold",fontSize: "3em", color: "#A5E2F1" }}>Niños</h>
              </GridItem>
            </GridContainer>
          </GridItem>

          <hr></hr>
          <GridContainer justify="center">
            <h1 className={classes.title}>Peso</h1>
          </GridContainer>
        </div>

        <div>
          <GridItem xs={0} sm={0} md={12} lg={12}>
            <GridContainer >
              <GridItem xs={12} sm={12} md={5} lg={5}>
                <img src={minaPeso} style={{ width: "120%", border: "5px solid #F199C4" }}></img>
              </GridItem>
              <GridItem xs={0} sm={0} md={1} lg={1}>
              </GridItem>
              <GridItem xs={12} sm={12} md={5} lg={5}>
                <img src={pibePeso} style={{ width: "120%", border: "5px solid #A5E2F1" }}></img>
              </GridItem>
              <GridItem xs={0} sm={0} md={1} lg={1}>
              </GridItem>
            </GridContainer>
          </GridItem>

          <GridContainer justify="center">
            <h1 className={classes.title}>Estatura</h1>
          </GridContainer>

          <GridItem xs={0} sm={0} md={12} lg={12}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={5} lg={5}>
                <img src={minaEstatura} style={{ width: "120%", border: "5px solid #F199C4" }}></img>
              </GridItem>
              <GridItem xs={0} sm={0} md={1} lg={1}>
              </GridItem>
              <GridItem xs={12} sm={12} md={5} lg={5}>
                <img src={pibeEstatura} style={{ width: "120%", border: "5px solid #A5E2F1" }}></img>
              </GridItem>
              <GridItem xs={0} sm={0} md={1} lg={1}>
              </GridItem>
            </GridContainer>
          </GridItem>

          <GridContainer justify="center">
            <h1 className={classes.title}>Perímetro Cefálico</h1>
          </GridContainer>

          <GridItem xs={0} sm={0} md={12} lg={12}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={5} lg={5}>
                <img src={minaCabeza} style={{ width: "120%", border: "5px solid #F199C4" }}></img>
              </GridItem>
              <GridItem xs={0} sm={0} md={1} lg={1}>
              </GridItem>
              <GridItem xs={12} sm={12} md={5} lg={5}>
                <img src={pibeCabeza} style={{ width: "120%", border: "5px solid #A5E2F1" }}></img>
              </GridItem>
              <GridItem xs={0} sm={0} md={1} lg={1}>
              </GridItem>
            </GridContainer>
          </GridItem>

          <br/>
          <br/>

        </div>
      </div>
      <Footer />
    </div >
  );
}
