import { EmailOutlined, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Container,
  TextField,
  Typography,
  Button,
  Grid,
  InputAdornment,
  FormControl,
  InputLabel,
  OutlinedInput,
  IconButton,
  Alert,
} from "@mui/material";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { elct } from "../images";

function Register() {
  const [values, setValues] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    showPassword: false,
  });
  const [loading, setLoading] = useState(false);

  const firstnameRef = useRef(null);
  const lastnameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  //   const { signup, error } = useAuth();
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    // console.log(emailRef.current.value);
    // console.log(passwordRef.current);
    try {
      setErrorMessage("");
      setLoading(true);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );
      // Signed in
      const user = userCredential.user;
      console.log(user.email);
    } catch (error) {
      //   const errorCode = error.code;
      const errorMessage = error.code;
      setErrorMessage({ error: errorMessage });
      // setError("Imeshindikana kutengeneza akaunti");
    }
    setLoading(false);
  }

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img src={elct} width={80} alt="Picha ya elct" className=" mt-3 " />
        <Typography component="h1" variant="h4">
          KKKT USHARIKA WA TABATA SHULE
        </Typography>
        {errorMessage && (
          <Alert severity="error" sx={{ width: "50%" }}>
            {errorMessage}
          </Alert>
        )}

        {/* Form ya kujiunga na KKKT */}
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ width: "50%", m: 3, textAlign: "center" }}
        >
          <Grid container direction="column">
            <Grid container columnSpacing={2}>
              <Grid item xs={6}>
                <TextField
                  name="firstname"
                  label="Jina lako la kwanza"
                  required
                  fullWidth
                  inputRef={firstnameRef}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Jina la pili"
                  fullWidth
                  required
                  name="lastname"
                  inputRef={lastnameRef}
                />
              </Grid>
            </Grid>
            <FormControl fullWidth sx={{ mt: 2 }}>
              <InputLabel htmlFor="outlined-adornment-amount">Email</InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                required
                type="email"
                inputRef={emailRef}
                value={values.email}
                onChange={handleChange("email")}
                startAdornment={
                  <InputAdornment position="start">
                    <EmailOutlined />
                  </InputAdornment>
                }
                label="Email"
              />
            </FormControl>
            <FormControl fullWidth sx={{ mt: 2 }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                required
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                inputRef={passwordRef}
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
          </Grid>
          <Grid container direction="column">
            <Grid item xs>
              <Button
                type="submit"
                disabled={loading}
                variant="contained"
                sx={{ my: 2 }}
              >
                Jiunge
              </Button>
            </Grid>
            <Grid item>
              <Grid container>
                <Grid item xs>
                  <Link to="/login">Nina akaunti</Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default Register;
