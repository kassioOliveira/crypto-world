import { Header } from "../../components/Header/Header";
import { LayoutBaseComponent, MainComponenet } from "./LayoutStyle"



export const LayoutBase = ({children}) => {

    return(
        <LayoutBaseComponent>
            <Header/>
            <MainComponenet>
            {children}
            </MainComponenet>   
        </LayoutBaseComponent>
    );
};