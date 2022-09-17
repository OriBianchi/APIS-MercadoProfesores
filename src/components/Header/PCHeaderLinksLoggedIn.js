/*eslint-disable*/
import React from "react";

// Componentes
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "components/CustomButtons/Button.js";
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";
import { Link } from "react-router-dom";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>

      {/*----------- Mi Perfil --------- */}
      <ListItem className={classes.listItem}>
        <Link to={"profile-page"} className={classes.link}>
          <Button color="rose">
            <AccountCircleOutlinedIcon className={classes.icons} /> Mi Perfil
          </Button>
        </Link>
      </ListItem>

      {/*----------- Cerrar Sesión --------- */}
      <ListItem className={classes.listItem}>
        <Link to={"/"} className={classes.link}>
          <Button color="info">
            Cerrar Sesión
          </Button>
        </Link>
      </ListItem>

    </List >
  );
}
