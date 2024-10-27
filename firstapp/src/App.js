import "./App.css";
import Header from "./Header";
import Product from "./Product";
import Products_list from "./Products_list";
import { useState } from "react";

function App() {
  // function doSomething(data) {
  //   return console.log("Hello I am clicked" + data);
  // }
  let [name, setName] = useState();
  let [age, setAge] = useState();

  let countries = [
    { id: 1, name: "India", capital: "New Delhi" },
    { id: 2, name: "South Africa", capital: "Cape Town" },
    { id: 3, name: "New Zealand", capital: "Wellington" },
    { id: 4, name: "USA", capital: "Washington DC" },
  ];

  return (
    <div className="App">
      {countries.map((country) => {
        return (
          <div className="data" key={country.id}>
            <h3>{countries.name}</h3>
            <p>{countries.capital}</p>
          </div>
        );
      })}
      {/* <h1>Product Name</h1> */}

      {/* <input
        type="text"
        placeholder="Enter Name"
        onChange={(event) => {
          setName(event.target.value);
        }}
      ></input>
      <input
        type="number"
        placeholder="Enter Age"
        onChange={(event) => {
          setAge(event.target.value);
        }}
      ></input>

      <button
        type="button"
        onClick={() => {
          console.log(name, age);
        }}
      >
        Submit
      </button> */}

      <Header />
      <Products_list />

      {/* <button
        className="btn"
        onClick={(event) => {
          console.log(event);
          doSomething("Dhruv");
        }}
      >
        Click
      </button> */}
    </div>
  );
}

export default App;
