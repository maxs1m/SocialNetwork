import React from "react";
import st from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, Form} from "react-final-form";
import {composeValidators, maxLength, requiredField} from "../../Utilites/validators";
import {Textarea} from "../Common/FormsControls";

const Dialogs = (props) => {

    let dialogsElement = props.messagesPage.dialogsData.map(item => <DialogItem name={item.name} id={item.id}/>)

    let messageElement = props.messagesPage.messagesData.map(item => <Message text={item.text}/>)

    let addMessage= (value) => {
        props.addMessage(value.newMessageBody)
        value.newMessageBody = ""
    }

    return (
        <div className={st.dialogs}>
            <div className={st.dialogs_items}>
                {dialogsElement}
            </div>
            <div className={st.messages}>
                {messageElement}
                <Form
                    onSubmit={addMessage}
                    render={(props) => (
                        <form onSubmit={props.handleSubmit}>
                            <div>
                                <Field
                                    name="newMessageBody"
                                    component={Textarea}
                                    placeholder='Enter your message'
                                    className={st.messages__input}
                                    validate={composeValidators(requiredField, maxLength(100))}
                                />
                            </div>
                            <div>
                                <button type="submit">Отправить</button>
                            </div>
                        </form>
                    )}
                />
            </div>
        </div>
    )
}

export default Dialogs