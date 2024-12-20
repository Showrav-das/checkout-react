import React from "react";

export default function Header() {
  return (
    <div>
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
        <span class="text-2xl font-bold text-blue-600 ml-2"> $79.00 </span>
      </div>
      <p class="mt-4 text-lg text-[#8091A7]">
        I must explain to you how all this mistaken idea of denouncing pleasure
        and praising pain was born and I will give you a complete account of the
        system, and expound the actual teaching.
      </p>
    </div>
  );
}
