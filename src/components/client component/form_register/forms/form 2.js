import React, { useState } from "react";
import { PlusLg } from "react-bootstrap-icons";

function Form2({ nextform, prevform }) {
  const [data, setData] = useState({});
  const [form_success, setSuccess] = useState(false);

  const handleadd = (e) => {
    e.preventDefault();
    var new_Length = Object.keys(data).length + 1;
    let object = {};
    const form_data = new FormData(e.target);
    form_data.forEach((value, key) => (object[key] = value));
    setData({
      ...data,
      [new_Length]: [
        object["jina"],
        object["tarehe_kuzaliwa"],
        object["uhusiano"],
      ],
    });
    var form = e.target;
    form.reset();
  };

  const handlesubmit = () => {
    setSuccess(true);
  };

  const HandleAdd = () => {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Na.</th>
            <th scope="col">Jina kamili</th>
            <th scope="col">Tarehe ya kuzaliwa</th>
            <th scope="col">Uhusiano</th>
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
        Watoto/Waumini wanaokutegemea (mfano: wasio na bahasha na wapo chini ya
        usimamizi wako)
      </div>
      <HandleAdd />
      {form_success ? (
        <div className="alert alert-success" role="alert">
          umefanikiwa kukusanya taarifa tafadhali endelea kujaza fomu
        </div>
      ) : (
        ""
      )}
      {form_success ? (
        <div className="py-3">
          <button className="btn btn-success" onClick={nextform}>
            Endelea kujaza
          </button>
        </div>
      ) : (
        <div className="text-center p-3">
          <button onClick={handlesubmit} className="ondoka-btn">
            Kusanya
          </button>
        </div>
      )}
      <div className="card shadow p-4">
        <form onSubmit={handleadd}>
          <div className="col">
            <div className="row mb-3">
              <input
                type="text"
                name="jina"
                required
                className="form-control"
                placeholder="Jina kamili"
              />
            </div>
            <div className="row mb-3">
              <div className="row">
                <label className="col">Tarehe ya kuzaliwa</label>
                <input
                  type="date"
                  name="tarehe_kuzaliwa"
                  required
                  className="form-control col"
                  placeholder="Tarehe ya kuzaliwa"
                />
              </div>
            </div>
            <div className="row mb-3">
              <input
                type="text"
                name="uhusiano"
                required
                className="form-control"
                placeholder="Uhusiano"
              />
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Bonyeza kuongeza mtu uliyemjaza"
          >
            <PlusLg size={25} className="" />
          </button>
        </form>
      </div>
    </>
  );
}

export default Form2;
