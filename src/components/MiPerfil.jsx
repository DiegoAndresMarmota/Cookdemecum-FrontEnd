import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import Messages from "./Messages";
import { listBlogs } from "../actions/blogActions";

export default function MiPerfil() {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);

  const { userInfo } = userLogin;

  const blogList = useSelector((state) => state.blogList);
  const { error: errorBlog, loading: blogLoading, blogs } = blogList;

  useEffect(() => {
    dispatch(listBlogs());
  }, [dispatch]);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-6">
      <div className="overflow-hidden bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <center>
            <img
              className="h-40 w-55 rounded-full"
              src={`http://127.0.0.1:8000${userInfo.image}`}
              alt=""
            />
            <br></br>
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              {userInfo.user_name} &nbsp;&nbsp;&nbsp;&nbsp;
              <a
                style={{ textDecoration: "none" }}
                href={"/editProfile"}
                className=" bg-indigo-600 py-1 px-5 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Editar
              </a>
            </h3>
          </center>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Detalles personales
          </p>
        </div>

        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Usuario</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {userInfo.user_name}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Email</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {userInfo.email}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Acerca</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {userInfo.bio}
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <h2 className="mt-6 mb-6 text-center text-3xl font-bold tracking-tight text-gray-900">
        -- Blogueos --
      </h2>
    </div>
  );
}
