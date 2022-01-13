import { Groups, Money, PersonAdd, PhoneAndroid } from "@mui/icons-material";
import { Box, Card, Typography } from "@mui/material";
import React from "react";

function Nyumbani(props) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography className="fs-5">
        <strong>Karibu,</strong> {props.curruser}
      </Typography>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 5,
        }}
      >
        <Card
          sx={{
            width: 200,
            height: 190,
            borderRadius: "15px",
            backgroundColor: "rgba(0, 184, 70, 0.4)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 40,
            }}
          >
            <Groups fontSize="large" />
            <Typography className="fw-bold fs-3">{1026}</Typography>
            <Typography className="text-center px-2 fw-bold">
              Idadi ya washarika
            </Typography>
          </div>
        </Card>
        <Card
          sx={{
            width: 200,
            height: 190,
            borderRadius: "15px",
            backgroundColor: "rgba(0, 184, 184, 0.4)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 40,
            }}
          >
            <PhoneAndroid fontSize="large" />
            <Typography className="fw-bold fs-3">{13}</Typography>
            <Typography className="text-center px-2 fw-bold">
              Waliotumia leo
            </Typography>
          </div>
        </Card>
        <Card
          sx={{
            width: 200,
            height: 190,
            borderRadius: "15px",
            backgroundColor: "rgba(184, 184, 0, 0.4)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 40,
            }}
          >
            <Money fontSize="large" />
            <Typography className="fw-bold fs-3">{216}</Typography>
            <Typography className="text-center px-2 fw-bold">
              Waliokamilisha ahadi wiki hii
            </Typography>
          </div>
        </Card>
        <Card
          sx={{
            width: 200,
            height: 190,
            borderRadius: "15px",
            backgroundColor: "rgba(184, 34, 0, 0.4)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 40,
            }}
          >
            <PersonAdd fontSize="large" />
            <Typography className="fw-bold fs-3">{3}</Typography>
            <Typography className="text-center px-2 fw-bold">Wapya</Typography>
          </div>
        </Card>
      </div>
    </Box>
  );
}

export default Nyumbani;
