import React, { useEffect, useState } from "react";
import Receipts from "./food/Receipts";

// const APIKEY = "27173db733ae473fbe67ecfd466f2d62";
// const url = `https://api.spoonacular.com/recipes/complexSearch?query=pasta&maxFat=25&number=2&apiKey=${APIKEY}`;
const URL = "https://api-foodrecipes.azurewebsites.net/recipes";

const requestOptions = {
  // mode: "no-cors",
  method: "GET",
  // redirect: "follow",
  // headers: {
  //   "Access-Control-Allow-Origin": "*",
  // },
};

export default function Recept() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch(URL, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setMenu(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="flex">
      <div className="flex gap-8">
        {menu.map((menuItem) => (
          <Receipts {...menuItem} />
        ))}
      </div>
    </div>
  );
}
