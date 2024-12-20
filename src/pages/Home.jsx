import { useState } from "react";
import BlackImage from "../images/black-watch.png";
import BlueImage from "../images/blue-watch.png";
import LightBlueImage from "../images/light-blue-watch.png";
import CyanImage from "../images/cyan-watch.png";
import SizesandPrices from "../components/SizesandPrices";
import BandColor from "../components/BandColor";
import Modal from "../components/Modal";
import Header from "../components/Header";

// static products
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

  // selected procuct
  const [currentProduct, setCurrentProduct] = useState({
    name: "Classy Modern Smart Watch",
    bandColor: "Light Blue",
    imageSrc: LightBlueImage,
    size: "S",
    price: 69,
    total: 0,
  });
  const [modalOpen, isModalOpen] = useState(false);
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

  const handleModal = () => {
    isModalOpen(true);
  };

  // Update product count
  const updateCount = (value) => {
    const newCount = Math.max(count + value, 0); // validate for nagative value
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
    setCount(0); // reset after adding add to cart
  };
  const cartItems = selectedProducts.bandColor.map((color, i) => ({
    color,
    imageSrc: selectedProducts.imageSrc[i],
    size: selectedProducts.size[i],
    name: selectedProducts.name,
    quantity: parseInt(selectedProducts.total[i], 10),
    price: parseInt(selectedProducts.price[i], 10),
  }));

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

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
            {/* header part */}
            <Header />
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
            {/* band color */}
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
                  <div className="border flex gap-3  px-4 rounded border-[#DBDFEA]">
                    <button
                      onClick={() => updateCount(-1)}
                      className=" rounded-lg flex-none  text-[#8091A7] focus:outline-none"
                    >
                      <i class="fa-solid fa-minus"></i>
                    </button>
                    <p className="text-lg flex-1 w-14 text-center py-1 text-[#364A63] border-l border-r">
                      {count}
                    </p>
                    <button
                      onClick={() => updateCount(1)}
                      className="flex-none rounded-lg text-[#8091A7] focus:outline-none"
                    >
                      <i class="fa-solid fa-plus"></i>
                    </button>
                  </div>
                  <button
                    onClick={() => addToCart(currentProduct, product)}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg"
                  >
                    Add to Cart
                  </button>
                  <button class=" w-4 h-4 text-[#6576FF]">
                    <i class="far fa-heart"> </i>
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
                {totalQuantity}
              </span>
            </button>
          </div>
        )}
        {/* modal */}
        {modalOpen && (
          <Modal
            cartItems={cartItems}
            totalPrice={totalPrice}
            totalQuantity={totalQuantity}
          />
        )}
      </div>
    </>
  );
};

export default Home;
