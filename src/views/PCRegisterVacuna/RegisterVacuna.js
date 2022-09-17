/* eslint-disable prettier/prettier */
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";

// @material-ui/icons
//import AddIcon from '@material-ui/icons/Add';
import LocationOnIcon from '@material-ui/icons/LocationOn';
//Calendario 
import "assets/css/calendario.css";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";

import Select from "components/Select/SelectVacunas";

import Checkbox from "@material-ui/core/Checkbox";
import Check from "@material-ui/icons/AddCircleOutline";
import FormControlLabel from "@material-ui/core/FormControlLabel";

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
  const [checked, setChecked] = React.useState([24, 22]);

  const handleToggle = (value) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
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
                    <h4>Registrar Vacuna</h4>

                  </CardHeader>
                  <CardBody>

                  <p> Estas Registrando una vacuna a: </p> <p style={{ fontWeight: "bold", fontSize: "1.3em" }}>Aquiles Bailo</p>
                  <hr></hr>

                    <GridItem xs={12} sm={12} md={12}>
                      <GridContainer>
                        <p className={classes.divider}>Vacuna:</p>

                        <GridItem xs={2} sm={2} md={2}>
                          
                        </GridItem>
                        
                        <GridItem xs={12} sm={8} md={8}>
                          <br />
                          <Select></Select>
                        </GridItem>
                      </GridContainer>
                    </GridItem>
                    <br />
                    <br />
                    <p>En caso de no estar especificada su vacuna seleccione otra y especifiquela</p>

                    <GridItem xs={12} sm={12} md={12}>
                      <GridContainer>
                          <br/>
                          <FormControlLabel
                            control={
                              <Checkbox
                                tabIndex={-1}
                                onClick={() => handleToggle(21)}
                                checkedIcon={<Check className={classes.checkedIcon} />}
                                icon={<Check className={classes.uncheckedIcon} />}
                                classes={{
                                  checked: classes.checked,
                                  root: classes.checkRoot,
                                }}
                              />
                            }
                            classes={{ label: classes.label, root: classes.labelRoot }}
                            label="Otra..."
                          />
                        
                        <div
                          className={
                            classes.checkboxAndRadio +
                            " " +
                            classes.checkboxAndRadioHorizontal
                          }
                          />
                        
                        <GridItem xs={1} sm={1} md={1}>
                        </GridItem>

                        <GridItem xs={12} sm={8} md={8}>
                          <CustomInput
                            labelText="Nombre de vacuna..."
                            id="lugar"
                            formControlProps={{
                              fullWidth: true,
                            }}
                            inputProps={{
                              type: "lugar",

                            }}
                          />
                        </GridItem>
                      </GridContainer>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={12}>
                      <GridContainer>
                        <p className={classes.divider}>Fecha de Vacunación: </p>
                        <GridItem xs={6} sm={8} md={8}>
                          <br />
                          <DatePickerComponent placeholder="   Seleccione fecha de vacunación" format="dd-MMM-yy"></DatePickerComponent>
                        </GridItem>
                      </GridContainer>
                    </GridItem>

                    <br />
                    <CustomInput
                      labelText="Lugar de Vacunación..."
                      id="lugar"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "lugar",
                        endAdornment: (
                          <InputAdornment position="end">
                            <LocationOnIcon className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    />

                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Link to={"vaccines"} className={classes.link}>
                      <Button round color="default" size="md">
                        Cancelar
                      </Button>
                    </Link>

                    <Link to={"vaccines"} className={classes.link}>
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
