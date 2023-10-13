import React, { useState } from 'react'
import style from '../BagPopUp/BagPopUp.module.css'
import { MdDelete } from 'react-icons/md'
import { useCart } from '../../context/cart'
import toast from 'react-hot-toast'
import modulePopCart from '../../Page/PopUpCart/PopUpCart.module.css'


const BagSideShow = ({ img, title, price, desc, itemCount }) => {



    const [cart, setCart] = useCart();
    const countItemValue = itemCount;
    const [itemValue, setItemValue] = useState(countItemValue);

    const removeHandler = () => {
        console.log("Removed");
        const removedPopCart = cart.filter((item) => {
            return item.title !== title;
        })
        setCart(removedPopCart);
        localStorage.setItem('blissworld_cart', JSON.stringify(removedPopCart))
        toast.success("Items removed successfully")
    }
    //decrementPopUpHandler
    const decrementPopUpHandler = () => {
        itemValue > 1 && setItemValue(itemValue - 1)
        if (itemValue > 1) {
            const customCart = cart.map((item) => {
                if (item.title === title) {
                    return { ...item, itemCount: itemValue - 1 }
                }
                else {
                    return item;
                }
            })
            setCart(customCart);
            localStorage.setItem('blissworld_cart', JSON.stringify(customCart))
        }
    }
    //incrementPopUpHandler
    const incrementPopUpHandler = () => {
        itemValue < 10 && setItemValue(itemValue + 1);
        if (itemValue < 10) {
            const customCart = cart.map((item) => {
                if (item.title === title) {
                    return { ...item, itemCount: itemValue + 1 }
                }
                else {
                    return item;
                }
            })
            setCart(customCart);
            localStorage.setItem('blissworld_cart', JSON.stringify(customCart))
        }

    }
    return (
        <>

            <div className={style.imgAndDetailsContainer}>
                <div className={style.imgContainer}>
                    <img src={img} alt="" />
                </div>
                <div className={style.detailsContainer}>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                    <div className={style.totalFuncContainer}>
                        <div className={style.incAndDec}>
                            <p id={style.dec} onClick={decrementPopUpHandler}>-</p>
                            <p id={style.totalIncAndDec}> {itemValue}</p>
                            <p id={style.inc} onClick={incrementPopUpHandler}>+</p>
                        </div>
                        <div className={style.iconsdiv} >
                            <MdDelete onClick={removeHandler} />
                        </div>
                        <div className={style.priceDiv}>
                            <p>${price}</p>
                        </div>
                    </div>

                </div>

            </div>
            <hr />
        </>
    )
}

export default BagSideShow
