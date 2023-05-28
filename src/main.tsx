import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/index.ts";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import routes from "./routes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <MantineProvider theme={{ fontFamily: 'Open Sans' }} withGlobalStyles withNormalizeCSS>
        <BrowserRouter >
          <Routes>
            <Route path="/" element={<App />}>
              {routes.map((route, index) => <Route key={route.name + route.path + index} path={route.path} element={<route.element />} />)
              }
            </Route>
          </Routes>
        </BrowserRouter>
      </MantineProvider>
    </Provider>
  </React.StrictMode>
);
