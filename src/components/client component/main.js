// import React, { useState } from "react";
// import Menu from "./UI/Menu";
import Categories from "./Categories";
import items from "./month_data";
import { elct } from "../images";
import Calender from "./calender";
import { useNavigate } from "react-router-dom";
// const months = ["all", ...new Set(items.map((item) => item.month))];
const vitu = ["Kadi", "Taarifa", "Ahadi"];

function Main(props) {
  // const [menuItems, setMenuItems] = useState(items);
  // const [categories, setCategories] = useState(allCategories);

  //   Function to filter a list of items

  // const filterItems = (category) => {
  //   if (category === "all") {
  //     setMenuItems(items);
  //     return;
  //   }
  //   const newItems = items.filter((item) => item.category === category);
  //   setMenuItems(newItems);
  // };
  let navigate = useNavigate();
  function Signout() {
    props.signout();
    navigate("/login");
  }

  return (
    <main>
      <div className="p-3 d-flex justify-content-between">
        <div className="d-flex">
          <img width="50px" height="50px" src={elct} alt="kkkt" />
          <h5 className="tbt">KKKT TABATA SHULE</h5>
        </div>
        <button type="button" className="ondoka-btn" onClick={Signout}>
          Ondoka
        </button>
      </div>

      <div className="px-2 h4">
        Karibu, <p>Ndugu {props.name}</p>
      </div>

      <Categories categories={vitu} />
      <Calender items={items} />
    </main>
  );
}

export default Main;
