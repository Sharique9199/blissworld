import React from 'react'
import Layout from '../../Layout'
import style from './AddToCart.module.css'
import CartItems from '../../components/CartItems/CartItems'
import { useCart } from '../../context/cart'
import { Link } from 'react-router-dom'

const AddToCart = () => {
    let totalPrice=0;
    const [cart, setCart] = useCart();
    // console.log("itemCount1",itemCount);

    return (
        <Layout>

            <div className={style.cart}>
                <h1>cart</h1>
                <div className={style["cart_heading"]}>
                    <div id={style.product}>
                        <h2>Product</h2>
                    </div>
                    <div id={style.quantity}>
                        <h2>Quantity</h2>
                    </div>
                    <div id={style.total}>
                        <h2>Total</h2>
                    </div>

                </div>
                <hr/>
                   
                {cart.map((item, i) => {
                    totalPrice +=item.price*item.itemCount;
                    return <CartItems
                        key={i}
                        img={item.img}
                        title={item.title}
                        desc={item.desc}
                        price={item.price}
                        itemCount={item.itemCount}/>
                })}
                <hr />

                <div className={style["cart_calculation"]}>
                    <div>
                        <img src="https://tubular-queijadas-b99c86.netlify.app/static/media/payment_img.451644cd43eb50a51bd9.PNG"
                            alt="" />
                    </div>
                    <div>
                        <h3>Total:${totalPrice}</h3>
                        <p>Shipping & taxes calculated at checkout</p>
                        <Link to='/checkout'><button id={style.checkout}>checkout</button></Link>
                    </div>

                </div>

            </div>

        </Layout >

    )

}

export default AddToCart;
