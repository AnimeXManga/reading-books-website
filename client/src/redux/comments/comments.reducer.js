import produce from "immer";
import { CommentState } from "./comments.initial-state";
import { commonHandler } from "../common";
import { Types } from "./comments.actions";
import _ from "lodash";

const rawCommentReducer = (state, action) => {
  state = commonHandler(state, action, CommentState);
  const data = action.data;

  switch (action.type) {
    case Types.getCommentList:
      _.set(state, "commentList", data.data);
      return state;

    case Types.postCommentsRequest:
      _.set(state, "submiting", true);
      return state;
    case Types.postCommentsSuccess:
      _.set(state, "commentList", data.data.concat(data.list));
      _.set(state, "submiting", false);
      return state;

    case Types.setCommentState:
      const stateUpdate = data.state;
      for (const key in stateUpdate) {
        state = _.set(state, key, stateUpdate[key]);
      }
      return state;

    case Types.cleanCommentState:
      state = _.set(state, data.stateTitle, CommentState[data.stateTitle]);
      return state;
    default:
      return state;
  }
};

export const commentReducer = produce(rawCommentReducer, CommentState);
