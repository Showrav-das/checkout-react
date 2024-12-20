import React from "react";

const sizesPrices = [
  { size: "S", price: 69 },
  { size: "M", price: 79 },
  { size: "L", price: 89 },
  { size: "XL", price: 99 },
];

export default function SizesandPrices({ handleButtonClick, currentProduct }) {
  return (
    <div className="flex items-center gap-4">
      {sizesPrices.map(({ size, price }) => (
        <button
          key={size}
          onClick={() => handleButtonClick(size, price)}
          className={`px-4 py-2 border rounded-lg text-sm font-medium focus:outline-none ${
            currentProduct.size === size
              ? "border-[#6576FF] text-[#6576FF]"
              : "border-[#DBDFEA] text-[#364A63]"
          }`}
        >
          <span
            className={
              currentProduct.size === size ? "text-[#6576FF]" : "text-[#364A63]"
            }
          >
            {size}
          </span>
          <span className="text-[#8091A7] text-xs"> ${price}</span>
        </button>
      ))}
    </div>
  );
}
