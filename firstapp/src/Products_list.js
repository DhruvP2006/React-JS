import Product from "./Product";
import pic1 from "./chair-1.jpg";
import pic2 from "./chair-2.jpg";
import pic3 from "./chair-3.jpg";
function products_list() {
  let product = [
    { id: 1, name: "Levis Jeans", price: 2000, url: pic1 },
    { id: 2, name: "Samsung M51", price: 34000, url: pic2 },
    { id: 3, name: "Dell Monitor", price: 10000, url: pic3 },
  ];
  return (
    <div className="products">
      {product.map((product) => {
        return (
          <Product
            name={product.name}
            price={product.price}
            url={product.url}
            key={product.id}
          />
        );
      })}
    </div>
  );
}

export default products_list;
