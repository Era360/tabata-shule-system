import { Box, Container, Typography } from "@mui/material";
import React from "react";

function Dashboard() {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxShadow: 5,
        }}
      >
        <Typography component="h1" variant="h4">
          {"Elia the great"}
        </Typography>
      </Box>
    </Container>
  );
}

export default Dashboard;
