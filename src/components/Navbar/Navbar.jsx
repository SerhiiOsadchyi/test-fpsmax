import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import {useLocation} from 'react-router-dom';

const Navbar = () => {

    const location = useLocation();

    const setClassMenu = (path) => {
        if (location.pathname === path) {
            return `${s.item} ${s.activeMenu}`
        }
        return s.item
    }

    return (
        <nav className={s.nav}>
            <div className={setClassMenu('/notes')}>
                <NavLink to='/notes' activeClassName={s.activeNav}>Notes</NavLink>
            </div>
            <div className={setClassMenu('/faq')}>
                <NavLink to='/faq' activeClassName={s.activeNav}>F.A.Q.</NavLink>
            </div>
        </nav>
    )
}

export default Navbar