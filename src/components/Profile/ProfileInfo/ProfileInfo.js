import st from "./ProfileInfo.module.css";
import Preloader from "../../Common/Preloader";
import React, {useState} from "react";
import ProfileStatusWithHooks from "../ProfileStatus/ProfileStatusWithHooks";
import userImgDefault from "../../../image/userImgDefault.png";
import ProfileDataForm from './ProfileDataForm'


const ProfileInfo = (props) => {
    const [editMode, setEditMode] = useState(false)

    if (!props.profile) {
        return <Preloader/>
    }

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        if (props.errorMessage < 0) setEditMode(false)
    }

    const mainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    return (
        <div className={st.content__profile}>
            <img src={props.profile.photos.large || userImgDefault} className={st.profile__logo}/>
                {props.isOwner && <input type={'file'} onChange={mainPhotoSelected}/>}
            {editMode
                ? <ProfileDataForm
                    saveProfile={props.saveProfile}
                    profile={props.profile}
                    deactivateEditMode={deactivateEditMode}
                    errorMessage={props.errorMessage}
                />
                : <ProfileData {...props} activateEditMode={activateEditMode}/>
            }

        </div>
    )
}

const Contact = ({contactTitle, contactValue}) => {
    return <div>
        <b>{contactTitle}:{contactValue}</b>
    </div>
}

const ProfileData = (props) => {
    return <div className={st.profile__info}>
        <p>{props.profile.fullName}</p>
        <ProfileStatusWithHooks
            status={props.status}
            updateStatus={props.updateStatus}
        />
        <div>
            <b>Looking for a job:</b>{props.profile.lookingForAJob? 'yes' : 'no'}
        </div>
        {props.profile.lookingForAJob &&
        <div>
            <b>My professional skills:</b>{props.profile.lookingForAJobDescription}
        </div>
        }
        <div>
            <b>About me:</b>{props.profile.aboutMe}
        </div>
        <div>
            <b>Contacts:</b>{Object.keys(props.profile.contacts).map(item =>
            <Contact contactTitle={item} contactValue={props.profile.contacts[item]}/>
        )}
        </div>
        {props.isOwner && <button onClick={props.activateEditMode}>Редактировать</button>}
    </div>
}

export default ProfileInfo