import React from 'react'
import Layout from '../../Layout'
import style from './Checkout.module.css'
import CheckoutItemList from '../../components/CheckoutItemList/CheckoutItemList'
import { useCart } from '../../context/cart'

const Checkout = () => {

    const [cart,setCart]=useCart();
  return (
    <Layout>
        <div className={style.checkoutContainer}>

            <div className={style.checkoutFormContainer}>
                
            <div className={style.formImgCont}>
                    <img src="https://tubular-queijadas-b99c86.netlify.app/static/media/checkout_img.b501e5e3e1194507f9cb.PNG"
                        alt=""/>
                </div>

                <form className={style.checkoutFormCont}>
                    <h2 className={style.contactInfo}>Contact information</h2>
                    <div className={style.inputLargeDiv}>
                        <label htmlFor="email">
                            <p>Email</p>
                        </label>
                        <br/>
                        <input type="email" id="email"/>
                    </div>
                    {/* <h2 class="contact_info">Contact inhtmlFormation</h2> */}

                    <div className={style.inputLargeDiv}>
                        <label htmlFor="email">
                            <p>Country/region</p>
                        </label>
                        <br/>
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
                                <label htmlFor="email">
                                    <p>First Name</p>
                                </label>
                                <br/>
                                <input type="text" id="email"/>
                            </div>
                        </div>
                        <div>
                            <div className={style.inputLargeDiv}>
                                <label htmlFor="email">
                                    <p>Last Name</p>
                                </label>
                                <br/>
                                <input type="text" id="email"/>
                            </div>
                        </div>
                    </div>

                    <div className={style.inputLargeDiv}>
                        <label htmlFor="email">
                            <p>Shreveport</p>
                        </label>
                        <br/>
                        <input type="text" id="email"/>
                    </div>

                    <div className={style.inputLargeDiv}>
                        <label htmlFor="apartments">
                            <p>Apartments, suite, etc.</p>
                        </label>
                        <br/>
                        <input type="text" id="apartments"/>
                    </div>
                    

                    <div className={style.subStatePost}>
                    {/* <div lassName={style.nameDivSection}> */}
                        <div>
                            <div className={style.inputLargeDiv}>
                                <label htmlFor="suburb">
                                    <p>Suburb</p>
                                </label>
                                <br/>
                                <input type="text" id="suburb"/>
                            </div>
                        </div>
                        <div>
                            <div className={style.inputLargeDiv}>
                                <label htmlFor="email">
                                    <p>State/territory</p>
                                </label>
                                <br/>
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
                                <label htmlFor= "email">
                                    <p>Postcode</p>
                                </label>
                                <br/>
                                <input type="number" id="postcode"/>
                            </div>
                        </div>
                    </div>

                    <div className={style.inputLargeDiv}>
                        <label htmlFor="number">
                            <p>Phone</p>
                        </label>
                        <br/>
                        <input type="tel"/>
                    </div>

                    <button id={style.continue}>Continue to Shopping</button>
                </form>
            </div>


            <div className={style.checkoutImgContainer}>

            <div className={style.tableData}>
                    <table className={style.scrollData}>

                        {
                            cart.map((el,i)=>{
                                return<CheckoutItemList
                                key={i}
                                img={el.img}
                                title={el.title}
                                price={el.price}/> 
                            })
                        }
                       {/* <CheckoutItemList/> 
                       <CheckoutItemList/>  */}
                        {/* <tr>
                            <td className={style.scrollImgCart}>
                                <img src="https://cdn11.bigcommerce.com/s-9p889rxpkb/images/stencil/1200w/products/406/1277/Youth_Got_This_Moisturizer_Front__84970.1678830050.jpg"
                                    alt=""/>
                            </td>
                            <td className={style.scrollDetailsCart}>
                                <p>Youth Got This Moisturizer</p>
                            </td>
                            <td className={style.scrollPriceCart}>
                                <p>$28</p>
                            </td>
                        </tr>

                        <tr>
                            <td className={style.scrollImgCart}>
                                <img src="https://cdn11.bigcommerce.com/s-9p889rxpkb/images/stencil/1200w/products/406/1277/Youth_Got_This_Moisturizer_Front__84970.1678830050.jpg"
                                    alt=""/>
                            </td>
                            <td className={style.scrollDetailsCart}>
                                <p>Youth Got This Moisturizer</p>
                            </td>
                            <td className={style.scrollPriceCart}>
                                <p>$28</p>
                            </td>
                        </tr>
                        <tr>
                            <td className={style.scrollImgCart}>
                                <img src="https://cdn11.bigcommerce.com/s-9p889rxpkb/images/stencil/1200w/products/406/1277/Youth_Got_This_Moisturizer_Front__84970.1678830050.jpg"
                                    alt=""/>
                            </td>
                            <td className={style.scrollDetailsCart}>
                                <p>Youth Got This Moisturizer</p>
                            </td>
                            <td className={style.scrollPriceCart}>
                                <p>$28</p>
                            </td>
                        </tr>
                        <tr>
                            <td className={style.scrollImgCart}>
                                <img src="https://cdn11.bigcommerce.com/s-9p889rxpkb/images/stencil/1200w/products/406/1277/Youth_Got_This_Moisturizer_Front__84970.1678830050.jpg"
                                    alt=""/>
                            </td>
                            <td className={style.scrollDetailsCart}>
                                <p>Youth Got This Moisturizer</p>
                            </td>
                            <td className={style.scrollPriceCart}>
                                <p>$28</p>
                            </td>
                        </tr>
                        <tr>
                            <td className={style.scrollImgCart}>
                                <img src="https://cdn11.bigcommerce.com/s-9p889rxpkb/images/stencil/1200w/products/406/1277/Youth_Got_This_Moisturizer_Front__84970.1678830050.jpg"
                                    alt=""/>
                            </td>
                            <td className={style.scrollDetailsCart}>
                                <p>Youth Got This Moisturizer</p>
                            </td>
                            <td className={style.scrollPriceCart}>
                                <p>$28</p>
                            </td>
                        </tr>
                        <tr>
                            <td className={style.scrollImgCart}>
                                <img src="https://cdn11.bigcommerce.com/s-9p889rxpkb/images/stencil/1200w/products/406/1277/Youth_Got_This_Moisturizer_Front__84970.1678830050.jpg"
                                    alt=""/>
                            </td>
                            <td className={style.scrollDetailsCart}>
                                <p>Youth Got This Moisturizer</p>
                            </td>
                            <td className={style.scrollPriceCart}>
                                <p>$28</p>
                            </td>
                        </tr>
                        <tr>
                            <td className={style.scrollImgCart}>
                                <img src="https://cdn11.bigcommerce.com/s-9p889rxpkb/images/stencil/1200w/products/406/1277/Youth_Got_This_Moisturizer_Front__84970.1678830050.jpg"
                                    alt=""/>
                            </td>
                            <td className={style.scrollDetailsCart}>
                                <p>Youth Got This Moisturizer</p>
                            </td>
                            <td className={style.scrollPriceCart}>
                                <p>$28</p>
                            </td>
                        </tr>
                        <tr>
                            <td className={style.scrollImgCart}>
                                <img src="https://cdn11.bigcommerce.com/s-9p889rxpkb/images/stencil/1200w/products/406/1277/Youth_Got_This_Moisturizer_Front__84970.1678830050.jpg"
                                    alt=""/>
                            </td>
                            <td className={style.scrollDetailsCart}>
                                <p>Youth Got This Moisturizer</p>
                            </td>
                            <td className={style.scrollPriceCart}>
                                <p>$28</p>
                            </td>
                        </tr> */}
                    </table>

                </div>
                <hr id={style.upLine}/>
                <div className={style.calculateItems}>
                    <p>Subtotal</p>
                    <p>$118</p>
                </div>
                <div  className={style.calculateItems}>
                    <p>Sipping</p>
                    <p>$118</p>
                </div>
                <hr id={style.downLine}/>
                <div className={style.calculateItems} id={style.total}>
                    <p>Total</p>
                    <p>$118</p>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default Checkout
