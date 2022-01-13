import React, { useState } from "react";

function Form1({ separator, nextform }) {
  const [form_success, setSuccess] = useState(false);

  const handleFormSubmission = (e) => {
    e.preventDefault();
    const form_data = new FormData(e.target);
    let object = {};
    form_data.forEach((value, key) => (object[key] = value));

    setSuccess(true);
  };
  return (
    <>
      <div className="text-center h5 py-3">A. TAARIFA BINAFSI</div>
      <form onSubmit={handleFormSubmission}>
        <div className="row">
          <label htmlFor="inputName" className="col-sm-2 col-form-label">
            1. Jina la msharika
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              name="msharika"
              required
              className="form-control"
              id="inputName"
            />
          </div>
        </div>

        <div style={separator}></div>

        <fieldset className="row">
          <div className="col-form-label col ">2. Jinsi</div>
          <div className="col">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="jinsi"
                required
                id="gridRadios1"
                value="me"
              />
              <label className="form-check-label" htmlFor="gridRadios1">
                me
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="jinsi"
                required
                id="gridRadios2"
                value="ke"
              />
              <label className="form-check-label" htmlFor="gridRadios2">
                ke
              </label>
            </div>
          </div>
        </fieldset>

        <div style={separator}></div>

        <div className="row">
          <div className="col">
            <label>3. Tarehe ya kuzaliwa</label>
            <input
              type="date"
              name="tarehe_kuzaliwa"
              className="form-control"
              placeholder="Tarehe ya kuzaliwa"
            />
          </div>
          <div className="col">
            <label>4. Mahali ulipozaliwa</label>
            <input type="text" name="mahali_kuishi" className="form-control" />
          </div>
        </div>

        <div style={separator}></div>

        <div className="row ">
          <div className="col ">5. Hali ya ndoa</div>
          <div className="col">
            <select
              className="form-select col"
              name="hali_ya_ndoa"
              defaultValue="Umeoa"
              required
            >
              <option value="Umeoa">Umeoa </option>
              <option value="Hujaoa">Hujaoa</option>
              <option value="Umeolewa">Umeolewa</option>
              <option value="Hujaolewa">Hujaolewa</option>
              <option value="Mjane">Mjane</option>
              <option value="Talikiwa">Talikiwa</option>
              <option value="Tengana">Tengana</option>
            </select>
            <fieldset className="row mb-3">
              <div className="col-form-label col">kama Mjane</div>
              <div className="col">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="jinsi_mjane"
                    id="gridRadios3"
                    value="mjane me"
                  />
                  <label className="form-check-label" htmlFor="gridRadios3">
                    me
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="jinsi_mjane"
                    id="gridRadios4"
                    value="mjane ke"
                  />
                  <label className="form-check-label" htmlFor="gridRadios4">
                    ke
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
        </div>

        <div style={separator}></div>

        <div className="row ">
          <div className="col-3">6. Aina ya ndoa</div>
          <div className="col-9">
            <div className="row">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="ndoa"
                  id="ndoa1"
                  value="ndoa ya kikristo"
                />
                <label className="form-check-label" htmlFor="ndoa1">
                  ndoa ya kikristo
                </label>
              </div>
              <div className="m-auto">
                <label className="col ">Tarehe ya kufunga ndoa</label>
                <input
                  type="date"
                  name="tarehe_ndoa"
                  className="form-control col"
                />
              </div>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="ndoa"
                id="ndoa2"
                value="ndoa si kikristo"
              />
              <label className="form-check-label" htmlFor="ndoa2">
                Si ya kikristo
              </label>
            </div>
          </div>
        </div>

        <div style={separator}></div>

        <div className="row">
          <label htmlFor="inputName" className="col-sm-4 col-form-label">
            7. Jina la mwenzi(kama umeoa/umeolewa)
          </label>
          <div className="col-sm-8">
            <input
              type="text"
              name="jina_la_mwenzi"
              className="form-control"
              id="inputName"
            />
          </div>
        </div>

        <div style={separator}></div>

        <div>
          <div>8. Mahali pa kufungia ndoa</div>
          <div className="row">
            <div className="col">
              <label htmlFor="inputName" className="col-sm-4 col-form-label">
                jina
              </label>
              <div className="col-sm-8">
                <input
                  type="text"
                  name="jina_la_sehemu_ya_ndoa"
                  className="form-control"
                  id="inputName"
                />
              </div>
            </div>
            <div className="col">
              <label htmlFor="inputName" className="col-sm-4 col-form-label">
                mkoa
              </label>
              <div className="col-sm-8">
                <input
                  type="text"
                  name="mkoa_wa_ndoa"
                  className="form-control"
                  id="inputName"
                />
              </div>
            </div>
          </div>
        </div>

        <div style={separator}></div>

        <div className="row">
          <label htmlFor="inputName" className="col-sm-4 col-form-label">
            9. Kama unaishi na mtu bila ndoa ya kikristo, jina la unayeishi
          </label>
          <div className="col-sm-8">
            <input
              type="text"
              name="jina_la_ndoa_sihalali"
              className="form-control"
              id="inputName"
            />
          </div>
        </div>

        <div style={separator}></div>
        {form_success ? (
          <div className="alert alert-success" role="alert">
            umefanikiwa kukusanya taarifa binafsi tafadhali endelea kujaza fomu
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

export default Form1;
