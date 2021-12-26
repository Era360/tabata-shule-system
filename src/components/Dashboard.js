import {
  Alert,
  Box,
  Button,
  Container,
  Paper,
  Typography,
} from "@mui/material";
import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { auth } from "../firebase";

function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser } = useAuth();
  let navigate = useNavigate();

  async function handleLogout(e) {
    e.preventDefault();
    setError("");
    try {
      console.log("reached 1");
      await signOut(auth);
      console.log("reached 2");
      setError("Successful");
      navigate("/login");
      console.log("reached 3");
    } catch {
      setError("Failed to logout");
    }
  }

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Paper elevation={4} sx={{ width: "100%" }}>
          {error.error && (
            <Alert severity="error" sx={{ width: "100%" }}>
              {error.error}
            </Alert>
          )}
          <div className="p-3">
            <Typography component="h1" variant="h4">
              <strong>Email: </strong>
              {currentUser.email}
            </Typography>
            <Button
              onClick={handleLogout}
              className=" my-3"
              variant="contained"
            >
              Log Out
            </Button>
          </div>
        </Paper>
      </Box>
    </Container>
  );
}

export default Dashboard;
