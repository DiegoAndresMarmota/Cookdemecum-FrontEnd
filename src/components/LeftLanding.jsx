import React from 'react'
import food1 from "../styles/food1.jpg"

export default function () {
    return (
      <div className="flex">
        <div className="flex-row pt-10 px-6">
          <span className="text-2xl font-bold tracking-normal">
            ¿Vas algo justo de tiempo, pero quieres comer bien?
          </span>
          <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0 mb-6 leading-loose text-center text-ellipsis">
            Puede que a veces pienses que comer bien implica estar todo el día
            en la cocina. Es más, el ahorro de tiempo es una de las razones del
            éxito de los platos precocinados. ¿Y si te decimos que hemos
            encontrado varias opciones de comidas rápidas que además son
            equilibradas, de elaboración sencilla y, lo más importante, que
            también están buenísimas? Para terminar de convencerte, puedes echar
            un vistazo a la variada selección que hemos preparado donde
            encontrarás recetas para todos los gustos. Pero antes no te pierdas
            unos trucos que te ayudarán a ahorrar tiempo a la hora de cocinar
            tus menús.
          </p>
        </div>
        <div className="flex-row">
          <img
            className="object-cover mt-6 h-96 w-96"
            src={food1}
            alt="food1"
          ></img>
        </div>
      </div>
    );
}
