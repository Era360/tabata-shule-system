import React, { useState } from "react";
import { PlusLg } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

function Form8({ separator }) {
  let navigate = useNavigate();
  const [data, setData] = useState({
    1: ["Jengo", null],
    2: ["Uwakili", null],
    3: ["Ahadi nyingine", null],
  });
  const [form_success, setSuccess] = useState(false);

  const handleadd = (e) => {
    e.preventDefault();
    // var new_Length = Object.keys(data).length + 1;
    let object = {};
    const form_data = new FormData(e.target);
    form_data.forEach((value, key) => (object[key] = value));
    setData({
      1: ["Jengo", object["jengo_amount"]],
      2: ["Uwakili", object["uwakili_amount"]],
      3: ["Ahadi nyingine", object["nyingine_amount"]],
      // [new_Length]: [object["jengo_amount"], object["uwakili_amount"]],
    });
    var form = e.target;
    form.reset();
    setSuccess(true);
  };

  const handlesubmit = () => {
    navigate("/endform");
  };

  const HandleAdd = () => {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Na.</th>
            <th scope="col">Jina la ahadi</th>
            <th scope="col">Kiasi kwa mwaka </th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(data).map((item) => (
            <tr key={item[0]}>
              <th scope="row">{item[0]}</th>
              <td>{item[1][0]}</td>
              <td>{item[1][1]}</td>
              <td>{item[1][2]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  return (
    <>
      <div className="h5 text-center mb-4">
        F. AHADI YAKO KWA BWANA MWAKA 2022
      </div>
      <HandleAdd />
      <form onSubmit={handleadd}>
        <div className="shadow card p-4 col">
          <div className="h4">Jengo</div>

          <div className="input-group form-outline mb-3">
            <span className="input-group-text" id="basic-addon1">
              Tshs.
            </span>
            <input
              type="number"
              name="jengo_amount"
              required
              className="form-control"
              placeholder="Kiasi"
            />
          </div>

          <div className="h4">Uwakili</div>

          <div className="form-outline input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Tshs.
            </span>
            <input
              type="number"
              name="uwakili_amount"
              required
              className="form-control"
              placeholder="Kiasi"
            />
          </div>

          <div className="h4">Ahadi nyingine (kama ipo)</div>
          <div className="form-outline input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Tshs.
            </span>
            <input
              type="number"
              name="nyingine_amount"
              className="form-control"
              placeholder="Kiasi"
            />
          </div>

          <div>
            <button
              type="submit"
              className="btn btn-primary"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Bonyeza kuongeza ahadi mpya"
            >
              <PlusLg size={25} className="" />
            </button>
          </div>
        </div>

        <div style={separator}></div>

        <fieldset className="row">
          <div className="col-form-label col-sm-4 h5">
            Je, una namba ya Ahadi?
          </div>
          <div className="col-sm-8">
            <div className="row">
              <div className="form-check col-sm-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="ahadi_no"
                  required
                  id="gridRadios1"
                  value="Ndiyo"
                />
                <label className="form-check-label" htmlFor="gridRadios1">
                  Ndiyo
                </label>
              </div>
              <div className="col-sm-10">
                <div className="row">
                  <label className="col">Tarehe ya kujaza/kurudisha fomu</label>
                  <input
                    type="date"
                    name="fomu_date"
                    className="form-control col"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="form-check col-sm-2">
                <div className="col">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="ahadi_no"
                    required
                    id="gridRadios2"
                    value="Hapana"
                  />
                  <label className="form-check-label" htmlFor="gridRadios2">
                    Hapana
                  </label>
                </div>
              </div>
              <div className="col-sm-10">
                <label className="">Jina (Msharika)</label>
                <input
                  type="text"
                  name="no_jointing_reason"
                  required
                  className="form-control"
                />
              </div>
            </div>
          </div>
        </fieldset>
        {form_success ? (
          <div className="alert alert-success" role="alert">
            umefanikiwa kukusanya taarifa zako zote
          </div>
        ) : (
          ""
        )}
        {form_success ? (
          <div className="d-flex justify-content-around py-4">
            <button
              type="button"
              className="btn btn-success"
              onClick={handlesubmit}
            >
              Maliza
            </button>
            {/* <button className="btn btn-warning">Endelea siku nyingine</button> */}
          </div>
        ) : (
          <div className="text-center py-4">
            <button type="submit" className="ondoka-btn">
              Kusanya
            </button>
          </div>
        )}
      </form>
    </>
  );
}

export default Form8;
