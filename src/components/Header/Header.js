import React from  'react'
import st from "./Header.module.css";
import {Link} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={st.header}>
            <img src='https://cdn.iconscout.com/icon/free/png-128/playstation-32-555277.png' alt='логотип'/>
            <div className={st.login__block}>
                {props.isAuth ? <div>{props.login} <button onClick={props.logout}>Logout</button></div> : <Link to='/login'>Login</Link>}
            </div>
        </header>
    )
}

export default Header