import FetchApi from "../../fetch-api";
import { createAction } from "../common";

export const Types = {
  getBookList: "app.books.get-books-list",
  getCategoryBook: "app.books.get-category-book",
  getTypeBook: "app.books.get-type-book",
  getBookDetail: "app.books.get-book-detail",
  getBookChapter: "app.books.get-book-chapter",
  getChapterDetail: "app.books.get-chapter-detail",
  setBookState: "app.books.set-book-state",
  cleanBookState: "app.books.clean-book-state",
};

//goi api lay tat ca cac sach
export const getBookList = () => {
  return (dispatch) => {
    return FetchApi("sach/api-sach-list/", "GET").then((data) => {
      dispatch(createAction(Types.getBookList, { data }));
      return data;
    });
  };
};

//goi api lay danh muc sach
export const getCategoryBook = (id) => {
  return (dispatch) => {
    return FetchApi(`sach/sach-danhmuc/${id}/`, "GET").then((data) => {
      dispatch(createAction(Types.getCategoryBook, { data }));
      return data;
    });
  };
};

//goi api lay the loai sach
export const getTypeBook = (id) => {
  return (dispatch) => {
    return FetchApi(`sach/sach-theloai/${id}/`, "GET").then((data) => {
      dispatch(createAction(Types.getTypeBook, { data }));
      return data;
    });
  };
};

//goi api lay chi tiet tung cuon sach
export const getBookDetail = (id) => {
  return (dispatch) => {
    return FetchApi(`sach/api-sach-detail/${id}/`, "GET").then((data) => {
      dispatch(createAction(Types.getBookDetail, { data }));
      return data;
    });
  };
};

//goi api lay chuong cuon sach
export const getBookChapter = (id) => {
  return (dispatch) => {
    return FetchApi(`sach/chuong/${id}/`,"GET").then((data) => {
      dispatch(createAction(Types.getBookChapter, { data }));
      return data;
    });
  };
};

//goi api lay chi tiet mot chuong
export const getChapterDetail = (id) => {
  return (dispatch) => {
    return FetchApi(`sach/api-chuong-detail/${id}/`, "GET").then((data) => {
      dispatch(createAction(Types.getChapterDetail, { data }));
      return data;
    });
  };
};

//gan gia tri vao state
export const setBookState = (state) => (dispatch) => {
  dispatch(createAction(Types.setBookState, { state }));
};

//khoi phuc state
export const cleanBookState = (stateTitle) => (dispatch) => {
  dispatch(createAction(Types.cleanBookState, { stateTitle }));
};
