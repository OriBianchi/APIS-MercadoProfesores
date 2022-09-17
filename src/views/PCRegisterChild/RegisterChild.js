/* eslint-disable prettier/prettier */
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import ChildCareIcon from '@material-ui/icons/ChildCare';
import AddIcon from '@material-ui/icons/Add';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
//Calendario 
import "assets/css/calendario.css";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
//Sangre
import Select from "components/Select/SelectSangre";
//Enfermedades
import Checkbox from "@material-ui/core/Checkbox";
import Check from "@material-ui/icons/Check";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
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
  const [selectedEnabled, setSelectedEnabled] = React.useState("b");
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
                    <h4>Registrar Hijo</h4>

                  </CardHeader>
                  <CardBody>

                    <CustomInput
                      labelText="Nombre..."
                      id="Nombre"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "Nombre",
                        endAdornment: (
                          <InputAdornment position="end">
                            <ChildCareIcon className={classes.inputIconsColor} />
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
                        endAdornment: (
                          <InputAdornment position="end">
                            <ChildCareIcon className={classes.inputIconsColor} />
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
                        endAdornment: (
                          <InputAdornment position="end">
                            <FingerprintIcon className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    />

                    <GridItem xs={12} sm={12} md={12}>
                      <GridContainer>
                        <p className={classes.divider}>Fecha de Nacimiento:</p>
                        <GridItem xs={6} sm={7} md={7}>
                          <br />
                          <DatePickerComponent placeholder="   Seleccione fecha de nacimiento" format="dd-MMM-yy"></DatePickerComponent>
                        </GridItem>
                      </GridContainer>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={12}>
                      <GridContainer>
                        <p className={classes.divider}>Grupo Sanguíneo:</p>
                        <GridItem xs={7} sm={8} md={8}>

                          <br />
                          <Select></Select>
                        </GridItem>
                      </GridContainer>
                    </GridItem>

                    <p></p>

                    <p>Sexo:</p>

                    <GridItem xs={12} sm={12} md={14}>
                      <GridContainer>
                        <div
                          className={
                            classes.checkboxAndRadio +
                            " " +
                            classes.checkboxAndRadioHorizontal
                          }
                        >
                          <FormControlLabel
                            control={
                              <Radio
                                checked={selectedEnabled === "a"}
                                onChange={() => setSelectedEnabled("a")}
                                value="a"
                                name="radio button enabled"
                                aria-label="A"
                                icon={
                                  <FiberManualRecord className={classes.radioUnchecked} />
                                }
                                checkedIcon={
                                  <FiberManualRecord className={classes.radioChecked} />
                                }
                                classes={{
                                  checked: classes.radio,
                                  root: classes.radioRoot,
                                }}
                              />
                            }
                            classes={{
                              label: classes.label,
                              root: classes.labelRoot,
                            }}
                            label="Femenino"
                          />
                        </div>
                        <GridItem xs={6} sm={6} md={6}>

                          <div
                            className={
                              classes.checkboxAndRadio +
                              " " +
                              classes.checkboxAndRadioHorizontal
                            }
                          >

                            <FormControlLabel
                              control={
                                <Radio
                                  checked={selectedEnabled === "b"}
                                  onChange={() => setSelectedEnabled("b")}
                                  value="b"
                                  name="radio button enabled"
                                  aria-label="B"
                                  icon={
                                    <FiberManualRecord className={classes.radioUnchecked} />
                                  }
                                  checkedIcon={
                                    <FiberManualRecord className={classes.radioChecked} />
                                  }
                                  classes={{
                                    checked: classes.radio,
                                    root: classes.radioRoot,
                                  }}
                                />
                              }
                              classes={{
                                label: classes.label,
                                root: classes.labelRoot,
                              }}
                              label="Masculino"
                            />
                          </div>
                        </GridItem>
                      </GridContainer>
                    </GridItem>

                    <p></p>

                    <p>Enfermedades crónicas:</p>

                    <div id="checkRadios">
                      <GridContainer>
                        <GridItem xs={12} sm={6} md={4} lg={5}>
                          <div
                            className={
                              classes.checkboxAndRadio +
                              " " +
                              classes.checkboxAndRadioHorizontal
                            }
                          >
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
                              label="Asma"
                            />
                          </div>
                          <div
                            className={
                              classes.checkboxAndRadio +
                              " " +
                              classes.checkboxAndRadioHorizontal
                            }
                          >
                            <FormControlLabel
                              control={
                                <Checkbox
                                  tabIndex={-1}
                                  onClick={() => handleToggle(22)}
                                  checkedIcon={<Check className={classes.checkedIcon} />}
                                  icon={<Check className={classes.uncheckedIcon} />}
                                  classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot,
                                  }}
                                />
                              }
                              classes={{ label: classes.label, root: classes.labelRoot }}
                              label="Celiaquia"
                            />
                          </div>
                          <div
                            className={
                              classes.checkboxAndRadio +
                              " " +
                              classes.checkboxAndRadioHorizontal
                            }
                          >
                            <FormControlLabel
                              control={
                                <Checkbox
                                  tabIndex={-1}
                                  onClick={() => handleToggle(23)}
                                  checkedIcon={<Check className={classes.checkedIcon} />}
                                  icon={<Check className={classes.uncheckedIcon} />}
                                  classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot,
                                  }}
                                />
                              }
                              classes={{ label: classes.label, root: classes.labelRoot }}
                              label="Intolerante L"
                            />
                          </div>
                          <div
                            className={
                              classes.checkboxAndRadio +
                              " " +
                              classes.checkboxAndRadioHorizontal
                            }
                          >
                            <FormControlLabel
                              control={
                                <Checkbox
                                  tabIndex={-1}
                                  onClick={() => handleToggle(24)}
                                  checkedIcon={<Check className={classes.checkedIcon} />}
                                  icon={<Check className={classes.uncheckedIcon} />}
                                  classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot,
                                  }}
                                />
                              }
                              classes={{ label: classes.label, root: classes.labelRoot }}
                              label="Diabetes"
                            />
                          </div>
                          <div
                            className={
                              classes.checkboxAndRadio +
                              " " +
                              classes.checkboxAndRadioHorizontal
                            }
                          >
                          </div>
                        </GridItem>
                        <GridItem xs={1} sm={1} md={1} lg={1}>
                        </GridItem>

                        <GridItem xs={12} sm={6} md={4} lg={3}>

                          <div
                            className={
                              classes.checkboxAndRadio +
                              " " +
                              classes.checkboxAndRadioHorizontal
                            }
                          >
                            <FormControlLabel
                              control={
                                <Checkbox
                                  tabIndex={-1}
                                  onClick={() => handleToggle(25)}
                                  checkedIcon={<Check className={classes.checkedIcon} />}
                                  icon={<Check className={classes.uncheckedIcon} />}
                                  classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot,
                                  }}
                                />
                              }
                              classes={{ label: classes.label, root: classes.labelRoot }}
                              label="Fibrosis"
                            />
                          </div>
                          <div
                            className={
                              classes.checkboxAndRadio +
                              " " +
                              classes.checkboxAndRadioHorizontal
                            }
                          >
                            <FormControlLabel
                              control={
                                <Checkbox
                                  tabIndex={-1}
                                  onClick={() => handleToggle(26)}
                                  checked={checked.indexOf(26) !== -1 ? true : false}
                                  checkedIcon={<Check className={classes.checkedIcon} />}
                                  icon={<Check className={classes.uncheckedIcon} />}
                                  classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot,
                                  }}
                                />
                              }
                              classes={{ label: classes.label, root: classes.labelRoot }}
                              label="Hipotiroidismo"
                            />
                          </div>
                          <div
                            className={
                              classes.checkboxAndRadio +
                              " " +
                              classes.checkboxAndRadioHorizontal
                            }
                          >
                            <FormControlLabel
                              control={
                                <Checkbox
                                  tabIndex={-1}
                                  onClick={() => handleToggle(27)}
                                  checkedIcon={<Check className={classes.checkedIcon} />}
                                  icon={<Check className={classes.uncheckedIcon} />}
                                  classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot,
                                  }}
                                />
                              }
                              classes={{ label: classes.label, root: classes.labelRoot }}
                              label="Epilepsia"
                            />
                          </div>
                          <div
                            className={
                              classes.checkboxAndRadio +
                              " " +
                              classes.checkboxAndRadioHorizontal
                            }
                          >
                            <FormControlLabel
                              control={
                                <Checkbox
                                  tabIndex={-1}
                                  onClick={() => handleToggle(28)}
                                  checked={checked.indexOf(28) !== -1 ? true : false}
                                  checkedIcon={<Check className={classes.checkedIcon} />}
                                  icon={<Check className={classes.uncheckedIcon} />}
                                  classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot,
                                  }}
                                />
                              }
                              classes={{ label: classes.label, root: classes.labelRoot }}
                              label="Cardiopatía Congénita"
                            />
                          </div>
                          <div
                            className={
                              classes.checkboxAndRadio +
                              " " +
                              classes.checkboxAndRadioHorizontal
                            }
                          >
                          </div>
                        </GridItem>

                      </GridContainer>
                    </div>
                    <CustomInput
                      labelText="Otras enfermedades crónicas..."
                      id="otras"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "otras",
                        endAdornment: (
                          <InputAdornment position="end">
                            <AddIcon className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <CustomInput
                      labelText="Alergias..."
                      id="otras"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "otras",
                        endAdornment: (
                          <InputAdornment position="end">
                            <SentimentVeryDissatisfiedIcon className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    />

                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Link to={"/"} className={classes.link}>
                      <Button round color="default" size="md">
                        Cancelar
                      </Button>
                    </Link>
                    
                    <Link to={"landing-page-LI"} className={classes.link}>
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
