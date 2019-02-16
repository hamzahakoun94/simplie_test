import React from "react";
import Body from "./components/Body/Body";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";

export const store = createStore(reducer);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Body />
      </Provider>
    );
  }
}

export default App;
