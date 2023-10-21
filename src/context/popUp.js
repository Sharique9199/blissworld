import { Children, createContext, useContext, useState } from "react";


const popUpContext = createContext();

const PopUpProvider = ({children}) => {

    const [popUpData,setPopUpData]=useState({
        image:"",
        title:'',
        desc:'',
        price:'',
        showPopUp:false,
        showPaymentPop:false,
        showBg:false,
        itemCount:1,
        bgHeight:0
    });
    return (
        <popUpContext.Provider value={[popUpData,setPopUpData]} >
            {children}
        </popUpContext.Provider>
    )
}

const usePopUp =() => useContext(popUpContext);

export {PopUpProvider,usePopUp}