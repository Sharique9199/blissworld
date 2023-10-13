import style from './Header.module.css'
import { AiOutlineSearch } from 'react-icons/ai'
import { CiLocationOn } from 'react-icons/ci'
import { FaUser, FaShoppingCart } from 'react-icons/fa'
import { NavLink, Link } from 'react-router-dom'
import { useCart } from '../../context/cart'
import BagPopUp from '../BagPopUp/BagPopUp'
import { useState } from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'

const navigation = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'Bestsellers',
        path: '/bestseller'
    },
    {
        name: 'Skincare',
        path: '/skincare'
    },
    {
        name: 'Body & Haircare',
        path: '/bodyhaircare'
    },
    {
        name: 'Set & kits',
        path: '/setkits'
    },
    {
        name: 'sales',
        path: '/sales'
    },
    {
        name: 'This is Bliss',
        path: '/'
    },
]


export function Header() {

    const [showCart,setShowCart]=useState(false)
    const [cart] = useCart();

    const showCartHandler = () => {
        setShowCart(showCart?false:true);
    }
    return (
        <div className={style.HeaderPart}>
            <div style={{ display: 'flex', width: '90%', margin: '0px auto', paddingTop: '0.7rem' }}>
                <div className={style.seacrAndFind}>
                    <div>
                        <AiOutlineSearch className={style.headerIcons} />
                        <p >Search</p>
                    </div>
                    {/* <FaLocationDot/> */}
                    <div>
                        <CiLocationOn className={style.headerIcons}  />

                        <p >find us</p>
                    </div>

                </div>
                <div className={style.headerlogoText}>
                    {/* {<NavLink to={navigation.path}><h2>Bliss</h2></NavLink>} */}
                    {/* <h1>bliss</h1> */}
                    <Link to='/'>bliss</Link>
                </div>
                <div className={style.headericonPart}>
                    <div>
                        {/* <AiOutlineSearch style={{fontSize:'',color:"white",marginRight:'1.2rem'}} /> */}
                        <><Link to='/login'> <FaUser className={style.accountIcon} /></Link></>
                        <p style={{ color: 'white', fontSize: '1.2rem', marginRight: '1.2rem' }}>account</p>
                    </div>
                    <div>
                        {/* <AiOutlineSearch style={{fontSize:'1.5rem',color:"white",marginRight:'1.2rem'}} /> */}
                        <FaShoppingCart className={style.bagIcon} />
                        <p  className={style.bagTag}>bag</p>
                       <p className={style.zeroCount} onClick={showCartHandler}>{cart.length} </p>
                    </div>
                </div>
            </div>
            <div className={style.headerCardAllBtn}>
                {
                    navigation.map((navigation) => {
                        return (
                            <NavLink to={navigation.path}>{navigation.name}</NavLink>
                        )
                    })
                }
                {/* <p>Best Sellers</p>
                <p>SkinCare</p>
                <p>Body & HairCare</p>
                <p>Sets &Kits</p>
                <p>Sales</p>
                <p>This is Bliss</p> */}
                {
                    showCart && <BagPopUp />
                }
                
            </div>
            <div className={style.hamburContainer}>
                <GiHamburgerMenu className={style.hamburIcon}/>
            </div>
        </div>
    )
}