import React, { useContext } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Context } from "../index";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Login = () => {
  const { auth } = useContext(Context);

  const login = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // The signed-in user info.
        // const user = result.user;
        // console.log(user);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // The email of the user's account used.
        // const email = error.customData.email;
        // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <Container>
      <Grid
        container
        style={{ height: window.innerHeight - 50 }}
        alignItems="center"
        justifyContent="center"
      >
        <Grid
          container
          style={{ width: 400, background: "lightgray" }}
          alignItems="center"
          direction="column"
        >
          <Box>
            <Button onClick={login} variant="outlined">
              Log in with Google
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
