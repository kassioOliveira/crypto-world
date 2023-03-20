import { Header } from "../../components/Header/Header";
import { LayoutBaseComponent } from "./LayoutStyle"



export const LayoutBase = ({children}) => {

    return(
        <LayoutBaseComponent>
            <Header/>
              {children}
        </LayoutBaseComponent>
    );
};