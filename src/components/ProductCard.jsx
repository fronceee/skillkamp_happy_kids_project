import React from "react";
import ButtonAddToCard from "./ButtonAddToCard";

function ProductCard({ data }) {
  const [imageIndex, setImageIndex] = React.useState(0);
  return (
    <div className="w-full flex flex-col items-center text-main-1 snap-start relative">
      {data.ribbon && (
        <div className="absolute top-5 left-5 bg-main-3 text-main-2 px-4">
          {data.ribbon}
        </div>
      )}
      {data.media.length === 1 ? (
        <img src={data.media[0].url} alt={data.alt} />
      ) : (
        <div
          onMouseEnter={() => setImageIndex(1)}
          onMouseLeave={() => setImageIndex(0)}
        >
          <img src={data.media[imageIndex].url} alt={data.alt} />
        </div>
      )}

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
    </div>
  );
}

export default ProductCard;
