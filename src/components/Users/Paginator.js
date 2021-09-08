import st from "./Users.module.css";
import React, {useState} from "react";

let Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount/props.portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftBorder = (portionNumber - 1) * props.portionSize + 1
    let rightBorder = portionNumber * props.portionSize

    console.log(pagesCount, props.portionSize,  portionCount)

    return <div>
        {portionNumber > 1 && <button onClick={() => setPortionNumber(portionNumber - 1)}>prev</button>}
        {pages
            .filter(p => p >= leftBorder && p <= rightBorder)
            .map(item =>
                <button className={props.currentPage === item && st.selectedPage}
                        onClick={(e) => {props.onPageChanged(item)}}>
                    {item}
                </button>
            )
        }
        {portionNumber < portionCount && <button onClick={() => setPortionNumber(portionNumber + 1)}>next</button>}
    </div>
}

export default Paginator