import React, { useState } from "react";

function Form4({ separator, nextform }) {
  const [form_success, setform_Success] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setform_Success(true);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="text-center h5 py-3">C. ELIMU, FANI NA KAZI YAKO</div>
        <div className="row">
          <label htmlFor="inputName" className="col-sm-4 col-form-label">
            1. Kazi/Shughuli yako (Occupation)
          </label>
          <div className="col-sm-8">
            <input
              type="text"
              name="shughuli"
              required
              className="form-control"
              id="inputName"
            />
          </div>
        </div>

        <div style={separator}></div>

        <div className="row">
          <label htmlFor="inputName" className="col-sm-4 col-form-label">
            2. Mahali pa kazi(au kama ni mwanafunzi)
          </label>
          <div className="col-sm-8">
            <input
              type="text"
              name="work_location"
              required
              className="form-control"
              id="inputName"
            />
          </div>
        </div>

        <div style={separator}></div>

        <div className="row">
          <label htmlFor="inputName" className="col-sm-4 col-form-label">
            3. Elimu
          </label>
          <div className="col-sm-8">
            <input
              type="text"
              name="education"
              required
              className="form-control"
              id="inputName"
            />
          </div>
        </div>

        <div style={separator}></div>

        <div className="row">
          <label htmlFor="inputName" className="col-sm-4 col-form-label">
            4. Ujuzi/Fani(profession)
          </label>
          <div className="col-sm-8">
            <input
              type="text"
              name="profession"
              className="form-control"
              id="inputName"
            />
          </div>
        </div>

        <div style={separator}></div>

        <div className="row">
          <label htmlFor="inputName" className="col-sm-4 col-form-label">
            5. Je, ungependa kujitolea kutumika kanisani (ukizingatia #1, 3, 4
            juu)
          </label>
          <div className="col-sm-8">
            <input
              type="text"
              name="volunteer"
              className="form-control"
              id="inputName"
            />
          </div>
        </div>

        <div style={separator}></div>
        {form_success ? (
          <div className="alert alert-success" role="alert">
            umefanikiwa kukusanya taarifa za elimu, fani na kazi yako tafadhali
            endelea kujaza fomu
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

export default Form4;
