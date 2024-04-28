import { AppBar, Toolbar, Grid, Button } from "@mui/material";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { LOGIN_ROUTE } from "../utils/consts";
import { Context } from "../index";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

const NavBar = () => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);
  // console.log("user", user);

  const logout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <AppBar color="secondary" position="static">
      <Toolbar variant="dense">
        <Grid container justifyContent={"flex-end"}>
          {user ? (
            <Button variant="outlined" onClick={logout}>
              Log out
            </Button>
          ) : (
            <NavLink to={LOGIN_ROUTE}>
              <Button variant="outlined">LOG IN</Button>
            </NavLink>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
