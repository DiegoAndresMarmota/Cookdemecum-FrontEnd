import React from "react";
import Recept from "./Recept";
import LeftLanding from "./LeftLanding";
import RightLanding from "./RightLanding"

export const Landing = () => {
  return (
    <div className="relative overflow-hidden bg-white my-1">
      <div className="mx-auto max-w-7xl">
        <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-10">
          <div className="sm:text-center lg:text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl mb-5">
              <span className="block xl:inline"> Bienvenido a </span>{" "}
              <span className="block text-red-700 xl:inline">
                COOK-DEMECUM
              </span>
            </h1>
            <h5 className="text-2xl font-bold tracking-tight text-neutral-800 sm:text-2xl md:text-2xl mb-20 text-center">
              Si el mundo de la cocina te fascina, en Cook-demecum descubrirás
              una infinidad de recetas riquísimas que te deleitarán.
            </h5>
            <LeftLanding />
            <RightLanding />
            {/* <Recept /> */}
          </div>
        </main>
      </div>
    </div>
  );
};
