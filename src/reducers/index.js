import { combineReducers } from "redux";
// import { persistStore, persistCombineReducers } from "redux-persist";
// import storage from "redux-persist/es/storage";

import { reducer as components_reducer } from "./components_reducer";

// const loggerMiddleware = createLogger();

// const middleware = [thunk, loggerMiddleware];

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const configureStore = composeEnhancers(applyMiddleware(...middleware))(
//   createStore
// );

// export const config = {
//   key: "root",
//   storage,
//   stateReconciler: autoMergeLevel2,
//   // blacklist: [],
//   whitelist: []
// };

const combinedReducer = combineReducers({
  componentsReducer: components_reducer
});

// const createAppStore = () => {
//   let store = configureStore(combinedReducer);
//   let persistor = persistStore(store);

//   return { persistor, store };
// };

export default combinedReducer;
