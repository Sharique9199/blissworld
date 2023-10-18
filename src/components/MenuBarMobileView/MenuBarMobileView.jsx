import React from 'react';
import { navigation } from '../Header/Header';
import style from './MenuBarMobileView.module.css';
import { NavLink } from 'react-router-dom';

const MenuBarMobileView = () => {
    return (
        <div className={style.headerCardAllBtn}>
            {
                navigation.map((navigation) => {
                    return (
                        <NavLink to={navigation.path}>{navigation.name}</NavLink>
                    )
                })
            }
        </div>
    )
}

export default MenuBarMobileView
