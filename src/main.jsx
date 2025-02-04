import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/index.js";
import {ThemeProvider as NextThemesProvider} from "next-themes";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <NextUIProvider>
        <NextThemesProvider attribute="class" defaultTheme="light">
          <App />
        </NextThemesProvider>
        </NextUIProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);  
