import React from "react";
import st from './DialogsItem.module.css'
import {Link} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id

    return (
        <div className={st.item}>
            <Link to={path}>{props.name}</Link>
        </div>
    )
}

export default DialogItem