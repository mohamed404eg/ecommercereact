import React from "react";

import style from "./MenuSecond.css";
import MenuSecondLi from "./MenuSecondLi";
import { useEffect } from "react";

import axios from "axios";
import { useState } from "react";

function MenuSecond() {
  let [MenuSecondData, setMenuSecondData] = useState([]);
  let menuMAP;
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL_API}menu-seconds?populate=*`)
      .then(function (response) {
        setMenuSecondData(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  menuMAP = MenuSecondData.map((person) => {
    if (person.attributes.dropdown) {
      return (
        <MenuSecondLi
          key={person.id}
          Dropdown={person.attributes.dropdown}
          children={person.attributes.name}
          href={person.attributes.href}
          color={person.attributes.color}
          dropdownlis={person.attributes.dropdownlis.data}
          categoty={person.attributes.categoty}
        />
      );
    } else {
      return (
        <MenuSecondLi
          key={person.id}
          id={person.id}
          Dropdown={person.attributes.dropdown}
          children={person.attributes.name}
          href={person.attributes.href}
          color={person.attributes.color}
          categoty={person.attributes.categoty}
        />
      );
    }
  });

  return (
    <>
      <div className="MenuSecondTop">
        <div className="MenuSecond container">
          <nav>
            <ul className="MenuSecond-ul">{menuMAP}</ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default MenuSecond;
