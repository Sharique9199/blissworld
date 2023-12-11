import React from 'react'
import Layout from '../../Layout'
import style from './Checkout.module.css'
import CheckoutItemList from '../../components/CheckoutItemList/CheckoutItemList'
import { useCart } from '../../context/cart'
import { usePopUp } from '../../context/popUp';
import loader from '../../images/loader.gif';

const Checkout = () => {
    const [popUpData, setPopupData] = usePopUp();
    const showPaymentPopUp = () => {
        setPopupData(
            {
                showPaymentPop: true
            }
        )
    }

    const [cart, setCart] = useCart();

    const subTotal = () => {
        let subTotalOrderPrice = 0;
        for (let i of cart) {
            subTotalOrderPrice += (i.itemCount * i.price)
        }
        return subTotalOrderPrice;
    }

    return (
        <Layout>
            <div className={style.checkoutContainer}>

                <div className={style.checkoutFormContainer}>

                    <div className={style.formImgCont}>
                        <img src="https://tubular-queijadas-b99c86.netlify.app/static/media/checkout_img.b501e5e3e1194507f9cb.PNG"
                            alt="" />
                    </div>

                    <form className={style.checkoutFormCont}>
                        <h2 className={style.contactInfo}>Contact information</h2>
                        <div className={style.inputLargeDiv}>
                            <label htmlFor="email">
                                <p>Email</p>
                            </label>
                            <br />
                            <input type="email" id="email" required />
                        </div>
                        {/* <h2 class="contact_info">Contact inhtmlFormation</h2> */}

                        <div className={style.inputLargeDiv}>
                            <label htmlFor="email">
                                <p>Country/region</p>
                            </label>
                            <br />
                            <select name="" id="">
                                <option value="">United States</option>
                                <option value="">England</option>
                                <option value="">India</option>
                                <option value="">France</option>
                                <option value="">Argentina</option>
                                <option value="">Moroco</option>
                                <option value="">Finland</option>
                                <option value="">Uganda</option>
                                <option value="">Brazil</option>
                                <option value="">Norway</option>
                            </select>
                        </div>
                        <div className={style.nameDivSection}>
                            <div>
                                <div className={style.inputLargeDiv}>
                                    <label htmlFor="fName">
                                        <p>First Name</p>
                                    </label>
                                    <br />
                                    <input type="text" id="fName" required />
                                </div>
                            </div>
                            <div>
                                <div className={style.inputLargeDiv}>
                                    <label htmlFor="lName">
                                        <p>Last Name</p>
                                    </label>
                                    <br />
                                    <input type="text" id="lName" required />
                                </div>
                            </div>
                        </div>

                        <div className={style.inputLargeDiv}>
                            <label htmlFor="shrev">
                                <p>Shreveport</p>
                            </label>
                            <br />
                            <input type="text" id="shrev" required />
                        </div>

                        <div className={style.inputLargeDiv}>
                            <label htmlFor="apartments">
                                <p>Apartments, suite, etc.</p>
                            </label>
                            <br />
                            <input type="text" id="apartments" />
                        </div>


                        <div className={style.subStatePost}>
                            {/* <div lassName={style.nameDivSection}> */}
                            <div>
                                <div className={style.inputLargeDiv}>
                                    <label htmlFor="suburb">
                                        <p>Suburb</p>
                                    </label>
                                    <br />
                                    <input type="text" id="suburb" />
                                </div>
                            </div>
                            <div>
                                <div className={style.inputLargeDiv}>
                                    <label htmlFor="email">
                                        <p>State/territory</p>
                                    </label>
                                    <br />
                                    <select name="" id="">
                                        <option value="">Austrilian Capital Ter</option>
                                        <option value="">HongKong</option>
                                        <option value="">shgdsgf</option>
                                        <option value="">svdgsf</option>
                                        <option value="">sDFSHGSD</option>
                                        <option value="">shdgsds</option>
                                        <option value="">wgSFHSGFS</option>
                                        <option value="">ewwtsfdv</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <div className={style.inputLargeDiv}>
                                    <label htmlFor="email">
                                        <p>Postcode</p>
                                    </label>
                                    <br />
                                    <input type="number" id="postcode" required />
                                </div>
                            </div>
                        </div>

                        <div className={style.inputLargeDiv}>
                            <label htmlFor="number">
                                <p>Phone</p>
                            </label>
                            <br />
                            <input type="tel" required />
                        </div>

                        <div className={style.ContAndPayContainer}>
                            <button className={style.continue}>Continue to Shopping</button>
                            <button className={style.continue} onClick={showPaymentPopUp}>Payment</button>
                        </div>
                    </form>
                </div>


                <div className={style.checkoutImgContainer}>

                    <div className={style.tableData}>
                        <table className={style.scrollData}>

                            {
                                cart.map((el, i) => {
                                    return <CheckoutItemList
                                        key={i}
                                        img={el.img}
                                        title={el.title}
                                        price={el.price}
                                        itemCount={el.itemCount} />
                                })
                            }

                        </table>

                    </div>
                    <hr id={style.upLine} />
                    <div className={style.calculateItems}>
                        <p>Subtotal</p>
                        <p>${subTotal()}</p>
                    </div>
                    <div className={style.calculateItems}>
                        <p>Sipping</p>
                        <p>${(subTotal() * 0.1).toFixed(2)}</p>
                    </div>
                    <hr id={style.downLine} />
                    <div className={style.calculateItems} id={style.total}>
                        <p>Total</p>
                        <p>${subTotal() + Number((subTotal() * 0.1).toFixed(2))}</p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Checkout
