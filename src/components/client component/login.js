import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useRef, useState } from "react";
import { EyeFill, EyeSlashFill } from "react-bootstrap-icons";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { elct, pray1 } from "../utils/images";
// import { elct, pray1 } from "../images";

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [values, setValues] = useState({
    email: "",
    password: "",
    showPassword: false,
  });
  let navigate = useNavigate();

  const handleChange = (prop) => (e) => {
    setValues({ ...values, [prop]: e.target.value });
  };
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setLoading(true);
      await signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );
      navigate("/app");
    } catch (error) {
      const errorCode = error.code;
      setError(errorCode);
    }
    setLoading(false);
  }

  return (
    <section className="vh-100" style={{ backgroundColor: "#3f51b5" }}>
      <div className="container py-2 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="row">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src={pray1}
                    alt="login form"
                    className="img-fluid"
                    style={{ borderRadius: "1rem 0 0 1rem" }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <div className="d-flex flex-column align-items-center mb-3 pb-1">
                      <img width="80px" height="80px" src={elct} alt="" />
                      <span className="h4 fw-bold mb-0">KKKT TABATA SHULE</span>
                    </div>

                    <h5 className="fw-normal mb-3 pb-3 text-center">
                      Ingia kwenye akaunti yako
                    </h5>
                    {error !== "" ? (
                      <div className="alert alert-danger" role="alert">
                        {error}
                      </div>
                    ) : (
                      ""
                    )}
                    <form onSubmit={handleSubmit}>
                      <div className="form-outline mb-4">
                        <input
                          required
                          type="email"
                          id="email"
                          className="form-control form-control-lg"
                          name="email"
                          placeholder="Andika Email yako"
                          onChange={handleChange("email")}
                          ref={emailRef}
                        />
                      </div>
                      <div className="form-outline row mb-4">
                        <div className="input-group ">
                          <input
                            type={values.showPassword ? "text" : "password"}
                            id="password"
                            className="form-control form-control-lg"
                            name="password"
                            placeholder="Ingiza nywila yako"
                            onChange={handleChange("password")}
                            ref={passwordRef}
                          />
                          <button
                            type="button"
                            className="input-group-text"
                            onClick={handleClickShowPassword}
                          >
                            {values.showPassword ? (
                              <EyeSlashFill />
                            ) : (
                              <EyeFill />
                            )}
                          </button>
                        </div>
                      </div>

                      <div className="pt-1 text-center mb-4">
                        <button
                          disabled={loading}
                          className="btn btn-dark btn-lg btn-block"
                          type="submit"
                        >
                          Ingia
                        </button>
                      </div>

                      <a className="small text-muted" href="#!">
                        Umesahau nywila yako?
                      </a>
                      <p className="pb-lg-2" style={{ color: "#393f81" }}>
                        Unataka kujiunga na usharika?{" "}
                        <Link to="/signup" style={{ color: "#393f81" }}>
                          Jiunge hapa
                        </Link>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
