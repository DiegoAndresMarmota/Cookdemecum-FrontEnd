import React from "react";

export default function FeedWelcome({ img, title }) {
  return (
    <figure class="relative max-w-lg py-5">
      <img
        className="max-w-full h-auto rounded-lg"
        src={img}
        alt="image description"
      />
      <figcaption className="absolute right-6 bottom-32 mt-2 text-2xl text-center text-white dark:text-black-700 uppercase italic font-bold">
        {title}
      </figcaption>
    </figure>
  );
}
