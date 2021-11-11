import styles from './Product.module.scss';

const ProductItem = ({ product }) => {
  return (
    <article className={styles.card}>
      <img className={styles.img} src={product.image} alt={product.name} />
      <header className={styles.header}>
        <h1>{product.name}</h1>
        <span>{product.price}</span>
      </header>
      <ul>
        {product.description.map((sup) => (
          <li>{sup.support}</li>
        ))}
      </ul>
    </article>
  );
};

export default ProductItem;
