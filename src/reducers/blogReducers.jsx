import {
  BLOG_LIST_REQUEST,
  BLOG_LIST_SUCCESS,
  BLOG_LIST_FAIL,
  BLOG_CREATE_REQUEST,
  BLOG_CREATE_SUCCESS,
  BLOG_CREATE_FAIL,
  BLOG_DETAILS_REQUEST,
  BLOG_DETAILS_SUCCESS,
  BLOG_DETAILS_FAIL,
  BLOG_CREATE_COMMENT_REQUEST,
  BLOG_CREATE_COMMENT_SUCCESS,
  BLOG_CREATE_COMMENT_FAIL,
  BLOG_CREATE_COMMENT_RESET,
  BLOG_UPDATE_REQUEST,
  BLOG_UPDATE_SUCCESS,
  BLOG_UPDATE_FAIL,
  BLOG_UPDATE_RESET,
  BLOG_DELETE_REQUEST,
  BLOG_DELETE_SUCCESS,
  BLOG_DELETE_FAIL,
} from "../constants/blogConstants";

export const blogListReducer = (state = { blogs: [] }, action) => {
  switch (action.type) {
    case BLOG_LIST_REQUEST:
      return { loading: true, blogs: [] };

    case BLOG_LIST_SUCCESS:
      return { loading: false, blogs: action.payload };

    case BLOG_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const blogDetailsReducer = (state = { blog: [] }, action) => {
  switch (action.type) {
    case BLOG_DETAILS_REQUEST:
      return { loading: true, ...state };

    case BLOG_DETAILS_SUCCESS:
      return { loading: false, blog: action.payload };

    case BLOG_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
