/* eslint-disable prettier/prettier */
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Event from "@material-ui/icons/Event";
import Assignment from "@material-ui/icons/Assignment";
import PregnantWoman from "@material-ui/icons/PregnantWoman";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Wachines from "assets/img/CuteCons/wachines.png";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem s={12} sm={12} md={8}>
          <img src={Wachines} alt="Niños"></img>
          <h2 className={classes.title}>
            Todos tus controles, en un mismo lugar.
          </h2>
          <h5 className={classes.description}>
            PediaCare es un servicio digital destinado a padres para
            el seguimiento médico de sus hijos.
            Nuestro objetivo es mantenerte al día en las nuevas novedades sobre calendarios de vacunación, 
            proveerte percentiles y otros parámetros de control
            para que cuentes con toda la información médica sobre tus hijos al alcance de tus manos.
          </h5>
        </GridItem>
      </GridContainer>
      <br />
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title={<a href="https://www.mayoclinic.org/es-es/healthy-lifestyle/infant-and-toddler-health/in-depth/healthy-baby/art-20044767">Salud de bebés y niños pequeños</a>}
              description="Las consultas pediátricas de control son una forma importante de controlar el crecimiento y el desarrollo de tu bebé y de detectar problemas graves. Estos chequeos regulares también ofrecen la oportunidad de desarrollar [...]"
              icon={Assignment}
              iconColor="warning"
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
              title={<a href="http://www.materna.com.ar/articulos/20711-como-calcular-las-semanas-los-meses-y-los-trimestres-del-embarazo">Cómo calcular tu tiempo de embarazo</a>}
              description="¿De cuánto estoy? El cálculo en el embarazo de las semanas, los meses y los trimestres generan confusión en muchas futuras mamás. Es por eso que elaboramos las siguientes tablas para que todas las embarazadas puedan consultarlas y  despejar las dudas.  [...]"
              icon={PregnantWoman}
              iconColor="primary"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
