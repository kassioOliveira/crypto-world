import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "./routes"

import GlobalStyled from "./globalStyle";
import { AppMenuContextProvider } from "./shared/contexts/MenuContext";

export const App = () => {
  return (
    <>
    <GlobalStyled/>
    <AppMenuContextProvider>
    <BrowserRouter>
    <AppRoutes/>
    </BrowserRouter>
    </AppMenuContextProvider>
    </>
  );
};
