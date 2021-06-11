/* eslint-disable default-case */
import produce from "immer";
import { UserState } from "./users.initial-state";
import { commonHandler } from "../common";
import { Types } from "./users.actions";
import _ from "lodash";

const rawUserReducer = (state, action) => {
  state = commonHandler(state, action, UserState);
  const data = action.data;
  const message = action.message;
  switch (action.type) {
    case Types.getUserDetail:
      _.set(state, "userDetail", data.data);
      return state;

    case Types.postRegister:
      _.set(state, "message", message);
      return state;

    case Types.postLogin:
      console.log(data);
      _.set(state, "message", message);
      _.set(state, "isLogin", data.isLogin);
      _.set(state, "id", data.id);
      return state;

    case Types.setUserState:
      const stateUpdate = data.state;
      for (const key in stateUpdate) {
        state = _.set(state, key, stateUpdate[key]);
      }
      return state;

    case Types.cleanUserState:
      state = _.set(state, data.stateTitle, UserState[data.stateTitle]);
      return state;
    default:
      return state;
  }
};

export const userReducer = produce(rawUserReducer, UserState);
