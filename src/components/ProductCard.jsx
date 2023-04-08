import React from "react";
import ButtonAddToCard from "./ButtonAddToCard";

function ProductCard({data}) {
  return (
    <div className="w-full flex flex-col items-center text-main-1 snap-start">
        <img src={data.media[0].url} alt={data.alt}/>
        <p className="font-thin tracking-[0.14em] mb-2">{data.name}</p>
        <p className="font-thin tracking-[0.2em] mb-2">{data.formattedDiscountedPrice}</p>
        <ButtonAddToCard>Add to Cart</ButtonAddToCard>
    </div>
  );
}

export default ProductCard;
