import ProductDetail from "../Components/ProductDetail/ProductDetail";
import Layout from "../Layouts/Layout";
import { Main } from "../Components/styled-component/Main.style";

const ProductPage = () => {
  return (
    <Layout>
      <Main className={`m-5 shadow mx-auto rounded-md`}>
        <ProductDetail />
      </Main>
    </Layout>
  );
};

export default ProductPage;
