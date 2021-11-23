import ProductList from "../Components/ProductList/ProductList";
import Layout from "../Layouts/Layout";
import Shoes from "../Assets/Images/shoesbg.png";

const HomePage = () => {
  return (
    <Layout>
      <main>
        <Jumbotron />
        <ProductList />
      </main>
    </Layout>
  );
};

export default HomePage;

const Jumbotron = () => {
  return (
    <section className={`overflow-hidden`}>
      <section
        className={`jumbotron flex flex-col justify-center items-center`}
      >
        <h1
          className={`text-6xl py-9 md:text-8xl lg:text-9xl headers -mb-20 text-transparent bg-clip-text bg-gradient-to-br from-gray-500 fr to-gray-100`}
        >
          Armin <br /> Shopping
        </h1>
        <img
          className={`max-w-xs lg:-mt-12 sm:max-w-md lg:max-w-xl xl:max-w-2xl md:ml-10`}
          src={Shoes}
          alt="Nike Shoes"
        />
      </section>
    </section>
  );
};
