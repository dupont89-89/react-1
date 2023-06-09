import React, { useState } from 'react';
import s from './Paginator.module.css';
import { Link } from 'react-router-dom';

export default function Paginator(props) {

    // let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    
//     let pages = [];
// debugger;
//     for (let i = 1; i <= pageCount; i++) {
//         pages.push(i);
//     }
    
    const portionSize = props.portionSize || 10;
    
    let portionCount = Math.ceil(props.pageCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(Math.ceil(props.currentPage / portionSize));
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={s.pagination__block}>
            {portionNumber > 1 && 
                <button onClick={() => setPortionNumber(portionNumber - 1)}>Назад</button>
            }
            {props.pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => (
                    <Link
                        key={p}
                        to="#"
                        onClick={e => props.onPageChange(p)}
                        className={props.currentPage === p && s.selected}
                    >
                        {p}
                    </Link>
                ))}
            {portionCount > portionNumber && 
                <button onClick={() => setPortionNumber(portionNumber + 1)}>Вперед</button>
            }
        </div>
    );
}