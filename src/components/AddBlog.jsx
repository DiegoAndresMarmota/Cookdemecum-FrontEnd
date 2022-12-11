import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { createBlogAction, listBlogs } from "../actions/blogActions";
import Messages from "./Messages";
import Loader from "./Loader";

import FileBase64 from "react-file-base64";

export default function AddBlog() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const path = "/";
  const blogCreate = useSelector((state) => state.blogCreate);
  const { loading, error } = blogCreate;
  const [body, setBody] = useState("");
  const [title, setTitle] = useState("");

  const [img, setImg] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createBlogAction(title, body, img.base64));
    navigate(path);
  };

  const getFiles = (files) => {
    setImg(files);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Messages>{error}</Messages>
      ) : (
        <div>
          <div className="md:grid md:grid-cols-4 md:gap-6 bg-red-100 pb-40">
            <div className="md:col-span-1"></div>
            <div className="mt-5 md:col-span-2 md:mt-0">
              <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 pb-5">
                Mi receta
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="shadow sm:overflow-hidden sm:rounded-md">
                  <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                    <div className="grid grid-cols-3 gap-6">
                      <div className="col-span-3 sm:col-span-2"></div>
                    </div>
                    <div className="rounded">
                      <label
                        htmlFor="about"
                        className="block text-sm font-medium text-gray-700 my-3"
                      >
                        Foto:
                      </label>
                      <FileBase64
                        multiple={false}
                        onDone={getFiles}
                      />
                      {img && <img src={img["base64"]} />}
                    </div>
                    <div className="rounded">
                      <label
                        htmlFor="about"
                        className="block text-sm font-medium text-gray-700 my-3"
                      >
                        Mi receta se llama:
                      </label>
                      <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        id="title"
                        className="bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm my-1"
                        placeholder="¿Cuál es el nombre de la receta?"
                        type="text"
                        name="title"
                      />
                      <label
                        htmlFor="about"
                        className="block text-sm font-medium text-gray-700 mt-4 mb-4"
                      >
                        Preparación de la receta:
                      </label>
                      <div className="mt-1">
                        <textarea
                          value={body}
                          onChange={(e) => setBody(e.target.value)}
                          type="text"
                          id="comentary"
                          rows={3}
                          className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
                          placeholder="¿Cuáles son tus ingredientes? ¿Cómo lo preparas?"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-md border border-transparent bg-red-700 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    >
                      Publicar
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
