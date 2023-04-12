import React from "react";
import ProductCard from "../components/ProductCard";
import { Disclosure } from "@headlessui/react";
import { PlusIcon, MinusIcon, XMarkIcon } from "@heroicons/react/20/solid";
import MultiRangeSlider from "multi-range-slider-react";
import { v4 as id } from "uuid";

function ShopCollection() {
  const [allProducts, setAllProducts] = React.useState([]);
  const [selectedCat, setSelectedCat] = React.useState("all");
  const [minPrice, setMinPrice] = React.useState(17.99);
  const [maxPrice, setMaxPrice] = React.useState(19.99);
  const [colors, setColors] = React.useState([]);
  const [hoverTextColor, setHoverTextColor] = React.useState("");
  const [sizes, setSizes] = React.useState([]);

  const sizesData = [
    "0-3 months",
    "12-18 months",
    "18-24 months",
    "2 years",
    "3 years",
    "3-6 months",
    "6-12 months",
  ];
  const colorData = [
    {
      nameColor: "Blue",
      color: "#458FFF",
    },
    {
      nameColor: "Cream",
      color: "#FAFAEF",
    },
    {
      nameColor: "Green",
      color: "#86AD91",
    },
    {
      nameColor: "Light Pink",
      color: "#FFE5E9",
    },
    {
      nameColor: "Peach",
      color: "#F9BB9C",
    },
    {
      nameColor: "Teracotta",
      color: "#CD7551",
    },
    {
      nameColor: "White",
      color: "#ffffff",
    },
  ];

  const HeadIcon = ({ open }) => {
    return (
      <>
        {open ? (
          <MinusIcon className={`h-5 w-5`} />
        ) : (
          <PlusIcon className={`h-5 w-5`} />
        )}
      </>
    );
  };

  const handleOptionChange = (e) => {
    setSelectedCat((prev) => e.target.value);
  };

  const handlePriceRange = (e) => {
    setMinPrice(e.minValue);
    setMaxPrice(e.maxValue);
  };

  React.useEffect(() => {
    const category = selectedCat === "all" ? "" : `CATEGORY=${selectedCat}`;
    const priceRange = `PRICE=${minPrice}-${maxPrice}`;
    const filterColors =
      colors.length > 0 ? `OPTION_COLOR=${colors.join()}` : false;
    const filterSizes = sizes.length > 0 ? `OPTION_LIST=${sizes.join()}` : "";

    const query = `https://skillkamp-api.com/v1/api/products/?${category}${
      category ? "&" + priceRange : priceRange
    }${filterColors ? "&" + filterColors : ""}${
      filterSizes ? "&" + filterSizes : ""
    }`;
    console.log(query);
    fetch(query)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllProducts(
          data.detail.data.catalog.category.productsWithMetaData.list
        );
      });
  }, [selectedCat, minPrice, maxPrice, colors, sizes]);

  console.log(sizes);
  return (
    <div className="flex flex-col items-center max-w-5xl mx-auto pb-14">
      <h1 className="text-center text-3xl font-thin tracking-widest pt-10">
        Shop Collection
      </h1>
      <div className="flex flex-col lg:flex-row">
        <div className="w-full md:w-1/4 px-4 py-16 text-main-1">
          <h2 className="font-thin text-main-1 text-2xl">Filter By</h2>
          <div className="mx-auto w-full max-w-3xl rounded-2xl p-2">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between px-4 py-2 text-left text-sm font-medium">
                    <span>Collection</span>
                    <HeadIcon open={open} />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-main-1 grid place-items-start gap-2">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="all">
                        <input
                          type="radio"
                          id="all"
                          name="options"
                          value="all"
                          checked={selectedCat === "all"}
                          onChange={handleOptionChange}
                          className="appearance-none"
                        />
                        <span
                          className={`text-main-1 font ${
                            selectedCat === "all" ? "font-semibold" : ""
                          }`}
                        >
                          All
                        </span>
                      </label>
                      <label htmlFor="t-shirt">
                        <input
                          type="radio"
                          id="t-shirt"
                          name="options"
                          value="T+shirts"
                          checked={selectedCat === "T+shirts"}
                          onChange={handleOptionChange}
                          className="appearance-none"
                        />
                        <span
                          className={`text-main-1 font ${
                            selectedCat === "T+shirts" ? "font-semibold" : ""
                          }`}
                        >
                          T-Shirt
                        </span>
                      </label>
                      <label htmlFor="bodysuit">
                        <input
                          type="radio"
                          id="bodysuit"
                          name="options"
                          value="Bodysuits"
                          checked={selectedCat === "Bodysuits"}
                          onChange={handleOptionChange}
                          className="appearance-none"
                        />
                        <span
                          className={`text-main-1 font ${
                            selectedCat === "Bodysuits" ? "font-semibold" : ""
                          }`}
                        >
                          Bodysuit
                        </span>
                      </label>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between px-4 py-2 text-left text-sm font-medium">
                    <span>Price</span>
                    <HeadIcon open={open} />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-main-1 grid place-items-start gap-2">
                    <MultiRangeSlider
                      className="w-full border-none shadow-none text-lg"
                      min={17.99}
                      max={19.99}
                      minValue={minPrice}
                      maxValue={maxPrice}
                      step={0.25}
                      ruler={false}
                      stepOnly={true}
                      barInnerColor="#282828"
                      onChange={handlePriceRange}
                    />
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between px-4 py-2 text-left text-sm font-medium">
                    <span>Color</span>
                    <HeadIcon open={open} />
                  </Disclosure.Button>
                  <Disclosure.Panel className="pl-4 pt-4 pb-2 text-sm flex flex-col justify-center items-center text-main-1 gap-1">
                    <p className="h-[1em] mb-4 self-start font-thin tracking-wider">
                      {hoverTextColor}
                    </p>
                    <div className="flex gap-1">
                      {colorData.map((item, index) => {
                        const isSelected = colors.includes(item.nameColor);
                        return (
                          <div
                            key={id()}
                            onMouseEnter={() => {
                              setHoverTextColor(item.nameColor);
                            }}
                            onMouseLeave={() => {
                              setHoverTextColor("");
                            }}
                            onClick={() => {
                              if (isSelected) {
                                setColors((prev) =>
                                  prev.filter((c) => c !== item.nameColor)
                                );
                              } else {
                                setColors((prev) => [...prev, item.nameColor]);
                              }
                            }}
                            className={`w-8 h-8 md:w-5 md:h-5 border rounded-full cursor-pointer ${
                              isSelected
                                ? "border-2 border-main-1"
                                : "border-main-4"
                            }`}
                            style={{ background: item.color }}
                          ></div>
                        );
                      })}
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between px-4 py-2 text-left text-sm font-medium">
                    <span>Size</span>
                    <HeadIcon open={open} />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 ml-4 pb-2 text-sm text-main-1 grid place-items-start gap-2">
                    {sizesData.map((size, index) => (
                      <div key={id()}>
                        <input
                          className="mr-2 checked:bg-main-1"
                          type="checkbox"
                          value={size}
                          id={index + size}
                          checked={sizes.includes(size)}
                          onChange={(e) => {
                            const { value } = e.target;
                            if (sizes.includes(value)) {
                              setSizes((prev) =>
                                prev.filter((size) => size !== value)
                              );
                            } else {
                              setSizes((prev) => [...prev, value]);
                            }
                            console.log(sizes);
                          }}
                        />
                        <label htmlFor={index + size} className="font-light">
                          {size}
                        </label>
                      </div>
                    ))}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <button
              className="w-full my-4 text-center flex justify-center items-center"
              onClick={() => {
                setSelectedCat("all");
                setMinPrice(17.99);
                setMaxPrice(19.99);
                setColors([]);
                setSizes([]);
              }}
            >
              <XMarkIcon className={`h-7 w-7`} /> Clear Fliter
            </button>
          </div>
        </div>
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
