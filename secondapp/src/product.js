import { useEffect, useState } from "react";
export default function Product() {
  let [name, setName] = useState("Dhruv");

  let [age, setAge] = useState(25);

  useEffect(() => {
    console.log("componnent rendered");
    return function () {
      console.log("unmounted");
    };
  }, [age]);
  return (
    <div className="product">
      <h3>Samsung M51</h3>
      <h2>{name}</h2>
      <button
        onClick={() => {
          setName("Thor");
        }}
      >
        Click
      </button>
      <h2>{age}</h2>
      <button
        onClick={() => {
          setAge(27);
        }}
      >
        Click
      </button>
    </div>
  );
}
