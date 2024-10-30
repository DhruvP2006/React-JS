export default function News(props) {
  console.log(props);
  return (
    <div className="news">
      <div className="news-img">
        {props.article.urlToImage !== null ? (
          <img src={props.article.urlToImage}></img>
        ) : (
          <img src="https://www.nism.ac.in/wp-content/themes/nism/images/no-image-available.png"></img>
        )}
      </div>
      <h1>{props.article.title}</h1>
      <p>
        {props.article.description?.substring(0, 100).concat("....")}
        <a href={props.article.url} target="blank">
          Read More
        </a>
      </p>

      <div className="source">
        <p>Author: {props.article.author}</p>
        <p>{props.article.source.name}</p>
      </div>
    </div>
  );
}
