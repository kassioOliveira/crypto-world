import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "./routes"

import GlobalStyled from "./globalStyle";

export const App = () => {
  return (
    <>
    <GlobalStyled/>
    <BrowserRouter>
    <AppRoutes/>
    </BrowserRouter>
    </>
  );
};
