import React, { useState } from "react";

function Form5({ separator, nextform }) {
  const [form_success, setform_Success] = useState(false);

  const handleFormSubmission = (e) => {
    e.preventDefault();
    setform_Success(true);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmission}>
        <div className="text-center h5 py-3">D. HUDUMA ZA KIROHO</div>
        <fieldset className="row">
          <div className="col-form-label col-sm-4 ">1. Umebatizwa?</div>
          <div className="col-sm-8">
            <div className="row">
              <div className="form-check col">
                <input
                  className="form-check-input"
                  type="radio"
                  name="baptism"
                  required
                  id="gridRadios1"
                  value="Ndiyo"
                />
                <label className="form-check-label" htmlFor="gridRadios1">
                  Ndiyo
                </label>
              </div>
              <div className="col">
                <div className="row">
                  <label className="col">Tarehe ya kubatizwa</label>
                  <input
                    type="date"
                    name="baptism_date"
                    className="form-control col"
                  />
                </div>
              </div>
            </div>
            <div className="form-check row">
              <input
                className="form-check-input"
                type="radio"
                name="baptism"
                required
                id="gridRadios2"
                value="Hapana"
              />
              <label className="form-check-label" htmlFor="gridRadios2">
                Hapana
              </label>
            </div>
          </div>
        </fieldset>

        <div style={separator}></div>

        <fieldset className="row">
          <div className="col-form-label col-sm-4 ">
            2. Ulishapata kipaimara?
          </div>
          <div className="col-sm-8">
            <div className="row">
              <div className="form-check col">
                <input
                  className="form-check-input"
                  type="radio"
                  name="kipaimara"
                  required
                  id="gridRadios1"
                  value="Ndiyo"
                />
                <label className="form-check-label" htmlFor="gridRadios1">
                  Ndiyo
                </label>
              </div>
              <div className="col">
                <div className="row">
                  <label className="col">Tarehe ya kipaimara</label>
                  <input
                    type="date"
                    name="baptism_date"
                    className="form-control col"
                  />
                </div>
              </div>
            </div>
            <div className="form-check row">
              <input
                className="form-check-input"
                type="radio"
                name="kipaimara"
                required
                id="gridRadios2"
                value="Hapana"
              />
              <label className="form-check-label" htmlFor="gridRadios2">
                Hapana
              </label>
            </div>
          </div>
        </fieldset>

        <div style={separator}></div>

        <fieldset className="row">
          <div className="col-form-label col-sm-8 ">
            3. Unashiriki Sakramenti ya Meza ya Bwana?
          </div>
          <div className="col-sm-4">
            <div className="form-check row">
              <input
                className="form-check-input"
                type="radio"
                name="sakramenti"
                required
                id="gridRadios1"
                value="Ndiyo"
              />
              <label className="form-check-label" htmlFor="gridRadios1">
                Ndiyo
              </label>
            </div>
            <div className="form-check row">
              <input
                className="form-check-input"
                type="radio"
                name="sakramenti"
                required
                id="gridRadios2"
                value="Hapana"
              />
              <label className="form-check-label" htmlFor="gridRadios2">
                Hapana
              </label>
            </div>
          </div>
        </fieldset>

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

export default Form5;
