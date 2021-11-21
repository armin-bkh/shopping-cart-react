import { useState, useEffect } from "react";
// import { products } from "../../data";
import getProducts from "../../Services/getProducts";
import ProductItem from "./ProductItem/ProductItem";
import styles from "./ProductList.module.scss";

const ProductList = () => {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getProducts();
        setProducts(data);
      } catch (error) {
        console.log(error);
        setError(error);
      }
    };
    fetchData();
  }, []);

  return (
    <main>
      <section className={`z-10 relative ${styles.productList}`}>
        {products ? (
          products.map((pr) => <ProductItem key={pr._id} product={pr} />)
        ) : (
          <h1 className={`title ${styles.Loading}`}>Loading...</h1>
        )}
      </section>
    </main>
  );
};

export default ProductList;
