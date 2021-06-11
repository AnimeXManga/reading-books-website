import FetchApi from "../../fetch-api";
import { createAction } from "../common";

export const Types = {
  getCommentList: "app.comments.get-comment-list",

  postCommentsRequest: "app.comments.post-comment-request",
  postCommentsSuccess: "app.comments.post-comment-success",

  setCommentsState: "app.comments.set-comment-state",
  cleanCommentsState: "app.comments.clean-comment-state",
};

//gọi api lấy thông tin cái dòng bình luận của một chương
//id (cua cmy), post(id chuong), author (tac gia), body (noi dung), date (ngay gio cmt)
export const getCommentList = (id) => {
  return (dispatch) => {
    return FetchApi(`sach/chuong-comment/${id}/`, "GET").then((data) => {
      dispatch(createAction(Types.getCommentList, { data }));
      return data;
    });
  };
};

//post api comment: post (id chuong), author (tacgia), body (noi dung cmt)

export const postComments = (id, body) => {
  return (dispatch, getState) => {
    dispatch(createAction(Types.postCommentsRequest));
    const { commentList } = getState().comments;
    const dataArr = [];
    return fetch(`http://127.0.0.1:8000/sach/${id}/`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then(async (response) => {
      const res = await response.json();
      if (res.status === 200) {
        dataArr.push(res.data);
        dispatch(
          createAction(Types.postCommentsSuccess, { data: dataArr, list: commentList }, null)
        );
        return res;
      } else return false;
    });
  };
};

//gan gia tri vao state
export const setCommentState = (state) => (dispatch) => {
  dispatch(createAction(Types.setCommentsState, { state }));
};

//khoi phuc state
export const cleanCommentState = (stateTitle) => (dispatch) => {
  dispatch(createAction(Types.cleanCommentsState, { stateTitle }));
};
