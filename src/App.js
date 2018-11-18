import React, { Component } from "react";
import SearchPage from "./pages/Search";
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <SearchPage />
      </Provider>
    );
  }
}

export default App;
