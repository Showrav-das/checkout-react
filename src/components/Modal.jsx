import React from "react";

export default function Modal({ cartItems, totalQuantity, totalPrice }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white overflow-y-auto rounded-lg shadow-lg p-6 w-full max-w-2xl">
        <h1 className="text-2xl font-bold mb-4 text-[#364A63]">Your Cart</h1>
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
            {cartItems.map((item, i) => (
              <tr key={i} className="border-b">
                <td className="py-4 flex items-center">
                  <img
                    alt={item.name}
                    className="w-9 h-9 rounded mr-4"
                    src={item.imageSrc}
                  />
                  <span className="text-[#364A63]">{item.name}</span>
                </td>
                <td className="py-4 text-[#364A63]">{item.color}</td>
                <td className="py-4 pr-6 text-sm font-semibold text-[#364A63]">
                  {item.size}
                </td>
                <td className="py-4 text-sm font-semibold text-[#364A63]">
                  {item.quantity}
                </td>
                <td className="py-4 text-sm text-right font-semibold text-[#364A63]">
                  ${item.price.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td className="py-4 font-semibold text-[#373737]" colSpan={3}>
                Total
              </td>
              <td className="py-4 font-bold text-[#364A63]">{totalQuantity}</td>
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
  );
}
