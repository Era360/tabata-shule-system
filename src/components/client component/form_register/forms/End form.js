import React from "react";
import { CheckLg } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { elct } from "../../../utils/images";

function EndForm() {
  let navigate = useNavigate();
  const handleLogin = () => {
    navigate("/");
  };

  return (
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="card shadow my-5">
        <div className="d-flex flex-column align-items-center my-3 pb-1">
          <img width="80px" height="80px" src={elct} alt="" />
          <span className="h4 fw-bold mb-0">KKKT TABATA SHULE</span>
        </div>
        <div className="text-center h5 p-5">
          <div>
            Umefanikiwa kujaza fomu nzima ya kujiunga na usharika wa Tabata
            Shule
          </div>
          <div> Taarifa zako zimeshahifadhiwa </div>
          <div>
            <button
              type="button"
              className="btn btn-success m-3"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              title="Nashukuru"
              onClick={handleLogin}
            >
              <CheckLg size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EndForm;
