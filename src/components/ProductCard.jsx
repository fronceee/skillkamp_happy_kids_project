import React from "react";
import ButtonAddToCard from "./ButtonAddToCard";
import { Link } from "react-router-dom";

function ProductCard({ data }) {
  return (
    <Link to={`/product/${data.id}`} className="w-full flex flex-col items-center text-main-1 snap-start relative">
      {data.ribbon && (
        <div className="absolute top-5 left-5 bg-main-3 text-main-2 px-4">
          {data.ribbon}
        </div>
      )}
      <img src={data.images[0]} alt={data.alt} />
      <p className="font-thin tracking-[0.14em] mb-2">{data.name}</p>
      {data.discountedPrice === data.price ? (
        <p className="font-thin tracking-[0.2em] mb-2">
          {data.formattedDiscountedPrice}
        </p>
      ) : (
        <div className="flex gap-3">
          <p className="font-thin tracking-[0.2em] mb-2 line-through">
            {data.formattedPrice}
          </p>
          <p className="font-thin tracking-[0.2em] mb-2 ">
            {data.formattedDiscountedPrice}
          </p>
        </div>
      )}

      <ButtonAddToCard>Add to Cart</ButtonAddToCard>
    </Link>
  );
}

export default ProductCard;
