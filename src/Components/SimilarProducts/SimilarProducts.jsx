import { useEffect, useState } from "react";
import getProducts from "../../Services/getProducts";
import ProductItem from "../ProductList/ProductItem/ProductItem";

const SimilarProducts = ({ name }) => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getProducts();
      setProducts(data);
    };
    fetchData();
  }, []);

  return (
    <section className={`mt-10 shadow p-5`}>
      <h1 className={`text-gray-900 text-3xl md:text-5xl title mb-5`}>similar products</h1>
      <article className={`flex flex-nowrap overflow-x-auto pb-5`}>
        {products
          ? products.map((pr) => <ProductItem key={pr._id} product={pr} similar={true} />)
          : null}
      </article>
    </section>
  );
};

export default SimilarProducts;
