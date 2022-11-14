import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  userLoginReducer,
  userRegisterReducer,
  userSoloReducer,
  userListReducer,
} from "./reducers/userReducers";

import { blogListReducer, blogCreateReducer } from "./reducers/blogReducers";

const reducer = combineReducers({
  //Usuario
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userSolo: userSoloReducer,
  userList: userListReducer,

  //Blog
  blogList: blogListReducer,
  blogCreate: blogCreateReducer,
});

const userInfoStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoStorage },
};

const middleware = [thunk];

const store = createStore(
  store,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
