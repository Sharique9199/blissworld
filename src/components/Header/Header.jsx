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
import { useAuth } from '../../context/AuthContext'
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
    // const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const [showCart, setShowCart] = useState(false)
    const [loginData, setLoginData] = useState(false);
    const navigate = useNavigate()
    const [auth, setAuth] = useAuth();
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
    const logoutHandler = (e) => {
        if (e.target.value == 'logout') {
            setAuth({ username: '', email: '', token: null });
            localStorage.removeItem('blissworldAuth');
            navigate('/login');
        }

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


                        <Link to='/signup'> <FaUser className={style.accountIcon} onClick={showLogin} /></Link>
                        <p className={style.accountTag}>account</p>
                        {auth.token &&
                            <select name="" id="" onChange={logoutHandler}>
                                <option value="">{auth.username}</option>
                                <option value="logout">Logout</option>
                            </select>
                        }


                    </div>

                    <div className={style.bagIcons}>

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