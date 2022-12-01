import React from "react";

export default function Receipts(menuItem) {
  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg" key={menuItem.id}>
      <img class="w-full" src={menuItem.image} alt="Sunset in the mountains" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{menuItem.title}</div>
        <p class="text-gray-700 text-base">{menuItem.description}</p>
        <p class="md:space-x-1 space-y-1 md:space-y-0 mb-4">
          <button
            class="inline-block px-6 py-2.5 bg-red-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-500 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Ver Ingredientes
          </button>
        </p>
        <div class="collapse" id="collapseExample">
          <div class="block p-6 rounded-lg shadow-lg bg-white">
            <li>{menuItem.ingredients}</li>
          </div>
        </div>
      </div>
    </div>
  );
}


