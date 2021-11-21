import ProductList from "../Components/ProductList/ProductList";
import Layout from "../Layouts/Layout";
import Shoes from "../Images/shoesbg.png";

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
    <section className={`jumbotron flex flex-col justify-center items-center`}>
      <h1
        className={`text-6xl lg:text-7xl xl:text-9xl text-white headers -mb-20`}
      >
        Armin <br /> Shopping
      </h1>
      <img
        className={`max-w-xs sm:max-w-md lg:max-w-xl xl:max-w-2xl md:ml-10`}
        src={Shoes}
        alt="Nike Shoes"
      />
    </section>
  );
};
