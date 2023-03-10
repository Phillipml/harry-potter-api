import React, { useEffect, useState } from "react";
import CharactersCard from "../charactersCard/charactersCard";

function Characters() {
  const [data, setData] = useState([]);
  const getData = () => {
    fetch("characters.json", {
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (characters) {
        // console.log(characters);
        setData(characters);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <CharactersCard />{" "}
    </div>
  );
}
export default Characters;
