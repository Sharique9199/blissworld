import React, { useEffect, useState } from 'react'
import style from './Payment.module.css'
import { ImCross } from 'react-icons/im'
import { usePopUp } from '../../context/popUp'
import { useCart } from '../../context/cart';
import loaderImage from '../../images/loader.gif';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
    const [cart, setCart] = useCart();
    const [popUpData, setPopupData] = usePopUp();
    const [showLoader, setShowLoader] = useState(false);
    const navigate = useNavigate();
    const closePaymentPopUo = () => {
        setPopupData({
            showPaymentPop: false
        })

    }
    const paymentHandler = () => {
        setShowLoader(true)
    }

    useEffect(() => {
        setTimeout(() => {
            toast.success('order succesfully');
            navigate('/');
        }, 5000)
    }, []);


    return (
        showLoader ?
            (
                <div>
                    <img src={loaderImage} alt="loaderImage" />
                </div>
            ) :
            (
                <div className={` ${style.animated}
          ${style.faster} ${style.fedIn} ${style.mainPopUpContainer}`}>
                    <div className={style.paymentcontainer}>
                        <div className={style.paymmentCardTitle}>
                            <h4>Enter Card Details.</h4>
                            < ImCross className={`${style.crossIcon} ${style.fedOut}`} onClick={closePaymentPopUo} />
                        </div>
                        <div className={style.cartDetailsAndImage}>
                            <div className={style.cartDetails}>
                                <form action="" className={style.paymentFormCont}>
                                    <label htmlFor="cardNumber">Card Number:</label>

                                    <input type='nuumber' id="cardNumber" className={style.cardNo} required placeholder='Enter Card number' />
                                    <br />

                                    <label htmlFor="holderName">Card Holder Name:</label>
                                    <input type='text' id='holderName' className={style.name} required placeholder='Card Holder Name' />
                                </form>
                                <div className={style.expiry}>
                                    <p>Expairy Date:</p>
                                    <select name="" id="">
                                        <option value="">1</option>
                                        <option value="">2</option>
                                        <option value="">3</option>
                                        <option value="">4</option>
                                        <option value="">5</option>
                                        <option value="">6</option>
                                        <option value="">7</option>
                                        <option value="">8</option>
                                        <option value="">9</option>
                                        <option value="">10</option>
                                        <option value="">11</option>
                                        <option value="">12</option>
                                    </select>
                                    <select name="" id="">
                                        <option value="">2023</option>
                                        <option value="">2024</option>
                                        <option value="">2025</option>
                                        <option value="">2026</option>
                                        <option value="">2027</option>
                                        <option value="">2028</option>
                                        <option value="">2029</option>
                                        <option value="">2030</option>
                                    </select>
                                </div>
                            </div>
                            <div className={style.cardImg}>
                                <div className={style.bliss}>
                                    <p>bliss World accept all creadit and debit card !</p>
                                </div>
                                <div>
                                    <img src="https://img4.wsimg.com/help/images/mya/8061/050114/cards_large.jpg" alt="" />
                                </div>
                                <div>price:$250</div>
                            </div>
                        </div>

                        <div className={style.paymetSucesBtn}>
                            <button onClick={paymentHandler}>Order</button>
                        </div>
                    </div>
                </div>
            )
    )
}

export default Payment
