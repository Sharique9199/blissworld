import React from 'react'
import style from '../../Page/Checkout/Checkout.module.css'

const CheckoutItemList = ({img,title,price, itemCount}) => {
    return (
        <>
            <table>
                <tr>
                    <td className={style.scrollImgCart}>
                        <img src={img}
                            alt="" />
                    </td>
                    <td className={style.scrollDetailsCart}>
                        <p>{title}</p>
                    </td>
                    <td className={style.scrollPriceCart}>
                        <p>${ itemCount*price}</p>
                    </td>
                </tr>
                {/* <hr /> */}
            </table>
        </>
    )
}

export default CheckoutItemList
