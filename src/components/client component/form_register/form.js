import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import { elct } from "../../utils/images";
import Form1 from "./forms/form 1";
import Form2 from "./forms/form 2";
import Form3 from "./forms/form 3";
import Form4 from "./forms/form 4";
import Form5 from "./forms/form 5";
import Form6 from "./forms/form 6";
import Form7 from "./forms/form 7";
import Form8 from "./forms/form 8";

function Forms() {
  let [curr_form, setCurr_form] = useState(1);
  let navigate = useNavigate();

  const Separator = {
    backgroundColor: "rgba(76, 11, 197, 0.2)",
    width: "100%",
    height: "1px",
    margin: "20px 0",
  };
  const handleGoback = () => {
    navigate("/login");
  };

  const nextForm = () => {
    setCurr_form((curr_form += 1));
  };
  const prevForm = () => {
    setCurr_form((curr_form -= 1));
  };
  return (
    <div className="container">
      <div className="p-3 d-flex justify-content-between">
        <div className="d-flex">
          <img width="50px" height="50px" src={elct} alt="kkkt" />
          <h5 className="tbt">KKKT TABATA SHULE</h5>
        </div>
        <div>
          <button type="button" className="ondoka-btn" onClick={handleGoback}>
            Ghairisha
          </button>
        </div>
      </div>
      <div className="card my-3 shadow">
        <div className="p-4">
          {
            {
              1: <Form1 separator={Separator} nextform={nextForm} />,
              2: <Form2 nextform={nextForm} />,
              3: <Form3 separator={Separator} nextform={nextForm} />,
              4: <Form4 separator={Separator} nextform={nextForm} />,
              5: <Form5 separator={Separator} nextform={nextForm} />,
              6: <Form6 separator={Separator} nextform={nextForm} />,
              7: <Form7 separator={Separator} nextform={nextForm} />,
              8: <Form8 separator={Separator} />,
            }[curr_form]
          }
        </div>
        <div className="d-flex justify-content-around mb-5">
          {curr_form === 1 ? (
            ""
          ) : (
            <button className="btn btn-info" onClick={prevForm}>
              iliyopita
            </button>
          )}
          {curr_form === 8 ? (
            ""
          ) : (
            <button className="btn btn-info" onClick={nextForm}>
              inayofuata
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Forms;
