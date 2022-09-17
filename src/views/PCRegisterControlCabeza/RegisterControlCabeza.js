/* eslint-disable prettier/prettier */
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
import VisibilityIcon from '@material-ui/icons/Visibility';
import AssignmentIcon from '@material-ui/icons/Assignment';
//Calendario 
import "assets/css/calendario.css";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import { DateRangePickerComponent } from "@syncfusion/ej2-react-calendars";
//import Form from 'react-bootstrap/Form'
import SelectMedicamentos from "components/Select/SelectMedicamentos";
// core components
import Header from "components/Header/Header.js";
//import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import { Link } from "react-router-dom";
import styles from "assets/jss/material-kit-react/views/loginPage.js";
import image from "assets/img/bg7.jpg";

const useStyles = makeStyles(styles);

export default function LoginPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        absolute
        color="info"
        brand="PediaCare"

        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color="info" className={classes.cardHeader}>
                    <h4>Registrar Control Pediátrico</h4>

                  </CardHeader>
                  <CardBody>

                  <p> Estas Registrando un registro a: </p> <p style={{ fontWeight: "bold", fontSize: "1.3em" }}>Aquiles Bailo</p>
                  <hr></hr>

                    <GridItem xs={12} sm={12} md={12}>
                      <GridContainer>
                        <p className={classes.divider}>Fecha del Control:</p>
                        <GridItem xs={7} sm={8} md={9}>

                          <br />
                          <DatePickerComponent placeholder="    Seleccione fecha del control" format="dd-MMM-yy"></DatePickerComponent>
                        </GridItem>
                      </GridContainer>
                    </GridItem>

                    <GridContainer>

                      <GridItem xs={4} sm={4} md={4} lg={4}>
                        <CustomInput
                          labelText="Peso..."
                          id="float"
                          formControlProps={{
                            fullWidth: true,
                          }}
                        />
                      </GridItem>

                      <GridItem xs={4} sm={4} md={4} lg={4}>
                        <CustomInput
                          labelText="Altura..."
                          id="float"
                          formControlProps={{
                            fullWidth: true,
                          }}
                        />
                      </GridItem>
                      <GridItem xs={4} sm={4} md={4} lg={4}>
                        <CustomInput
                          labelText="Diametro Cabeza..."
                          id="float"
                          formControlProps={{
                            fullWidth: true,
                          }}
                        />
                      </GridItem>
                    </GridContainer>

                  
                    <CustomInput
                      labelText="Observaciones..."
                      id="obs"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "obs",
                        endAdornment: (
                          <InputAdornment position="end">
                            <VisibilityIcon className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    />

                    <GridContainer>

                      <GridItem xs={12} sm={4} md={4} lg={6}>
                        <CustomInput
                          labelText="Medicamentos..."
                          id="float"
                          formControlProps={{
                            fullWidth: true,
                          }}
                        />
                      </GridItem>

                      <GridItem xs={6} sm={4} md={4} lg={3}>
                        <CustomInput
                          labelText="Dosis"
                          id="float"
                          formControlProps={{
                            fullWidth: true,
                          }}
                        />
                      </GridItem>

                      <GridItem xs={6} sm={4} md={4} lg={3}>
                        <br></br>
                        <SelectMedicamentos></SelectMedicamentos>
                      </GridItem>
                    </GridContainer>

                    <GridItem xs={12} sm={12} md={12}>
                      <GridContainer>
                        <p className={classes.divider}>Periodo de medicación:   </p>
                        <GridItem xs={12} sm={12} md={8}>

                          <br />
                          <DateRangePickerComponent placeholder="    Seleccione un periodo..." format="dd-MMM-yy"></DateRangePickerComponent>
                        </GridItem>
                      </GridContainer>
                    </GridItem>


                    <CustomInput
                      labelText="Estudios Medicos..."
                      id="otras"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "obs",
                        endAdornment: (
                          <InputAdornment position="end">
                            <AssignmentIcon className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <CustomInput
                      labelText="Resultados Estudios Medicos..."
                      id="otras"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "obs",
                        endAdornment: (
                          <InputAdornment position="end">
                            <AssignmentIcon className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    />

                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Link to={"controls"} className={classes.link}>
                      <Button round color="default" size="md">
                        Cancelar
                      </Button>
                    </Link>
                    <Link to={"controls"} className={classes.link}>
                      <Button round color="info" size="md">

                        Finalizar
                      </Button>
                    </Link>
                  </CardFooter>

                  <p className={classes.divider}></p>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>

        <Footer whiteFont />
      </div>
    </div >
  );
}
