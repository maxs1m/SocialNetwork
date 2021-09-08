import React from "react";
import {Field, Form} from "react-final-form";
import {Input, Textarea} from "../../Common/FormsControls";
import {composeValidators, maxLength, minLength, requiredField} from "../../../Utilites/validators";

const ProfileDataForm = (props) => {
    const onSubmit = (profile) => {
        props.saveProfile(profile)
        props.deactivateEditMode()
    }

    return <Form
        onSubmit={onSubmit}
        initialValues={props.profile}
        errorMessage={props.errorMessage}
        render={(props) => (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <p>Full name</p>
                    <Field
                        name="fullName"
                        component={Input}
                        placeholder='Enter your name'
                        validate={composeValidators(requiredField, maxLength(30), minLength(2))}
                    />
                </div>
                <div>
                    <p>Looking for a job:</p>
                    <label>
                        <Field
                            name="lookingForAJob"
                            component="input"
                            type="checkbox"
                        />
                        Yes
                    </label>
                </div>
                <div>
                    <p>My professional skills:</p>
                    <Field
                        name="lookingForAJobDescription"
                        component={Textarea}
                        placeholder='Enter description'
                        validate={composeValidators(requiredField, maxLength(100), minLength(2))}
                    />
                </div>
                <div>
                    <p>About me:</p>
                    <Field
                        name="aboutMe"
                        component={Textarea}
                        placeholder='Enter description'
                        validate={composeValidators(requiredField, maxLength(100), minLength(2))}
                    />
                </div>
                <div>
                    <b>Contacts:</b>{Object.keys(props.initialValues.contacts).map(item =>
                    <div>
                        <p>{item}:<Field
                                    name={"contacts." + item}
                                    component={Input}
                                    placeholder={item}
                                    validate={composeValidators(maxLength(30), minLength(2))}
                        /></p>
                    </div>
                )}
                </div>
                <div>
                    <button type="submit">Отправить</button>
                </div>
                {props.errorMessage}
            </form>
        )}
    />
}

export default ProfileDataForm