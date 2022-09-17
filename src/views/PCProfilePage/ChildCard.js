/* eslint-disable prettier/prettier */
import React from "react";
// nodejs library that concatenates classes
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

//Core
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import styles from "assets/jss/material-kit-react/views/profilePage.js";
import { Link } from "react-router-dom";
//Card
import Card from "components/Card/Card.js"
import CardBody from "components/Card/CardBody.js"

const useStyles = makeStyles(styles);

export default function ChildCard() {
    const classes = useStyles();

    return (
        <GridItem xs={12} sm={12} md={4} className={classes.navWrapper}>
            <Card>
                <h3>Aquiles Bailo</h3>
                <hr></hr>
                <GridContainer style={{ justify: "center" }}>
                    <GridItem xs={12} sm={12} md={5} className={classes.navWrapper}>
                        <dl>
                            <dt>Sexo:</dt>
                            <dd>Masculino</dd>
                            <dt>Edad:</dt>
                            <dd>2 años</dd>
                            <dt>DNI:</dt>
                            <dd>42721936</dd>
                        </dl>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={5} className={classes.navWrapper}>
                        <dl>
                            <dt>Nacimiento:</dt>
                            <dd>12/3/2019</dd>
                            <dt>Grupo Sanguíneo:</dt>
                            <dd>A+</dd>
                            <dt>Alergias:</dt>
                            <dd>Polen, Maní</dd>
                        </dl>
                    </GridItem>
                </GridContainer>
                <CardBody>
                    <Link to={"controls"}>
                        <Button
                            color="primary"
                            target="_blank"
                            className={classes.navLink}
                        >Controles
                        </Button>
                    </Link>
                    <Link to={"vaccines"}>
                        <Button
                            color="primary"
                            target="_blank"
                            className={classes.navLink}
                        >Vacunas
                        </Button>
                    </Link>
                </CardBody>
            </Card>
        </GridItem>
    );
}
