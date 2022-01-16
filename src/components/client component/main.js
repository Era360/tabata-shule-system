// import React, { useState } from "react";
// import Menu from "./UI/Menu";
import Categories from "./Categories";
import items from "./month_data";
import { elct } from "../utils/images";
import Calender from "./calender";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { getUserUid } from "../../context/AuthContext";
import { getCurrentUser, userIsAdmin } from "../utils/utils";
// const months = ["all", ...new Set(items.map((item) => item.month))];
const vitu = ["Kadi", "Taarifa", "Ahadi"];

function Main(props) {
  const [Error, setError] = useState("");
  const [showKiongozi, setshowKiongozi] = useState(false);
  const user = getUserUid();
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
  // console.log(getCurrentUser().uid);
  let result = userIsAdmin(getCurrentUser());
  console.log(result);
  useEffect(() => {
    setshowKiongozi(userIsAdmin(getCurrentUser()));
  }, []);

  async function Signout() {
    try {
      await signOut(auth);
      navigate("/login");
    } catch {
      setError("Imeshindikana kuondoka kwenye akaunti yako");
    }
    // navigate("/login");
  }

  return (
    <main>
      {showKiongozi ? (
        <div style={{ backgroundColor: "#262626" }}>
          <button className="kiongozi-btn" type="button">
            Kiongozi
          </button>
        </div>
      ) : null}
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
        Karibu, <p>Ndugu {user}</p>
      </div>
      {Error && (
        <div className="alert alert-danger" role="alert">
          {Error}
        </div>
      )}

      <Categories categories={vitu} />
      <Calender items={items} />
    </main>
  );
}

export default Main;
