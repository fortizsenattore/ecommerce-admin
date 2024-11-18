import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home.jsx";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "../redux/configStore.js";
import { Provider } from "react-redux";

const router = createBrowserRouter([{ path: "/", element: <Home /> }]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </StrictMode>
);
