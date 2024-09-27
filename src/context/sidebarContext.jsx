import { createContext, useState } from "react";

export const SidebarContext = createContext();

export function SidebarProvider({children}){

    const [show, setShow] = useState(false);
    
    const changeSidebarMode = () => {
        setShow((show) => !show);
        console.log(show);
        
    }

    return(
        <SidebarContext.Provider value={{show, changeSidebarMode}}>
            {children}
        </SidebarContext.Provider>
    )
}