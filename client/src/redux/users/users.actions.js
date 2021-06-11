import FetchApi from "../../fetch-api";
import { createAction } from "../common";

export const Types = {
  getUserDetail: "app.users.get-user",
  postRegister: "app.users.register",
  postLogin: "app.users.login",
  setUserState: "app.users.set-user-state",
  cleanUserState: "app.users.clean-user-state",
};

//goi api lay chi tiet tung user
export const getUserDetail = (id) => {
  return (dispatch) => {
    return FetchApi(`account/api-account-detail/${id}/`, "GET").then((data) => {
      dispatch(createAction(Types.getUserDetail, { data }));
      return data;
    });
  };
};

//post register
export const postRegister = (body) => {
  return (dispatch) => {
    return fetch("http://127.0.0.1:8000/register/", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then(async (response) => {
      if (response.status === 200) {
        dispatch(createAction(Types.postRegister, null, "Đăng kí thành công"));
        return true;
      } else {
        dispatch(
          createAction(Types.postRegister, null, "Tên người dùng bị trùng")
        );
        return false;
      }
    });
  };
};

//post login
export const postLogin = (body) => {
  return (dispatch) => {
    return fetch("http://127.0.0.1:8000/login/", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then(async (response) => {
      const res = await response.json();
      if (res.status === 200) {
        dispatch(
          createAction(
            Types.postLogin,
            { id: res.id, isLogin: true },
            res.message
          )
        );
        return { res, isLogin: true };
      } else {
        dispatch(
          createAction(Types.postLogin, { id: "", isLogin: false }, res.message)
        );
        return { res, isLogin: false };
      }
    });
  };
};

//gan gia tri vao state
export const setUserState = (state) => (dispatch) => {
  dispatch(createAction(Types.setUserState, { state }));
};

//khoi phuc state
export const cleanUserState = (stateTitle) => (dispatch) => {
  dispatch(createAction(Types.cleanUserState, { stateTitle }));
};
