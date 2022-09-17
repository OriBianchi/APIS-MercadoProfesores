/* eslint-disable prettier/prettier */
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// Cuerpo
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import HeaderLinksLI from "components/Header/PCHeaderLinksPerfil";
//Core
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import Parallax from "components/Parallax/Parallax.js";
import IconButton from "@material-ui/core/IconButton";
import Close from "@material-ui/icons/Close";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Dialog from "@material-ui/core/Dialog";
import InputAdornment from "@material-ui/core/InputAdornment";
import Email from "@material-ui/icons/Email";
import CustomInput from "components/CustomInput/CustomInput.js";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import styles from "assets/jss/material-kit-react/views/profilePage.js";
import { Link } from "react-router-dom";

//Icons -- Media
import People from "@material-ui/icons/People";
import PhoneIcon from '@material-ui/icons/Phone';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import Icon from "@material-ui/core/Icon";
import profile from "assets/img/faces/placeholder.png";

//Card
import Card from "components/Card/Card.js"
import ChildCard from "./ChildCard";

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
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );

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
        image={require("assets/img/profile-bg.jpg").default}
      />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>

          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.profile}>
                <div>
                  <img src={profile} alt="..." className={imageClasses} />
                </div>
                <div className={classes.name}>
                  <h2 className={classes.title}>Mirtha Legrand</h2>
                  <br></br>
                  <Button
                    color="primary"
                    target="_blank"
                    onClick={() => setClassicModal(true)}
                    className={classes.navLink}
                  >Editar Perfil
                  </Button>
                </div>
              </div>
            </GridItem>
          </GridContainer>

          <GridContainer justify="center">
            {/* ------- Datos del Usuario --------------*/}
            <GridItem xs={12} sm={12} md={3} className={classes.navWrapper}>
              <dl>
                <dt>Nombre Completo:</dt>
                <dd>Mirtha Legrand</dd>
                <dt>DNI:</dt>
                <dd>00000001</dd>
              </dl>
            </GridItem>
            <GridItem xs={12} sm={12} md={3} className={classes.navWrapper}>
              <dl>
                <dt>Correo Electrónico:</dt>
                <dd>correofalso123@gmail.com</dd>
                <dt>Teléfono:</dt>
                <dd>+54 11 5935-3148</dd>
              </dl>
            </GridItem>

            {/* ------- Tus Hijos --------------*/}
            <GridItem xs={12} sm={12} md={12} className={classes.navWrapper}>
              <h3 className={classes.title}>Tus hijos:</h3>
            </GridItem>

          </GridContainer>

          {/* -----    Contenedor de Hijos   -------*/}
          <GridContainer>

            <ChildCard />

            <ChildCard />

            <GridItem xs={12} sm={12} md={4} className={classes.navWrapper}>
              <Card>
                <Link to={"register-child-page"}>
                  <Button
                    color="transparent"
                    target="_blank"
                    className={classes.navLink}
                    size="large">
                    Añadir
                  </Button>
                </Link>
              </Card>
            </GridItem>

          </GridContainer>
        </div>
      </div>
      <Footer />

      {/* ------- MODAL: Editar Perfil --------------*/}
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

          <GridContainer justify="center">
            <h3 className={classes.modalTitle} >Editar Perfil</h3>
          </GridContainer>

        </DialogTitle>


        <DialogContent
          id="classic-modal-slide-description"
          className={classes.modalBody}
        >
          <CustomInput
            labelText="Nombre..."
            id="Nombre"
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: "Nombre",
              defaultValue: "Mirtha",
              endAdornment: (
                <InputAdornment position="end">
                  <People className={classes.inputIconsColor} />
                </InputAdornment>
              ),
            }}
          />
          <CustomInput
            labelText="Apellido..."
            id="Apellido"
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: "Apellido",
              defaultValue: "Legrand",
              endAdornment: (
                <InputAdornment position="end">
                  <People className={classes.inputIconsColor} />
                </InputAdornment>
              ),
            }}
          />

          <CustomInput
            labelText="Número de celular..."
            id="Número de celular"
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: "Número de celular",
              defaultValue: "+54 11 5935-3148",
              endAdornment: (
                <InputAdornment position="end">
                  <PhoneIcon className={classes.inputIconsColor} />
                </InputAdornment>
              ),
            }}
          />
          <CustomInput
            labelText="DNI..."
            id="DNI"
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: "DNI",
              defaultValue: "00000001",
              endAdornment: (
                <InputAdornment position="end">
                  <FingerprintIcon className={classes.inputIconsColor} />
                </InputAdornment>
              ),
            }}
          />
          <CustomInput
            labelText="Email..."
            id="email"
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: "email",
              defaultValue: "correofalso123@gmail.com",
              endAdornment: (
                <InputAdornment position="end">
                  <Email className={classes.inputIconsColor} />
                </InputAdornment>
              ),
            }}
          />
          <CustomInput
            labelText="Contraseña Nueva"
            id="pass"
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: "password",
              placeholder: "Introduce una contraseña nueva...",
              endAdornment: (
                <InputAdornment position="end">
                  <Icon className={classes.inputIconsColor}>
                    lock_outline
                  </Icon>
                </InputAdornment>
              ),
              autoComplete: "off",
            }}
          />


          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <br></br>
              <p>Subir nueva foto de perfil</p>
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <Button
                variant="contained"
                component="label">
                Sube un archivo
                <input
                  type="file"
                  hidden />
              </Button>
            </GridItem>
          </GridContainer>
          <br></br>
          <p>
            Confirma los cambios introduciendo tu contraseña actual:
          </p>
          <CustomInput
            labelText="Contraseña"
            id="pass"
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: "password",
              endAdornment: (
                <InputAdornment position="end">
                  <Icon className={classes.inputIconsColor}>
                    lock_outline
                  </Icon>
                </InputAdornment>
              ),
              autoComplete: "off",
            }}
          />
        </DialogContent>


        <DialogActions className={classes.modalFooter}>
          <Button
            onClick={() => setClassicModal(false)}
            color="default"
            round
          >
            Cancelar
          </Button>
          <Button color="info" round
            onClick={() => setClassicModal(false)}>
            Editar
          </Button>
        </DialogActions>
      </Dialog>
    </div >
  );
}
