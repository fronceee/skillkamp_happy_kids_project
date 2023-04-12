import React from "react";
import { useParams } from "react-router-dom";
import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";
import { Listbox } from "@headlessui/react";
import { Disclosure } from "@headlessui/react";

function Product() {
  const [productDetail, setProductDetail] = React.useState(null);
  const [selectedColor, setSelectedColor] = React.useState("");
  const [selectedSize, setSelectedSize] = React.useState("");

  const { id } = useParams();

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
  React.useEffect(() => {
    const controller = new AbortController();
    fetch(`https://skillkamp-api.com/v1/api/products/details/${id}`)
      .then((res) => res.json())
      .then((data) => setProductDetail(data.detail.data.catalog.product));
    return () => {
      controller.abort();
    };
  }, []);
  return (
    productDetail && (
      <div className="my-14 px-5 gap-4 text-main-1 flex flex-col justify-center items-center mx-auto md:flex-row max-w-5xl">
        <div className="md:w-1/2">
          <img src={productDetail.media[0].thumbnailFullUrl} />
          <p className="font-thin">{productDetail.description}</p>
        </div>

        <div className="md:w-1/2">
          <h1 className="text-3xl mb-2">{productDetail.name}</h1>
          <p className="font-light mb-6">SKU: {id}</p>
          <>
            {productDetail.price === productDetail.discountedPrice ? (
              <p className="text-main-1">{productDetail.formattedPrice}</p>
            ) : (
              <>
                <p className="text-main-1 font-light line-through">
                  {productDetail.formattedPrice}
                </p>
                <p className="text-main-1 font-light">
                  {productDetail.formattedDiscountedPrice}
                </p>
              </>
            )}
            <div className="mt-4">
              <p className="font-light">Color</p>
              {productDetail.options[0].selections.map((color) => (
                <div
                  className={`w-5 h-5 rounded-xl border border-main-4`}
                  style={{ background: color.value }}
                ></div>
              ))}
            </div>
            <div>
              <p className="font-light">Size</p>
              <Listbox value={selectedSize} onChange={setSelectedSize}>
                <Listbox.Button className="w-full md:w-3/5 text-left border p-4">
                  {selectedSize ? selectedSize : "Choose Size"}
                </Listbox.Button>
                <Listbox.Options>
                  {productDetail.options[1].selections.map((size) => (
                    <Listbox.Option
                      key={size.id}
                      value={size.value}
                      className="p-4 cursor-pointer text-main-1 tracking-wider"
                    >
                      {size.value}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Listbox>
            </div>
            <div>
              <Disclosure defaultOpen={true}>
                {({ open }) => (
                  <>
                    {productDetail.additionalInfo.map((info) => (
                      <>
                        <Disclosure.Button className="flex w-full justify-between px-4 py-2 text-left text-sm font-medium">
                          <span>{info.title}</span>
                          <HeadIcon open={open} />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-main-1 grid place-items-start gap-2">
                          <p>{info.description.replace('<p>','').replace('</p>','')}</p>
                        </Disclosure.Panel>
                      </>
                    ))}
                  </>
                )}
              </Disclosure>
            </div>
          </>
        </div>
      </div>
    )
  );
}

export default Product;
