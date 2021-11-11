import ProductList from "../Components/ProductList/ProductList";
import Layout from "../Layouts/Layout";

const HomePage = () => {
  return (
    <Layout>
      <header>
        <h1 className={`title`}>products...</h1>
      </header>
      <ProductList />
    </Layout>
  );
};

export default HomePage;
