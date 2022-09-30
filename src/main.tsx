import React from "react";
import ReactDOM from "react-dom/client";

import GlobalStyle from "./Global";

import ImageSearch from "./scene/ImageSearch/ImageSearch";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <ImageSearch />
  </React.StrictMode>
);
