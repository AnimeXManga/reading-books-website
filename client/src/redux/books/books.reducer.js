import produce from "immer";
import { BookState } from "./books.initial-state";
import { commonHandler } from "../common";
import { Types } from "./books.actions";
import _ from "lodash";

const rawBookReducer = (state, action) => {
  state = commonHandler(state, action, BookState);
  const data = action.data;
  switch (action.type) {
    case Types.getBookList:
      _.set(state, "bookList", data.data);
      _.set(state, "storingBookList", data.data);
      return state;

    case Types.getCategoryBook:
      _.set(state, "bookList", data.data);
      return state;

    case Types.getTypeBook:
      _.set(state, "bookList", data.data);
      return state;

    case Types.getBookDetail:
      _.set(state, "bookDetail", data.data);
      return state;

    case Types.getBookChapter:
      _.set(state, "chapterList", data.data);
      return state;

    case Types.getChapterDetail:
      _.set(state, "chapterDetail", data.data);
      return state;

    case Types.setBookState:
      const stateUpdate = data.state;
      for (const key in stateUpdate) {
        state = _.set(state, key, stateUpdate[key]);
      }
      return state;

    case Types.cleanBookState:
      state = _.set(state, data.stateTitle, BookState[data.stateTitle]);
      return state;

    default:
      return state;
  }
};

export const bookReducer = produce(rawBookReducer, BookState);
