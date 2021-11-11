import { products } from "../../data";
import ProductItem from "./ProductItem/ProductItem";
import styles from './ProductList.module.scss';

const ProductList = () => {
  return (
    <section className={styles.productList}>
        {products.map((pr) => (
          <ProductItem key={pr.name} product={pr} />
        ))}
    </section>
  );
};

export default ProductList;
