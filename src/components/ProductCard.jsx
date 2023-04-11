import React from "react";
import ButtonAddToCard from "./ButtonAddToCard";

function ProductCard({ data }) {
  const [isHover, setIsHover] = React.useState(true);
  const [imageIndex, setImageIndex] = React.useState(0);
  return (
    <div className="w-full flex flex-col items-center text-main-1 snap-start">
      {data.media.length === 1 ? (
        <img src={data.media[0].url} alt={data.alt} />
      ) : (
        <div onMouseEnter={() => setImageIndex(1)} onMouseLeave={() => setImageIndex(0)}>
          <img src={data.media[imageIndex].url} alt={data.alt} />
        </div>
      )}

      <p className="font-thin tracking-[0.14em] mb-2">{data.name}</p>
      <p className="font-thin tracking-[0.2em] mb-2">
        {data.formattedDiscountedPrice}
      </p>
      <ButtonAddToCard>Add to Cart</ButtonAddToCard>
    </div>
  );
}

export default ProductCard;
