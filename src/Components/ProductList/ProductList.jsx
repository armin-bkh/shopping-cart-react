import { useState, useEffect } from "react";
import ProductItemLoadingSkeleton from '../Loading-Skeleton/ProductItemLoadingSkeleton/ProductItemLoadingSkeleton';
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
      <section className={`z-10 relative shadow-2xl ${styles.productList}`}>
        {products ? (
          products.map((pr) => <ProductItem key={pr._id} product={pr} />)
        ) : (
          Array(8).fill().map((item, index) => <ProductItemLoadingSkeleton key={index} /> )
         )} 
      </section>
  );
};

export default ProductList;
