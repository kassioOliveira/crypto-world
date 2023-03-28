import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "./routes"

import GlobalStyled from "./globalStyle";
import { AppMenuContextProvider } from "./shared/contexts/MenuContext";
import { MenuLateral } from "./shared/components/MenuLateral/MenuLateral";


export const App = () => {
  return (
    <>
    <GlobalStyled/>
    <AppMenuContextProvider>
    <BrowserRouter>
    <MenuLateral/>
    <AppRoutes/>
    </BrowserRouter>
    </AppMenuContextProvider>
    </>
  );
};
