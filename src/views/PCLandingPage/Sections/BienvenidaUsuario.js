/* eslint-disable prettier/prettier */
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";


// @material-ui/icons
import Event from "@material-ui/icons/Event";
import Face from "@material-ui/icons/Face";
import QueryStats from "@material-ui/icons/MultilineChart";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Hands from "components/Animations/Hands/Hands.js"
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";


const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <Hands />
      </GridContainer>
      <GridContainer justify="center">
        <GridItem s={12} sm={12} md={8}>
          <h2 className={classes.title}>
            ¡Hola Usuario!
          </h2>
          <h5 className={classes.description}>
            PediaCare es un servicio digital destinado a padres para
            el seguimiento médico de sus hijos.
            Nuestro objetivo es mantenerte al día en las nuevas novedades sobre calendarios de vacunación,
            proveerte percentiles y otros parámetros de control
            para que cuentes con toda la información médica sobre tus hijos al alcance de tus manos.
          </h5>
          <h4 className={classes.title}>
            ¿Cómo podemos ayudarte hoy?
          </h4>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title={<a href="/profile-page">Tu Perfil</a>}
              description="Verifica los controles de tus hijos, gestiona tus turnos y accedé a la configuración de tu cuenta."
              icon={Face}
              iconColor="primary"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title={<a href="https://www.stamboulian.com.ar/pacientes/calendario-nacional-de-vacunacion/">Calendario de Vacunación</a>}
              description="Consulte el Calendario Nacional de Vacunación actualizado."
              icon={Event}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title= {<Link to={"percentiles"} className={classes.link}> Compare controles con percentiles de la OMS </Link>}
              description="Elija un control y compare con los percentiles de Curva de Crecimiento ofrecidos por la Organizacion Mundial de la Salud"
              icon={QueryStats}
              iconColor="warning"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
