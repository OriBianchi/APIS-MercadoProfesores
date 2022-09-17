/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import styles from "assets/jss/material-kit-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.google.com.ar/search?q=corazones&hl=es-419&authuser=0&tbm=isch&sxsrf=AOaemvIAeLgCoMbSaVuYImv9OFdfBTCrJg%3A1631336718854&source=hp&biw=1440&bih=821&ei=Djk8YcnXMemz5OUP3JGqoAk&oq=corazones&gs_lcp=CgNpbWcQAzIICAAQgAQQsQMyCAgAEIAEELEDMggIABCABBCxAzIICAAQgAQQsQMyCAgAEIAEELEDMggIABCABBCxAzIICAAQgAQQsQMyCAgAEIAEELEDMggIABCABBCxAzIFCAAQgAQ6BwgjEO8DECc6CggjEO8DEOoCECdQjhJYi3NgqnRoBHAAeACAAdsCiAGADJIBCDEwLjEuMS4xmAEAoAEBqgELZ3dzLXdpei1pbWewAQo&sclient=img&ved=0ahUKEwjJlontkvbyAhXpGbkGHdyICpQQ4dUDCAc&uact=5"
                className={classes.block}
                target="_blank"
              >
                Creative PAZ Y ORIIIII LAS MEJORES
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.linkedin.com/in/pazgiacchino/"
                className={classes.block}
                target="_blank"
              >
                About Paz
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.linkedin.com/in/orianacbianchi/"
                className={classes.block}
                target="_blank"
              >
                About Ori
              </a>
            </ListItem>
            
          </List>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()} , made with{" "}
          <Favorite className={classes.icon} /> by{" "}
          <a
            href="https://www.google.com.ar/search?q=live+love+and+laugh&tbm=isch&ved=2ahUKEwjTrr76k_byAhVBMTUKHeOABWkQ2-cCegQIABAA&oq=live+love+and+&gs_lcp=CgNpbWcQARgAMgUIABCABDIECAAQHjIECAAQHjIECAAQHjIECAAQHjIECAAQHjIECAAQHjIECAAQHjIECAAQHjIECAAQHjoKCCMQ7wMQ6gIQJzoHCCMQ7wMQJzoICAAQgAQQsQM6BAgAEEM6BwgAELEDEENQkGdY5p0BYNytAWgBcAB4AIABhwGIAdAKkgEEMTEuM5gBAKABAaoBC2d3cy13aXotaW1nsAEKwAEB&sclient=img&ei=Nzo8YZO3F8Hi1AHjgZbIBg&authuser=0&bih=821&biw=1440&hl=es-419#imgrc=DkgfeqMHjBc_IM"
            className={aClasses}
            target="_blank"
          >
            PazOri
          </a>{" "}
          for a 10 in APIS.
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool,
};
