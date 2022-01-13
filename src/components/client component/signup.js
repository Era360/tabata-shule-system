import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "react-bootstrap-icons";
import { Link, useNavigate } from "react-router-dom";
import { elct, form1, form2 } from "../utils/images";

function SignUp() {
  let navigate = useNavigate();
  const [current, setCurrent] = useState(true);

  const changePic = () => {
    setCurrent(!current);
    console.log(current);
  };

  const goBack = () => {
    navigate("/login");
  };

  const Picture = () => {
    return (
      <>
        <div className="d-flex align-items-center justify-content-around my-4">
          <div className="h3 text-center">
            {current ? "Nenda ukurasa wa pili" : "rudi ukurasa wa kwanza"}
          </div>
          <button type="button" className="btn" onClick={changePic}>
            {current ? <ArrowRight size={40} /> : <ArrowLeft size={40} />}
          </button>
        </div>
        <img className="form_1" src={current ? form1 : form2} alt="" />
      </>
    );
  };

  return (
    <div>
      <div className="p-3 d-flex justify-content-between">
        <div className="d-flex">
          <img width="50px" height="50px" src={elct} alt="kkkt" />
          <h5 className="tbt">KKKT TABATA SHULE</h5>
        </div>
        <div>
          <Link to="/forms" style={{ textDecoration: "none" }}>
            Anza kujaza fomu
          </Link>
          {/* <button type="button" className="btn" onClick={goBack}>
            Anza kujaza fomu
          </button> */}
          <button type="button" className="ondoka-btn" onClick={goBack}>
            Ghairi
          </button>
        </div>
      </div>
      <div className="m-auto">
        <div className="alert alert-warning" role="alert">
          Unaweza kupitia form utakayo jaza kabla ya kuijaza
        </div>
        <div className="card shadow">
          <Picture />
        </div>
      </div>
    </div>
  );
}

export default SignUp;
