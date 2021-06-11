import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import { bookReducer as books } from "./books";
import { userReducer as users } from "./users";
import { commentReducer as comments } from "./comments";
import { createBrowserHistory } from "history";
export const history = createBrowserHistory();

export const reducer = combineReducers({
  router: connectRouter(history),
  books,
  users,
  comments,
});
