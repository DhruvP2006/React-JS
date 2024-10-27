import { useState } from "react";

function Product(props) {
  console.log(props);
  let [isAvailabe, setIsAvailable] = useState("yes");

  // function makeNotAvailable() {
  //   setIsAvailable("No");
  // }

  return (
    <div className="product">
      <img className="img" src={props.url} />
      <h3>{props.name}</h3>
      <p>Rs. {props.price}</p>
      <p>{isAvailabe}</p>
      <button
        onClick={() => {
          setIsAvailable("No");
        }}
      >
        Click
      </button>
    </div>
  );
}

export default Product;
