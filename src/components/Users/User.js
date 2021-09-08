import st from "./Users.module.css";
import userImgDefault from "../../image/userImgDefault.png";
import React from "react";
import {Link} from "react-router-dom";

let User = (props) => {

    return (
        <div className={st.profile}>
            <div className={st.ava}>
                <Link to={'/profile/' + props.user.id}>
                    <img src={(props.user.photos.small === null)? userImgDefault:props.user.photos.small}
                         className={st.img}
                         alt='avatarka'/>
                </Link>
                {props.user.followed?
                    <button
                        disabled={props.followingInProgress.some(id => id === props.user.id)}
                        onClick={() => {props.unfollow(props.user.id)}}
                        className={st.btn}>
                        Unfollow
                    </button>:
                    <button
                        disabled={props.followingInProgress.some(id => id === props.user.id)}
                        onClick={() => {props.follow(props.user.id)}}
                        className={st.btn}>
                        Follow
                    </button>}
            </div>
            <div className={st.profile}>
                <div className={st.info}>
                    <h2>{props.user.name}</h2>
                    <p>{props.user.status}</p>
                </div>
                <div className={st.place}>
                    <p>{'item.location.city'}</p>
                    <p>{'item.location.country'}</p>
                </div>
            </div>
        </div>
    )
}

export default User