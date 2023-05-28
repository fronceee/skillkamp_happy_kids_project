import React from "react";
import ProductCard from "../components/ProductCard";
import { getAllProducts } from "../utils/api";

function ShopCollection() {
  const [allProducts, setAllProducts] = React.useState([]);

  React.useEffect(() => {
    async function retrieveProducts() {
      const result = await getAllProducts()
      setAllProducts(result)
    }
    retrieveProducts()

  }, []);

  return (
    <div className="flex flex-col items-center max-w-5xl mx-auto pb-14">
      <h1 className="text-center text-3xl font-thin tracking-widest pt-10">
        Shop Collection
      </h1>
      <div className="flex flex-col lg:flex-row justify-center">
        <div className="w-full md:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-max">
          {allProducts.length !== 0 &&
            allProducts.map((item) => (
              <ProductCard key={item.id} data={item} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default ShopCollection;
