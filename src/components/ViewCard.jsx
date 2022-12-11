import React from "react";

export default function FeedWelcome({ imgPost, titlePost }) {
  return (
    <figure className="relative max-w-lg py-5">
      <img
        className="max-w-full h-auto rounded-lg"
        src={imgPost}
        alt="image description"
      />
      <figcaption className="absolute right-8 bottom-32 top-44 mt-2 text-2xl text-center text-white dark:text-black-700 uppercase italic font-bold">
        {titlePost}
      </figcaption>
    </figure>
  );
}
