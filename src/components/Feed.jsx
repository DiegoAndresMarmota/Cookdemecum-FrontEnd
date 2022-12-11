import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Messages from "./Messages";
import Loader from "./Loader";
import { getListUsers } from "../actions/userActions";
import { listBlogs, deleteBlogAction } from "../actions/blogActions";

import { AiFillEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import FeedWelcome from "./ViewCard";
import foto1 from "../styles/preparacion1.jpg";
import { useState } from "react";

export default function Feed({ isEditable, img, title }) {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.userList);
  const { users } = userList;
  const blogList = useSelector((state) => state.blogList);
  const { error, loading, blogs } = blogList;

  const [mainPicture, setMainPicture] = useState("");
  const [titlePicture, setTitlePicture] = useState("");

  useEffect(() => {
    dispatch(getListUsers());
    dispatch(listBlogs());
  }, [dispatch]);

  useEffect(() => {
    if ((img === undefined) & (title === undefined)) {
      setMainPicture(foto1);
      setTitlePicture("Bienvenido a tu recetario personal");
    } else {
      setMainPicture(img);
      setTitlePicture(title);
    }
  }, []);

  const formatDate = (date) => {
    return String(date)
      .split(":")[0]
      .substring(0, String(date).split(":")[0].length - 3);
  };

  const deleteHandler = (id) => {
    if (window.confirm("¿Deseas borrar este blog?")) {
      dispatch(deleteBlogAction(id));
    }
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Messages>{error}</Messages>
      ) : (
        <div className="grid justify-items-center py-10 bg-red-100">
          <FeedWelcome imgPost={mainPicture} titlePost={titlePicture} />
          {blogs &&
            blogs.map((blog) => (
              <div className="py-8">
                <div className="max-w-md mx-auto  bg-white shadow-lg rounded-md overflow-hidden md:max-w-md">
                  <div className="md:flex">
                    <div className="w-full">
                      <div className="p-4 flex justify-between items-center align-baseline capitalize">
                        <p>
                          <b>{blog.title}</b>
                        </p>
                      </div>
                      <div className="p-4 flex justify-between items-center align-baseline">
                        <p>{String(blog.comentary).substring(0, 150)}...</p>
                      </div>

                      <div className="p-4 flex justify-between items-center">
                        <div className="flex flex-row items-center ">
                          <a
                            style={{ textDecoration: "none" }}
                            href={`/soloBlog/${blog.id}`}
                            className="group relative flex  justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                          >
                            Ver Más
                          </a>
                          <p className="mb-2 pl-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
                            {formatDate(blog.date)}
                          </p>
                        </div>
                        {isEditable ? (
                          <div className="p-4 flex justify-between items-center">
                            <div className="flex flex-row items-center">
                              <a
                                href={`/editBlog/${blog.id}`}
                                className="group mx-6 relative flex  justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                              >
                                {" "}
                                <AiFillEdit size={30} />
                              </a>

                              <button
                                onClick={() => deleteHandler(blog.id)}
                                className="group relative flex  justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                              >
                                {" "}
                                <BsFillTrashFill size={30} />
                              </button>
                            </div>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}
    </>
  );
}
