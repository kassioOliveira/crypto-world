import { LayoutBaseComponent } from "./LayoutStyle"



export const LayoutBase = ({children}) => {

    return(
        <LayoutBaseComponent>
              {children}
        </LayoutBaseComponent>
    );
};