import React, { useState } from "react";

function Form7({ separator, nextform }) {
  const [form_success, setform_Success] = useState(false);

  const handleFormSubmission = (e) => {
    e.preventDefault();
    setform_Success(true);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmission}>
        <div className="text-center h5 py-3">
          Je, Umejiunga au Unapenda kujiunga na Huduma gani hapa usharikani?
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            1. Fellowship
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckChecked"
          />
          <label className="form-check-label" htmlhtmlFor="flexCheckChecked">
            2. Kufundisha Shule ya Jumapili (Sunday School)
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlhtmlFor="flexCheckDefault">
            3. Kutembelea Wagonjwa
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlhtmlFor="flexCheckDefault">
            4. Bible Study
          </label>
        </div>

        <div style={separator}></div>

        <div className="row">
          <div className="col-sm-2 h6">5. Kwaya/ya</div>
          <div className="col-sm-10">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox1"
                value="Kuu"
              />
              <label className="form-check-label" htmlFor="inlineCheckbox1">
                Kuu
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox2"
                value="Uinjilisti/Uamsho"
              />
              <label className="form-check-label" htmlFor="inlineCheckbox2">
                Uinjilisti/Uamsho
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox3"
                value="Tarumbeta"
              />
              <label className="form-check-label" htmlFor="inlineCheckbox3">
                Tarumbeta
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox3"
                value="Wanawake"
              />
              <label className="form-check-label" htmlFor="inlineCheckbox3">
                Wanawake
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox3"
                value="Vijana"
              />
              <label className="form-check-label" htmlFor="inlineCheckbox3">
                Vijana
              </label>
            </div>
          </div>
        </div>

        <div style={separator}></div>

        <div className="row">
          <div className="col-sm-2 h6">6. Umoja/wa</div>
          <div className="col-sm-10">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="umoja"
                id="inlineCheckbox1"
                value="Wanawake"
              />
              <label className="form-check-label" htmlFor="inlineCheckbox1">
                Wanawake
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="umoja"
                id="inlineCheckbox2"
                value="Vijana"
              />
              <label className="form-check-label" htmlFor="inlineCheckbox2">
                Vijana
              </label>
            </div>
          </div>
        </div>

        <div style={separator}></div>
        {form_success ? (
          <div className="alert alert-success" role="alert">
            umefanikiwa kukusanya taarifa tafadhali malizia kujaza fomu
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

export default Form7;
