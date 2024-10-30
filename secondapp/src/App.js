import { useEffect, useState, useSyncExternalStore } from "react";
import "./App.css";
import Product from "./product";

function App() {
  // let [productVisible, setProductVisible] = useState(false);

  let [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      {/* <h1> Welcome</h1>
      <button
        onClick={() => {
          setProductVisible(true);
        }}
      >
        Show Product
      </button>
      {productVisible === true ? <Product /> : null}
      <button
        onClick={() => {
          setProductVisible(false);
        }}
      >
        Hide Product
      </button> */}
      {users.map((user) => {
        return (
          <div className="user">
            <h1>{user.name}</h1>
            <p>{user.username}</p>
            <p>{user.website}</p>
          </div>
        );
      })}{" "}
    </div>
  );
}

export default App;
