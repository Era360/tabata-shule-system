import React, { useState } from "react";

function Form6({ separator, nextform }) {
  const [form_success, setform_Success] = useState(false);

  const handleFormSubmission = (e) => {
    e.preventDefault();
    setform_Success(true);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmission}>
        <div className="text-center h5 py-3">
          E. USHIRIKI WA HUDUMA ZA KANISA NA VIKUNDI
        </div>
        <fieldset className="row">
          <div className="col-form-label col-sm-4 ">
            Je, unashiriki Ibada za Nyumba kwa Nyumba[Fellowship]?
          </div>
          <div className="col-sm-8">
            <div className="row">
              <div className="form-check col-sm-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="jointing"
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
                  <label className="col">Jina la Nyumba kwa nyumba</label>
                  <input
                    type="text"
                    name="jointing_name"
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
                    name="jointing"
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
                <div className="row">
                  <label className="col-sm-2">Sababu ya kutoshirki</label>
                  <input
                    type="text"
                    name="no_jointing_reason"
                    className="form-control col-sm-10"
                  />
                </div>
              </div>
            </div>
          </div>
        </fieldset>

        <div style={separator}></div>

        <div className="row">
          <label htmlFor="inputName" className="col-sm-4 col-form-label">
            Jina la Mwenyekiti wa Nyumba kwa Nyumba
          </label>
          <div className="col-sm-8">
            <input
              type="text"
              name="jointing_leader_name"
              className="form-control"
              id="inputName"
            />
          </div>
        </div>

        <div style={separator}></div>

        <div className="row">
          <label htmlFor="inputName" className="col-sm-4 col-form-label">
            Saini ya Mwenyekiti wa Nyumba kwa Nyumba & Simu
          </label>
          <div className="col-sm-8">
            <input
              type="text"
              name="jointing_leader_phone_no"
              className="form-control"
              id="inputName"
            />
          </div>
        </div>

        <div style={separator}></div>
        {form_success ? (
          <div className="alert alert-success" role="alert">
            umefanikiwa kukusanya taarifa za mawasiliano tafadhali endelea
            kujaza fomu
          </div>
        ) : (
          ""
        )}

        {form_success ? (
          <div className="d-flex justify-content-around">
            <button className="btn btn-success" onClick={nextform}>
              Endelea kujaza
            </button>
            {/* <button className="btn btn-warning">Endelea siku nyingine</button> */}
          </div>
        ) : (
          <div className="text-center">
            <button type="submit" className="ondoka-btn">
              Kusanya
            </button>
          </div>
        )}
      </form>
    </div>
  );
}

export default Form6;
