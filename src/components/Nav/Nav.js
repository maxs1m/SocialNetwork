import React from "react";
import classes from './Nav.module.css'
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.nav__item}>
                <Link to='/profile'>Профиль</Link>
            </div>
            <div className={classes.nav__item}>
                <Link to='/dialogs'>Сообщения</Link>
            </div>
            <div className={classes.nav__item}>
                <Link to='/news'>Новости</Link>
            </div>
            <div className={classes.nav__item}>
                <Link to='/music'>Музыка</Link>
            </div>
            <div className={classes.nav__item}>
                <Link to='/users'>Пользователи</Link>
            </div>
            <div className={classes.nav__item}>
                <Link to='/settings'>Настройки</Link>
            </div>
        </nav>
    )
}

export default Nav