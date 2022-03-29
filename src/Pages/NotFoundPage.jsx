// import NotFound from "../Assets/SVG/404-error-animate.svg";
import Layout from "../Layouts/Layout";

const NotFoundPage = () => {
  return (
    <Layout>
      <main className={`h-screen flex flex-col justify-center items-center`}>
        {/* <img className={`w-full h-full`} src={NotFound} alt="not found" /> */}
        <h1>this page could not be found</h1>
      </main>
    </Layout>
  );
};

export default NotFoundPage;
