import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Container,
  TextField,
  Typography,
  Button,
  Grid,
  InputAdornment,
  IconButton,
  Alert,
} from "@mui/material";
import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { elct } from "../images";
// import { useAuth } from "../context/AuthContext";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
    email: "",
    password: "",
    showPassword: false,
  });
  let navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  // const { login } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    // console.log(emailRef.current.value);
    // console.log(passwordRef.current);
    try {
      setLoading(true);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );
      // Signed in
      const user = userCredential.user;
      console.log(user.email);
      navigate("/");
      // ...
    } catch (error) {
      const errorCode = error.code;
      setError({ error: errorCode });
      // const errorMessage = error.message;
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
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxShadow: 5,
        }}
      >
        <Typography
          variant="h5"
          className="text-center mt-4 text-decoration-underline fw-bold"
        >
          KKKT USHARIKA WA TABATA SHULE
        </Typography>
        <img src={elct} width={80} alt="Picha ya elct" className=" mt-3 " />
        {error.error && (
          <Alert severity="error" sx={{ width: "100%" }}>
            {error.error}
          </Alert>
        )}
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ m: 4, textAlign: "center" }}
        >
          <TextField
            label="Email au namba ya simu"
            fullWidth
            margin="normal"
            required
            id="email"
            name="email"
            onChange={handleChange("email")}
            inputRef={emailRef}
          />
          <TextField
            name="password"
            label="Ingiza nywila yako"
            fullWidth
            required
            margin="normal"
            type={values.showPassword ? "text" : "password"}
            onChange={handleChange("password")}
            inputRef={passwordRef}
            InputProps={{
              endAdornment: (
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
              ),
            }}
          />
          <Button
            type="submit"
            disabled={loading}
            variant="contained"
            sx={{ my: 2 }}
          >
            Sign in
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to="/signup">Umesahau nywila?</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default Login;
