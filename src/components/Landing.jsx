import React from "react";
import Recept from "./Recept";

export const Landing = () => {
  return (
    <div className="relative overflow-hidden bg-white my-52">
      <div className="mx-auto max-w-7xl">
        <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline"> Bienvenido a </span>{" "}
              <span className="block text-indigo-600 xl:inline">
                COOK-DEMECUM
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
              Si el mundo de la cocina te fascina, en Cook-demecum descubrirás
              una infinidad de recetas riquísimas que deleitarán incluso a los
              paladares más exigentes. En nuestra web encontrarás todo tipo de
              recetas de cocina capaces de sorprender a los paladares más
              exquisitos.
            </p>
            <Recept />
          </div>
        </main>
      </div>
    </div>
  );
};
