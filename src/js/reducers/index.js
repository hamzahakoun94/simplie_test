import * as AT from "../constants/action-types";
const initialState = {
  articles: []
};

function rootReducer(state = initialState, action) {
  if (action.type === AT.ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }
  return state;
}
export default rootReducer;
