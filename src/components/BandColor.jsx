import React from "react";

export default function BandColor({ products, setProduct, product, setCount }) {
  const handleChange = (colorName, imageSrc) => {
    console.log("first", colorName);
    setCount(0);
    setProduct({
      bandColor: colorName,
      imageSrc: imageSrc,
    });
  };
  return (
    <div class="mt-4">
      <span class="text-lg font-bold text-[#364A63]">Band Color</span>
      {/* <!-- radio button --> */}
      <div className="flex items-center gap-4 mt-3">
        {products.map((option, index) => (
          <label
            key={index}
            className="relative flex items-center gap-2 cursor-pointer"
          >
            {/* Radio input (hidden) */}
            <input
              type="radio"
              defaultChecked={index === 0}
              onClick={() => handleChange(option.colorName, option.imageSrc)}
              className="peer hidden"
            />

            {/* Outer Circle */}
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center border-2 transition-colors"
              style={{
                borderColor:
                  product.bandColor === option.colorName
                    ? option.borderColor
                    : "transparent",
              }}
            >
              {/* Inner Circle */}
              <div
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: option.bgColor }}
              ></div>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}
