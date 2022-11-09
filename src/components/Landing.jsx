import React from "react";

export const Landing = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl">
        <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline"> Bienvenido </span>{" "}
              <span className="block text-indigo-600 xl:inline">
                Proyecto Front-End
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Laboriosam a voluptatem beatae iste consectetur veniam aliquam
              voluptate inventore ex rem!
            </p>

            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Ingresa o Registrate aqui:!
            </h2>
          </div>
          <div className="flex justify-center mt-6 ">
            <a
              style={{ textDecoration: "none" }}
              href="/login"
              className="w-60 mx-8 flex  items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
            >
              Ingresa
            </a>

            <a
              style={{ textDecoration: "none" }}
              href="/register"
              className=" w-60 flex   items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
            >
              Registrate
            </a>
          </div>
        </main>
      </div>
    </div>
  );
};
