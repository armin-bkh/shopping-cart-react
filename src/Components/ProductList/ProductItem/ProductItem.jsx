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
    </article>
  );
};

export default ProductItem;
