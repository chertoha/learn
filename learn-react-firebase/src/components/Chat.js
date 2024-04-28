import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Context } from "../index";
import { useAuthState } from "react-firebase-hooks/auth";
import { Avatar, Button, Container, Grid, TextField } from "@mui/material";
import Loader from "./Loader";
import {
  collection,
  addDoc,
  getDocs,
  orderBy,
  query,
  onSnapshot,
} from "firebase/firestore";

const Chat = () => {
  const { auth, firestore } = useContext(Context);
  const [user] = useAuthState(auth);
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const q = query(collection(firestore, "messages"), orderBy("createdAt"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let results = [];
      querySnapshot.forEach((doc) => {
        results.push(doc.data());
      });
      setMessages(results);
    });

    return () => unsubscribe();
  }, []);

  const sendMessage = async () => {
    try {
      const docRef = await addDoc(collection(firestore, "messages"), {
        userId: user.uid,
        displayName: user.displayName,
        userEmail: user.email,
        photoUrl: user.photoURL,
        text: value,
        createdAt: Date.now(),
      });

      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    setValue("");
  };

  // if (loading) {
  //   return <Loader />;
  // }

  // console.log("render");
  return (
    <Container>
      <Grid
        container
        style={{ height: window.innerHeight - 50, marginTop: 20 }}
        alignItems="center"
        justifyContent="center"
      >
        <div
          style={{
            width: "80%",
            height: "60vh",
            border: "1px solid gray",
            overflowY: "auto",
          }}
        >
          {messages.map(
            ({ userId, photoUrl, text, displayName, createdAt }) => (
              <div
                key={createdAt}
                style={{
                  margin: 10,
                  border:
                    userId === user.uid ? "3px solid green" : "3px dashed red",
                  marginLeft: userId === user.uid ? "auto" : "10px",
                  width: "fit-content",
                }}
              >
                <Grid container>
                  <Avatar src={photoUrl} />
                  <div>{displayName}</div>
                </Grid>
                <div>{text}</div>
              </div>
            )
          )}
        </div>

        <Grid
          container
          direction="column"
          alignItems="flex-end"
          style={{ width: "80%" }}
        >
          <TextField
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            fullWidth
            variant="outlined"
            maxRows={2}
          ></TextField>
          <Button onClick={sendMessage} variant="outlined">
            Send
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Chat;
