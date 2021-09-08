import React, {useEffect, useState} from "react";

const ProfileStatusWithHooks = (props) => {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const updateStatus = (e) => {
        setStatus(e.target.value)
    }

    return (
        <div>
            {editMode && <input autoFocus={true}
                                onBlur={deactivateEditMode}
                                onChange={updateStatus}
                                value={status}/>}
            {!editMode && <span onDoubleClick={activateEditMode}>{props.status}</span>}
        </div>
    )
}

export default ProfileStatusWithHooks