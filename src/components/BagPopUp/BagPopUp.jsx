import React from 'react'
import style from './BagPopUp.module.css'
import Layout from '../../Layout'
import { MdDelete } from 'react-icons/md'
import { useCart } from '../../context/cart'
import BagSideShow from '../BagSideShow/BagSideShow'
import { Link } from 'react-router-dom'
// import ItemsPopUp from '../../components/BagItemsPopUp/ItemsPopUp'
// import style1 from '../../Page/PopUpCart/PopUpCart.module.css'




const BagPopUp = () => {
    const [cart, setCart] = useCart();
    return (
        <>
        {/* <div className={` ${style.animated}
       ${style.faster} ${style.fedIn} ${style.mainPopUpContainer}`}  > */}
            <div className={style.bagPopUpContainer}>
         
                <div className={style.viewShopAndKeepShowCon}>
                {/* <div className={` ${style.fedOut}`}> */}
                    <Link to='/'><p>&lt; Keep Shopping</p></Link>
                    <Link to='/total-items'><p>View Shopping page &gt;</p></Link>
                </div>
                <div className={style.itemHeading}>
                    <h3>Shopping Bag</h3>
                    <p>({cart.length})</p>
                </div>


                {
                    cart.map((items, i) => {
                        return <BagSideShow
                            key={i}
                            img={items.img}
                            title={items.title}
                            desc={items.desc}
                            price={items.price}
                            itemCount={items.itemCount} />

                    })
                }


            </div>
          
        {/* // </div> */}
        </>
        
    )
}

export default BagPopUp;
