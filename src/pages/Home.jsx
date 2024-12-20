import { useState } from "react";
import BlackImage from "../images/black-watch.png";
import BlueImage from "../images/blue-watch.png";
import LightBlueImage from "../images/light-blue-watch.png";
import CyanImage from "../images/cyan-watch.png";
import SizesandPrices from "../components/SizesandPrices";
import BandColor from "../components/BandColor";

const products = [
  {
    bgColor: "#816BFF",
    borderColor: "#816BFF",
    colorName: "Light Blue",
    imageSrc: LightBlueImage,
  },
  {
    bgColor: "#1FCEC9",
    borderColor: "#1FCEC9",
    colorName: "Cyan",
    imageSrc: CyanImage,
  },
  {
    bgColor: "#4B97D3",
    borderColor: "#4B97D3",
    colorName: "Blue",
    imageSrc: BlueImage,
  },
  {
    bgColor: "#3B4747",
    borderColor: "#3B4747",
    colorName: "Black",
    imageSrc: BlackImage,
  },
];

const Home = () => {
  let totalQuantity = 0;
  let totalPrice = 0;
  const [product, setProduct] = useState({
    bandColor: products[0]?.colorName || "",
    imageSrc: products[0]?.imageSrc || "",
  });
  const [selectedProducts, setSelectedProducts] = useState({
    name: "Classy Modern Smart Watch",
    bandColor: [],
    imageSrc: [],
    size: [],
    price: [],
    total: [],
  });

  // State to track the currently selected product
  const [currentProduct, setCurrentProduct] = useState({
    name: "Classy Modern Smart Watch",
    bandColor: "Light Blue",
    imageSrc: LightBlueImage,
    size: "S",
    price: 69,
    total: 0,
  });
  console.log("current", currentProduct.bandColor, currentProduct.price);
  // State to track quantity and total price
  const [count, setCount] = useState(0);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [total, setTotal] = useState(0);

  // Handle size and price selection
  const handleButtonClick = (size, price) => {
    setCount(0); // Reset count when size is changed
    setCurrentProduct((prev) => ({
      ...prev,
      size,
      price,
      bandColor: product.bandColor,
      imageSrc: product.imageSrc,
    }));
  };
  console.log("total", total);
  const [modalOpen, isModalOpen] = useState(false);
  const handleModal = () => {
    isModalOpen(true);
  };

  // Update product count
  const updateCount = (value) => {
    const newCount = Math.max(count + value, 0); // Prevent count from going negative
    setCount(newCount);
    setCurrentProduct((prev) => ({
      ...prev,
      total: newCount,
    }));
  };

  // Add product to cart
  const addToCart = (currentTotal, currentColor) => {
    setCheckoutOpen(true);
    if (count <= 0) {
      alert("Please select at least one item");
      return;
    }

    setSelectedProducts((prev) => ({
      ...prev,
      bandColor: [...prev.bandColor, currentColor.bandColor],
      imageSrc: [...prev.imageSrc, currentColor.imageSrc],
      size: [...prev.size, currentTotal.size],
      price: [...prev.price, currentTotal.price],
      total: [...prev.total, currentTotal.total],
    }));

    setTotal(
      (prevTotal) => prevTotal + currentTotal.price * currentTotal.total
    );
    setCount(0); // Reset count after adding to cart
  };
  return (
    <>
      <div className="bg-white max-w-7xl mx-auto my-12">
        <div class="gap-16 flex flex-col md:flex-row md:mx-0 mx-8 items-center">
          <div class="basis-1/2">
            <div className="mt-4">
              {product.imageSrc && (
                <img
                  id="image"
                  class="w-full rounded-lg shadow-lg"
                  height="720"
                  src={product.imageSrc}
                  alt={product.bandColor}
                  width="630"
                />
              )}
            </div>
          </div>
          <div class="basis-1/2">
            <h1 class="text-4xl font-bold text-[#364A63]">
              Classy Modern Smart watch
            </h1>
            <div class="flex items-center mt-3">
              <div class="flex items-center gap-1 text-[#FFD200]">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star-half-stroke"></i>
                <i class="fa-regular fa-star"></i>
              </div>
              <span class="ml-2 text-[#8091A7]"> (2 Reviews) </span>
            </div>
            {/* description */}
            <div class="mt-4">
              <span class="text-gray-500 line-through"> $99.00 </span>
              <span class="text-2xl font-bold text-blue-600 ml-2">
                {" "}
                $79.00{" "}
              </span>
            </div>
            <p class="mt-4 text-lg text-[#8091A7]">
              I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system, and expound the actual teaching.
            </p>
            <div class="mt-4 flex gap-10">
              <div class="flex flex-col">
                <span class="text-[#8091A7] text-sm"> Type </span>
                <span class="text-base font-bold text-[#364A63]">Watch</span>
              </div>
              <div class="flex flex-col">
                <span class="text-[#8091A7] text-sm">Model Number</span>
                <span class="text-base font-bold text-[#364A63]">
                  Forerunner 290XT
                </span>
              </div>
            </div>
            <div class="mt-4">
              <BandColor
                product={product}
                products={products}
                setProduct={setProduct}
                setCount={setCount}
              />
              <div className="p-4">
                {/* Size Selection Buttons */}
                <SizesandPrices
                  handleButtonClick={handleButtonClick}
                  currentProduct={currentProduct}
                />

                {/* Quantity Control and Add to Cart */}
                <div className="flex items-center mt-4 gap-4">
                  <button
                    onClick={() => updateCount(-1)}
                    className="px-4 py-2 border border-[#DBDFEA] rounded-lg text-[#8091A7] focus:outline-none"
                  >
                    -
                  </button>
                  <span className="text-lg text-[#364A63]">{count}</span>
                  <button
                    onClick={() => updateCount(1)}
                    className="px-4 py-2 border border-[#DBDFEA] rounded-lg text-[#8091A7] focus:outline-none"
                  >
                    +
                  </button>
                  <button
                    onClick={() => addToCart(currentProduct, product)}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* checkout button */}
        {checkoutOpen && (
          <div class=" flex items-center justify-center mt-28">
            <button
              onClick={() => handleModal()}
              class="bg-[#FFBB5A] flex items-center gap-2 justify-center font-bold text-[#364A63] px-5 py-1 rounded-3xl"
            >
              <span>Checkout</span>
              <span id="total-count" class="bg-white px-2 rounded-lg mt-1">
                0
              </span>
            </button>
          </div>
        )}
        {modalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ">
            <div className="bg-white overflow-y-auto rounded-lg shadow-lg p-6 w-full max-w-2xl">
              <h1 className="text-2xl font-bold mb-4 text-[#364A63]">
                Your Cart
              </h1>
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b text-[#8091A7] text-sm">
                    <th className="py-2 font-normal">Item</th>
                    <th className="py-2 font-normal">Color</th>
                    <th className="py-2 font-normal pr-6">Size</th>
                    <th className="py-2 font-normal">Qnt</th>
                    <th className="py-2 font-normal text-right">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedProducts.bandColor.map((color, i) => {
                    const quantity = parseInt(selectedProducts.total[i]);
                    const price = parseInt(selectedProducts.price[i]);
                    const itemTotalPrice = price * quantity;
                    console.log("selectedProducts.total[i]", price);
                    totalQuantity += quantity;
                    totalPrice += itemTotalPrice;

                    return (
                      <tr key={i} className="border-b">
                        <td className="py-4 flex items-center">
                          <img
                            alt={selectedProducts.name}
                            className="w-9 h-9 rounded mr-4"
                            height="50"
                            src={selectedProducts.imageSrc[i]}
                          />
                          <span className="text-[#364A63]">
                            {selectedProducts.name}
                          </span>
                        </td>
                        <td className="py-4 text-left text-[#364A63]">
                          {color}
                        </td>
                        <td className="py-4 pr-6 font-semibold text-sm text-[#364A63]">
                          {selectedProducts.size[i]}
                        </td>
                        <td className="py-4 font-semibold text-sm text-[#364A63]">
                          {quantity}
                        </td>
                        <td className="py-4 font-semibold text-sm text-right text-[#364A63]">
                          ${price.toFixed(2)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
                <tfoot>
                  <tr>
                    <td
                      className="py-4 font-semibold text-[#373737]"
                      colSpan={3}
                    >
                      Total
                    </td>
                    <td className="py-4 font-bold text-[#364A63]">
                      {totalQuantity}
                    </td>
                    <td className="py-4 font-bold text-right text-[#364A63]">
                      ${totalPrice.toFixed(2)}
                    </td>
                  </tr>
                </tfoot>
              </table>
              <div className="flex justify-end gap-6 mt-6">
                <button className="bg-white text-[#364A63] font-bold text-sm border border-[#DBDFEA] px-4 py-2 rounded">
                  Continue Shopping
                </button>
                <button className="bg-[#6576FF] font-bold text-sm text-white px-[18px] py-2 rounded">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
