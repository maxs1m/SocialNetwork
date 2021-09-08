import React from "react";
import st from './FormsControls.module.css'



export const Textarea = ({input, meta, ...props}) => {
    return (
        <div>
            <textarea {...input} {...props} className={props.className + " " + (meta.error && meta.touched && st.error)}/>
            {meta.error && meta.touched && <span>{meta.error}</span>}
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {
    return (
        <div>
            <input {...input} {...props} className={props.className + " " + (meta.error && meta.touched && st.error)}/>
            {(meta.error || props.submitError) && meta.touched && (<span>{meta.error || props.submitError}</span>)}
            <span>{props.errorMessage}</span>
        </div>
    )
}


