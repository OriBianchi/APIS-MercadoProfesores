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
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
import styles from "assets/jss/material-kit-react/views/profilePage.js";
import { Link } from "react-router-dom";
import Vacunita from "assets/img/CuteCons/vacunita.png"
import VacunasTable from "components/Table/VacunasTable.js"
import calendariovac from "assets/img/calendariovacunas.jpg";
import IconButton from "@material-ui/core/IconButton";
import Close from "@material-ui/icons/Close";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";




//Icons -- Media

//Card
import Card from "components/Card/Card.js"

const useStyles = makeStyles(styles);
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});
export default function ProfilePage(props) {
  // eslint-disable-next-line no-unused-vars
  const [cardAnimation, setCardAnimation] = React.useState("cardHidden");
  const [classicModal, setClassicModal] = React.useState(false);

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

            <img src={Vacunita} style={{ width: "100px", left: "10%", bottom: "8%" }}></img>
          </GridContainer>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.profile}>
                <div>
                  <p style={{ color: "white" }}>.</p>
                  <p style={{ color: "white" }}>.</p>
                </div>
                <div className={classes.name}>
                  <h2 className={classes.title}>Vacunas</h2>
                </div>
              </div>
            </GridItem>
          </GridContainer>

          <GridContainer justify="center">
            {/* ------- Hijo Seleccionado --------------*/}
            <GridItem xs={12} sm={12} md={3} className={classes.navWrapper}>
              <p> Estas viendo las vacunas de:</p> <p style={{ fontWeight: "bold", fontSize: "1.3em" }}>Aquiles Bailo</p>
            </GridItem>
          </GridContainer>

          {/* -----    Contenedor de Tabla  -------*/}
          <GridContainer>

            <VacunasTable />

            <GridItem xs={12} sm={12} md={4} className={classes.navWrapper}>
              <Button
                color="primary"
                target="_blank"
                onClick={() => setClassicModal(true)}
                className={classes.navLink}
              >Consultar Calendario de Vacunas
              </Button>
              <br></br>
              <Card>
                <Link to={"register-vaccine"}className={classes.link}>
                  <Button
                    color="transparent"
                    target="_blank"
                    className={classes.navLink}
                    size="large">
                    Añadir Vacuna
                  </Button>
                </Link>
              </Card>
            </GridItem>


          </GridContainer>
        </div>
      </div>
      <Footer />


      <Dialog
        classes={{
          root: classes.center,
          paper: classes.modal,
        }}
        open={classicModal}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setClassicModal(false)}
        aria-labelledby="classic-modal-slide-title"
        aria-describedby="classic-modal-slide-description"
      >
        <DialogTitle
          id="classic-modal-slide-title"
          disableTypography
          className={classes.modalHeader}
        >
          <IconButton
            style={{ padding: "0px 0px 0px 0px" }}
            className={classes.modalCloseButton}
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={() => setClassicModal(false)}
          >
            <Close className={classes.modalClose} />

          </IconButton>

          <h3 className={classes.modalTitle} style={{ padding: "0px 0px 0px 0px", margin: "10px" }}>Calendario de Vacunas</h3>
        </DialogTitle>

        <img src={calendariovac}style={{ width: "1000px"}}></img>
        <DialogContent
          id="classic-modal-slide-description"
          className={classes.modalBody}
        >


        </DialogContent>


        <DialogActions className={classes.modalFooter}>
          <Button
            onClick={() => setClassicModal(false)}
            color="info"
            round
          >
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </div >
  );
}
