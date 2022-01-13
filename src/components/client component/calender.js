import React from "react";

const Calender = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((menuItem) => {
        const { id, month, week_1, week_2, week_3, week_4 } = menuItem;
        return (
          <div key={id} className="menu-item">
            <table className="table overflow-hidden">
              <tbody>
                <tr>
                  <td>
                    <h3 className="text-center">{month}</h3>
                    <table className="table">
                      <tbody>
                        <tr>
                          <th>Wiki 1</th>
                          <th>wiki 2</th>
                          <th>wiki 3</th>
                          <th>wiki 4</th>
                        </tr>
                        <tr>
                          <td>{week_1}</td>
                          <td>{week_2}</td>
                          <td>{week_3}</td>
                          <td>{week_4}</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
};

export default Calender;
