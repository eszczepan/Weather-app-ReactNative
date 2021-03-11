import React, { FC } from "react";
import { Provider } from "react-redux";

import store from "./store";
import Main from "./src/Main";

const App: FC = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);

export default App;
