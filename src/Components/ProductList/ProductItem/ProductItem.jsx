import { MdOutlineAddShoppingCart } from 'react-icons/md';
import styles from './Product.module.scss';

const ProductItem = ({ product }) => {
  return (
    <article className={styles.card}>
      <img className={styles.img} src={product.image} alt={product.name} />
      <div>

      </div>
      <header className={styles.header}>
        <h1 className="title">{product.name}</h1>
        <span className="main">${product.price}</span>
      </header>
      <button type="button" className={`title ${styles.btn}`}>add to cart<MdOutlineAddShoppingCart className={styles.icon} /></button>
    </article>
  );
};

export default ProductItem;
