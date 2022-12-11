import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { blogActionDetails, createBlogComment } from "../actions/blogActions";
import { getListUsers } from "../actions/userActions";
import Messages from "./Messages";
import Loader from "./Loader";
import { BLOG_CREATE_COMMENT_RESET } from "../constants/blogConstants";

export default function SoloBlog() {
  const { id } = useParams();

  const [text, setText] = useState("");
  const commentBlog = useSelector((state) => state.commentBlog);
  const { success } = commentBlog;

  const dispatch = useDispatch();

  const soloBlog = useSelector((state) => state.soloBlog);
  const { loading, error, blog } = soloBlog;

  const userList = useSelector((state) => state.userList);
  const { users } = userList;

  useEffect(() => {
    // if (success) {
    //   setText("");
    //   dispatch({ type: BLOG_CREATE_COMMENT_RESET });
    // }
    // dispatch(getListUsers());
    dispatch(blogActionDetails(id));
  }, [dispatch, success]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createBlogComment(id, { text }));
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Messages>{error}</Messages>
      ) : (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-6">
          <div>
            <div className="py-10 bg-red-100">
              <div className="py-0" key={blog.id}>
                <div className="max-w-md mx-auto bg-white shadow-lg rounded-md overflow-hidden md:max-w-md">
                  <div className="md:flex">
                    <div className="w-full">
                      <div className="flex justify-between items-center m-1">
                        <div className="flex flex-row items-center"></div>
                      </div>
                      <div className="p-4 flex justify-between items-center object-cover">
                        <img src={blog.msg?.img} />
                      </div>
                      <div className="p-4 flex justify-between text-center font-bold capitalize text-2xl">
                        <p>{blog.msg?.title}</p>
                      </div>
                      <div className="p-4 flex justify-between text-center leading-loose">
                        <ul className="">
                          <li>{blog.msg?.comentary}</li>
                        </ul>
                      </div>
                      <div className="p-4 flex justify-between items-center">
                        <div className="flex flex-row items-center ">
                          <p className="mb-2 pl-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
                            {blog.date?.substring(0, 10)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="mt-8 mb-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              ¿Deseas comentar algo más a esta receta?
            </h2>

            <form onSubmit={submitHandler}>
              <div>
                <div className="mt-1 p-4">
                  <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    type="text"
                    id="text"
                    rows={3}
                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
                    placeholder="Comentalo aquí!"
                  />
                </div>
              </div>
              <div className="bg-white px-4 py-3 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                  ¿Qué te gustaria recomendar?
                </button>
              </div>
            </form>

            {blog.comments &&
              blog.comments.map((comment) => (
                <>
                  {users &&
                    users.map((u) => (
                      <div key={comment.id} className="flex justify-center">
                        {u.user_name === comment.user && (
                          <div className="py-6">
                            <div>
                              <img
                                className="object-cover w-24 h-24 rounded-full shadow"
                                src={`http://127.0.0.1:8080${u.image}`}
                                alt="Person"
                              />
                              <div className="flex flex-col justify-center mt-2">
                                <p className="text-lg font-bold">
                                  {comment.user}
                                </p>
                                <p className="mb-4 text-xs text-gray-800">
                                  {comment.date.substring(0, 10)}
                                </p>
                                <p className="text-sm tracking-wide text-gray-800">
                                  {comment.text}
                                </p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                </>
              ))}
          </div>
        </div>
      )}
    </>
  );
}
