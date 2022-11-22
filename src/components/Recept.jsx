import React, { useEffect, useState } from "react";
import Receipts from "./food/Receipts";

const APIKEY = "27173db733ae473fbe67ecfd466f2d62";

export default function Recept() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?query=pasta&maxFat=25&number=2&apiKey=${APIKEY}`
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response.results);
        setMenu(response.results);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container">
      <div className="row">
        {menu.map((menuItem) => (
          <Receipts {...menuItem} />
        ))}
      </div>
    </div>
  );
}
