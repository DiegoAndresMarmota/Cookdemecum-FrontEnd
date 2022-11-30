import React from "react";
import food2 from "../styles/food2.jpg"

export default function RightLanding() {
  return (
    <div className="flex">
      <div className="flex-row">
        <img
          className="object-cover mt-6 h-96 w-96"
          src={food2}
          alt="food2"
        ></img>
      </div>
      <div className="flex-row pt-10 px-6">
        <span className="text-2xl font-bold tracking-normal">
          ¿Y qué es comer saludable?
        </span>
        <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0 leading-loose text-center text-ellipsis mb-10">
          Alimentarnos de forma saludable y equilibrada debería ser la norma
          general en nuestro día a día, teniendo cabida también los caprichos
          ocasionales. Es algo fácil de decir, pero no siempre sencillo de
          cumplir; las obligaciones y los ritmos de vida acelerados pueden matar
          la creatividad o dejarnos casi sin tiempo para cocinar. Disponer de un
          buen repertorio de recetas para comer saludable nos puede sacar de
          muchos apuros en los menús semanales. comer una buena varidad de
          alimentos reales (nada o mínimamente procesados), sin excesos,
          priorizando los de origen vegetal. Y sin olvidar el ejercicio físico.
        </p>
      </div>
    </div>
  );
}
