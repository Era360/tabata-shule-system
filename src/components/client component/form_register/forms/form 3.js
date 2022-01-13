import React, { useState } from "react";

function Form3({ separator, nextform }) {
  const [form_success, setform_Success] = useState(false);

  const handleFormSubmission = (e) => {
    e.preventDefault();
    setform_Success(true);
  };
  return (
    <>
      <div className="text-center h5 py-3">B. MAWASILIANO NA MAKAZI</div>
      <form onSubmit={handleFormSubmission}>
        <div className="row">
          <div className="col">
            <label className=" col-form-label">1. Namba yako ya simu</label>
            <input
              type="tel"
              name="phone_no"
              required
              className="form-control"
              id="inputName"
            />
          </div>
          <div className="col">
            <label className="col-form-label">2. Namba ya simu(mwenzi)</label>
            <input
              type="tel"
              name="phone_no_love"
              className="form-control"
              id="inputName"
            />
          </div>
        </div>

        <div style={separator}></div>

        <div className="row">
          <div className="col">
            <div className="row">
              <div className="col-sm-1">3.</div>
              <div className="col-sm-11 ">
                <label className="col-form-label">
                  Sanduku la barua (P.O Box)
                </label>
                <input
                  type="number"
                  name="p_o_box"
                  className="form-control"
                  id="inputName"
                />
                <label className=" col-form-label">Baruapepe (Email)</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="inputName"
                />
              </div>
            </div>
          </div>
          <div className="col">
            <label className="col-form-label">4. Namba ya Nyumba</label>
            <div className="">
              <input
                type="number"
                name="house_no"
                className="form-control"
                id="inputName"
              />
            </div>
          </div>
        </div>

        <div style={separator}></div>

        <div className="row">
          <div className="col">
            <label className="col-form-label">5. Jina la eneo unaloishi</label>
            <input
              type="text"
              name="residence"
              className="form-control"
              id="inputName"
            />
          </div>
          <div className="col">
            <label className="col-form-label">6. Block no</label>
            <input
              type="number"
              name="residence_no"
              className="form-control"
              id="inputName"
            />
          </div>
        </div>

        <div style={separator}></div>

        <div className="row">
          <div className="col">
            <label className="col-form-label">7. Usharika wako wa zamani</label>
            <input
              type="text"
              name="past_church"
              className="form-control"
              id="inputName"
            />
          </div>
          <div className="col">
            <label className="col-form-label">8. Jina la fellowship yako</label>
            <input
              type="text"
              name="fellowship"
              className="form-control"
              id="inputName"
            />
          </div>
        </div>

        <div style={separator}></div>

        <div className="row">
          <div className="col">
            <label className="col-form-label">9. Jina la msharika jirani</label>
            <input
              type="text"
              name="neighbour_church_member"
              className="form-control"
              id="inputName"
            />
          </div>
          <div className="col">
            <label className="col-form-label">10. Jirani (simu)</label>
            <input
              type="tel"
              name="neighbour_phone_no"
              className="form-control"
              id="inputName"
            />
          </div>
        </div>

        <div style={separator}></div>

        <div className="row">
          <div className="col">
            <label className="col-form-label">
              11. Jina la mzee wa kanisa eneo unaloishi
            </label>
            <input
              type="text"
              name="neighbour_church_mzee"
              className="form-control"
              id="inputName"
            />
          </div>
          <div className="col">
            <label className="col-form-label">12. Simu ya mzee wa kanisa</label>
            <input
              type="tel"
              name="neighbour_church_mzee_phone_no"
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
    </>
  );
}

export default Form3;
