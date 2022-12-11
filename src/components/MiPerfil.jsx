import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import Messages from "./Messages";
import { listBlogs, deleteBlogAction } from "../actions/blogActions";
import { useParams } from "react-router-dom";
import fotoPerfil from "../styles/chef_perfil.png";
import modificarPlatillo from "../styles/modificar_platillo.png";

//Iconos
import { AiFillEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import Feed from "./Feed";

export default function MiPerfil() {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);

  const { id } = useParams();

  const deleteBlog = useSelector((state) => state.deleteBlog);
  const {
    error: errorDelete,
    loading: loadingDelete,
    success: successDelete,
  } = deleteBlog;

  const feedWelcomeProps = {
    isEditable: true,
    img: modificarPlatillo,
    title: "Bienvenido a tu perfil personal",
  };

  const { userInfo } = userLogin;

  const blogList = useSelector((state) => state.blogList);
  const { error: errorBlog, loading: blogLoading, blogs } = blogList;

  useEffect(() => {
    dispatch(listBlogs());
  }, [dispatch, successDelete]);

  const deleteHandler = (id) => {
    if (window.confirm("¿Deseas borrar este blog?")) {
      dispatch(deleteBlogAction(id));
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-6">
      <div className="overflow-hidden bg-red-100 shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <center>
            <img
              className="rounded-full h-44 w-44"
              // src={`http://127.0.0.1:8080${userInfo.image}`}
              src={fotoPerfil}
              alt="chef"
            />
            <br></br>
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Hola Chef&nbsp;&nbsp;&nbsp;&nbsp;
              <a
                style={{ textDecoration: "none" }}
                href={"/editProfile"}
                className=" bg-red-600 py-1 px-5 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                Modificar mi perfil
              </a>
            </h3>
          </center>
          <p className="mt-1 max-w-2xl text-lg text-black-500 font-bold">
            Información Personal
          </p>
        </div>

        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Usuario:</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {userInfo.user_name}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Email:</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {userInfo.email}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Biografia:</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {userInfo.bio}
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <h2 className="mt-6 mb-6 text-center text-3xl font-bold tracking-tight text-gray-900"></h2>
      <Feed {...feedWelcomeProps} />
    </div>
  );
}
