import NotFound from "../Assets/SVG/404-error-animate.svg";
import Layout from "../Layouts/Layout";

const NotFoundPage = () => {
  return (
    <Layout>
      <main className={`bg-gray-900 h-screen flex flex-col justify-center items-center`}>
        <img className={`w-full h-full`} src={NotFound} alt="not found" />
      </main>
    </Layout>
  );
};

export default NotFoundPage;
