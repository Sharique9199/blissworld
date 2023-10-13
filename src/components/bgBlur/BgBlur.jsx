import React from 'react'
import style from './Bgblur.module.css'
import { usePopUp } from '../../context/popUp'

const BgBlur = () => {
    const [popUpData] = usePopUp();
    console.log(popUpData);
    return (
        <>
            {/* <div className={style.blurDiv} style={{ height: popUpData.bgHeight }}>

            </div> */}
        </>
    )
}

export default BgBlur
