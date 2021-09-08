import st from './MyPosts.module.css'
import React from "react";
import Post from "./Post/Post";
import {Field, Form} from "react-final-form";
import {composeValidators, maxLength, minLength, requiredField} from "../../../Utilites/validators";
import {Textarea} from "../../Common/FormsControls";

const MyPosts = (props) => {

    let postElement = props.postsData.map(item => <Post message={item.text} likesCount={item.likes}/>)

    let addPost = (text) => {
        props.addPost(text.newPostBody)
        text.newPostBody = ""
    }

    return (
        <div className={st.content__posts}>
            <h2>Написать</h2>
            <Form
                onSubmit={addPost}
                render={(props) => (
                    <form onSubmit={props.handleSubmit}>
                        <div>
                            <Field
                                name="newPostBody"
                                component={Textarea}
                                placeholder='Enter your post'
                                className={st.post__text}
                                validate={composeValidators(requiredField, maxLength(30), minLength(2))}
                            />
                        </div>
                        <div>
                            <button type="submit">Отправить</button>
                        </div>
                    </form>
                )}
            />
            {postElement}
        </div>

    )
}

export default MyPosts