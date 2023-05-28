import React from "react";
import ProductCard from "../components/ProductCard";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import { getNewArrivalsProducts } from "../utils/api";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function NewArrivals() {
  const [products, setProducts] = React.useState([]);
  const [isLoad, setIsLoad] = React.useState(null);

  React.useEffect(() => {
    const controller = new AbortController();
    getNewArrivalsProducts()
      .then((data) => {
        setProducts(data);
        setIsLoad(true);
      })
      .catch((err) => {
        setProducts("Unable to Load. Please Try Again!");
        setIsLoad(false);
      });
    return () => controller.abort();
  }, []);
  return (
    <div className="container mx-auto flex flex-col items-center">
      <h1 className="font-light mt-10 text-3xl md:text-4xl tracking-widest md:mb-6">
        New Arrivals
      </h1>
      <Carousel
        responsive={responsive}
        containerClass="w-full z-10 background-none mb-14"
        draggable={false}
        showDots={false}
        infinite={true}
        renderButtonGroupOutside={true}
      >
        {isLoad ? (
          products.map((item) => <ProductCard key={item.id} data={item} />)
        ) : isLoad === null ? (
          <p className="text-center">Loading...</p>
        ) : isLoad === false ? (
          <p>{products}</p>
        ) : (
          ""
        )}
      </Carousel>
      <Link to="/shop-collection">
        <div className="w-screen text-center pb-10">
          <button className="border-2 w-[14em] tracking-wide border-main-1 bg-main-1 py-4 text-xl font-light text-main-4 hover:bg-main-3 hover:text-main-2 hover:border-main-3 active:border-main-3 active:bg-main-3 active:text-main-2 transition-all duration-300">
            Shop All
          </button>
        </div>
      </Link>
    </div>
  );
}

export default NewArrivals;
