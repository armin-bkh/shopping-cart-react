import { useState, useEffect } from "react";
import { useLocation } from "react-router";

const ProductDetail = () => {
  const [product, setProduct] = useState();
  const { state } = useLocation();

  useEffect(() => {
    if (state) {
      setProduct(state);
    }
  }, []);

  return product ? (
    <main>
      <section>
        <article className={`flex flex-col md:flex-row flex-wrap text-gray-900`}>
          <div className={`w-full md:w-2/5 relative`}>
              {product.discount && <span className={`absolute w-10 h-10 rounded-full flex justify-center items-center top-3 right-3 font-bold transform rotate-12 text-red-500 border-2 border-red-500`}>{product.discount}%</span>}
            <img
              className={`w-full h-full`}
              src={product.image}
              alt={product.name}
            />
          </div>
          <div className={`flex-1 p-5 flex flex-col`}>
            <header className={`flex items-center justify-between relative mb-5 md:mb-0`}>
              <h1 className={`headers text-2xl lg:text-5xl`}>{product.name}</h1>
              <span className={`${product.offPrice === product.price ? "text-yellow-400 text-xl" : "text-gray-500 line-through"} main`}>${product.price}</span>
              {product.offPrice !== product.price && <span className={`text-red-500 main absolute right-0  top-6 lg:top-10 main text-xl`}>${product.offPrice}</span>}
            </header>
            <div className={`flex-1 flex flex-col justify-end mb-2`}>
                <span className={`title`}>description:</span>
                <ul className={`flex main justify-evenly`}>
                    {
                        product.description.map(item => <li key={item._id}>{item.support}</li>)
                    }
                </ul>
            </div>
            <button className={`py-2 bg-gray-900 text-yellow-400 rounded-md title`}>add to cart</button>
          </div>
        </article>
      </section>
    </main>
  ) : null;
};

export default ProductDetail;
