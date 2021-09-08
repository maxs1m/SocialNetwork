import st from "./Users.module.css";
import React from "react";
import Paginator from "./Paginator";
import User from "./User";


let Users = (props) => {

    return (
        <div>
            <Paginator currentPage={props.currentPage}
                       onPageChanged={props.onPageChanged}
                       totalUsersCount={props.totalUsersCount}
                       pageSize={props.pageSize}
                       portionSize={10}/>
            {props.users.map(item =><div className={st.container}>
                <User user={item}
                      unfollow={props.unfollow}
                      follow={props.follow}
                      followingInProgress={props.followingInProgress}
                      key={item.id}
                />
            </div>)}
        </div>
    )
}

export default Users