import { useEffect, useState } from "react";
import "./App.css";
import News from "./News";

function App() {
  let [articles, setArticles] = useState([]);
  let [catagory, setCatagory] = useState("India");
  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/everything?q=${catagory}&from=2024-10-29&apiKey=6a043abb9eea4af6ab445a8f16c90905`
    )
      .then((response) => response.json())
      .then((news) => {
        setArticles(news.articles);
        console.log(news.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [catagory]);

  return (
    <div className="App">
      <header className="header">
        <h1>Parso Tak</h1>
        <input
          type="text"
          placeholder="Search News"
          onChange={(event) => {
            if (event.target.value !== "") {
              setCatagory(event.target.value);
            } else {
              setCatagory("India");
            }
          }}
        ></input>
        <input type="date"></input>
      </header>
      <section className="news-articles">
        {articles.length !== 0 ? (
          articles.map((article) => {
            return <News article={article} />;
          })
        ) : (
          <h3>No News Found for the Searched Text</h3>
        )}
      </section>
    </div>
  );
}

export default App;
