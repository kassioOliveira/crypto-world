import { useCallback, useRef } from "react";


export const useDebounce = (delay = 1800,notDelayInFirstTime = true) => {

    const debouncing = useRef(null);
    const isFirstTime = useRef(notDelayInFirstTime);

    const debounce = useCallback((func) => {
        if(isFirstTime.current){
            isFirstTime.current = false;
            func();
        }else{
            if(debouncing.current){
                clearTimeout(debouncing.current);
            }

            debouncing.current = setTimeout(() => func(),delay);
        }
    }, [delay]);

    return {debounce};

};