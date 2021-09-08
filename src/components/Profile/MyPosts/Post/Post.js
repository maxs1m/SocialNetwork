import React from "react";
import st from './Post.module.css'

const Post = (props) => {
    return (
        <div className={st.item}>
            <img src={'https://www.meme-arsenal.com/memes/05a689ec4cdb22fca4e91982e910533d.jpg'} className={st.ava}/>
            <p className={st.text}>{props.message}</p>
            <span className={st.likesCount}>{props.likesCount}</span>
            <button className={`${st.btn_like} ${st.btn}`}>Like</button>
            <button className={`${st.btn_dislike} ${st.btn}`}>Dislike</button>
        </div>
    )
}

export default Post