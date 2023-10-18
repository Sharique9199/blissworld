import style from './Header.module.css'
import { AiOutlineSearch } from 'react-icons/ai'
import { CiLocationOn } from 'react-icons/ci'
import { FaUser, FaShoppingCart } from 'react-icons/fa'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import { useCart } from '../../context/cart'
import BagPopUp from '../BagPopUp/BagPopUp'
import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { ImCross } from 'react-icons/im'
import { useAuth0 } from "@auth0/auth0-react";
import MenuBarMobileView from '../MenuBarMobileView/MenuBarMobileView'
export const navigation = [
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
    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const [showCart, setShowCart] = useState(false)
    const [loginData, setLoginData] = useState(false);
    const navigate = useNavigate()
    const [cart] = useCart();

    const showCartHandler = () => {
        if (window.innerWidth <= 480) {
            navigate('/total-items')
        }
        setShowCart(showCart ? false : true);
    }
    const showLogin = () => {
        setLoginData(loginData ? false : true)
    }

    const mobileViewMenuHandler = () => {
        setShowMobileMenu(showMobileMenu === false ? true : false);
    }
    console.log(window.innerWidth);
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
                        <CiLocationOn className={style.headerIcons} />

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

                        <FaUser className={style.accountIcon} onClick={showLogin} />
                        {
                            isAuthenticated ? <p onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                                Log Out
                            </p> : <p onClick={() => loginWithRedirect()}>account</p>
                        }
                        {/* <p style={{ color: 'white', fontSize: '1.2rem', marginRight: '1.2rem' }}>account</p> */}


                    </div>

                    <div >

                        <FaShoppingCart className={style.bagIcon} onClick={showCartHandler} style={{ cursor: 'pointer' }} />
                        <p className={style.bagTag}>bag</p>
                        <p className={style.zeroCount} >{cart.length} </p>
                    </div>
                </div>
            </div>
            {/* {style.headerCardAllBtn} */}


            <div className={style.headerCardAllBtn}>
                {
                    navigation.map((navigation) => {
                        return (
                            <NavLink to={navigation.path}>{navigation.name}</NavLink>
                        )
                    })
                }
                {showCart && <BagPopUp />}
            </div>

            {
                showMobileMenu &&
                <div className={style.showMobileMenu}>
                    <MenuBarMobileView />
                </div>
            }

            <div className={style.hamburContainer}>

                <GiHamburgerMenu className={style.hamburIcon} onClick={mobileViewMenuHandler} />


            </div>
        </div>
    )
}