/* eslint-disable prettier/prettier */
import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// material-ui components
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

import image1 from "assets/img/Carousel/cr1.png";
import image2 from "assets/img/Carousel/cr2.png";
import image3 from "assets/img/Carousel/cr3.png";



//                 <Health className="slick-icons" style={{ fontSize: 50 }}/>  

export default function SectionCarousel(){
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <Carousel {...settings}>
            <div>
              <img
                src={image1}
                alt="First slide"
                className="slick-image"
              />
              <div className="slick-caption">
              <h2>
                  Guardá tus visitas en un instante
                </h2>
                <h4>
                  Con PediaCare, mantener un registro de las consultas médicas de tus hijos es más fácil que nunca.
                </h4>
              </div>
            </div>
            <div>
              <img
                src={image2}
                alt="Second slide"
                className="slick-image"
              />
              <div className="slick-caption">
              <h2>
                  Seguimiento Constante
                </h2>
                <h4>
                  Te damos todas las herramientas para asistirte en mantener a tu hijo saludable.
                </h4>
              </div>
            </div>
            <div>
              <img
                src={image3}
                alt="Third slide"
                className="slick-image"
              />
              <div className="slick-caption">
                <h2>
                  Aprobado por los Especialistas
                </h2>
                <h4>
                  9 de cada 10 pediatras recomiendan PediaCare para padres primerizos y experimentados.
                </h4>
              </div>
            </div>
          </Carousel>
        </Card>
      </GridItem>
    </GridContainer>
  );
}