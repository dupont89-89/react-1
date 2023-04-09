import React from 'react';
import s from './UsersContainer.module.css';

const Users = (props) => {

    // const userSubscribreFollow = () => {
    //     let userID = props.id
    //     props.follow(userID);

    // }

    // const userSubscribreUnFollow = () => {
    //     let userID = props.id
    //     props.unfollow(userID);

    // }
debugger;
    if (props.usersData.length === 0) {
        props.setUsers([
                {
                    id: 0,
                    name: 'Валентин',
                    surname: 'Крошкин',
                    avatar: 'https://www.film.ru/sites/default/files/filefield_paths/shrek.jpg',
                    country: 'Россия',
                    city: 'Иваново',
                    status: 'Хей ребята. Я жду',
                    followed: true
                },
                {
                    id: 1,
                    name: 'Татьяна',
                    surname: 'Муравей',
                    avatar: 'https://flomaster.club/uploads/posts/2022-06/1655870005_71-flomaster-club-p-portreti-printsess-disneya-krasivo-75.jpg',
                    country: 'Россия',
                    city: 'Нарва',
                    status: 'Хей ребята. Я жду',
                    followed: true,
                },
                {
                    id: 2,
                    name: 'Елена',
                    surname: 'Букало',
                    avatar: 'https://klike.net/uploads/posts/2022-08/1661862325_j-40.jpg',
                    country: 'Россия',
                    city: 'Сочи',
                    status: 'Жара то стоит. Че делать. Не знаешь?',
                    followed: false
                },
                {
                    id: 3,
                    name: 'Анна',
                    surname: 'Тарантино',
                    avatar: 'https://i.pinimg.com/originals/c8/53/bf/c853bf0f14a513e97f1031f0b6da096a.jpg',
                    country: 'Россия',
                    city: 'Плёс',
                    status: 'Красотаа...лепота',
                    followed: false
                },
                {
                    id: 4,
                    name: 'Павел',
                    surname: 'Могучий',
                    avatar: 'https://abrakadabra.fun/uploads/posts/2022-01/1642258489_1-abrakadabra-fun-p-tri-bogatirya-na-avu-1.jpg',
                    country: 'Россия',
                    city: 'Тула',
                    status: 'Тульский пряник. Съем тебя.',
                    followed: false
                },
                {
                    id: 5,
                    name: 'Костя',
                    surname: 'Ложкин',
                    avatar: 'https://mobimg.b-cdn.net/v3/fetch/bd/bd3446decb4f456f03ba2d8efb479423.jpeg',
                    country: 'Россия',
                    city: 'Волгоград',
                    status: 'Сталинград же мы!!!',
                    followed: true
                },
            ]
    )
    }
debugger;
    return <div> {
        props.usersData.map(usersItem => 
            <div id={usersItem.id} key={usersItem.id} className={s.users__item}>
            <div className={s.img__user}>
                <img src={usersItem.avatar} alt={usersItem.name} />
                { usersItem.followed ? <button onClick={ () => {props.follow(usersItem.id)} }>Добавить в друзья</button>
                 : <button onClick={ () => {props.unfollow(usersItem.id)} }>В друзьях</button>}
            </div>
            <div className={s.info__user}>
                <div className={s.info__user__name}>
                    <p>{usersItem.name} {usersItem.surname}</p>
                </div>
                <div className={s.info__user__contry}>
                    <p>{usersItem.country}, {usersItem.city}</p>
                </div>
                <div className={s.info__user__status}>
                    <p>{usersItem.status}</p>
                </div>
            </div>
        </div>
        )

    }
    
    </div>   
}






//     let usersMap = props.usersData
//         .map(usersItem => <UsersItem id={usersItem.id} followed={usersItem.followed} key={usersItem.id} name={usersItem.name} surname={usersItem.surname} avatar={usersItem.avatar} country={usersItem.country} city={usersItem.city} status={usersItem.status} />);
//     return (
//         <div>
//             <div className={s.users__header}>
//                 <div>
//                     <h1>Пользователи</h1>
//                 </div>
//                 <div className={s.users__search}>
//                     <input placeholder='Поиск пользователей' type="text" />
//                 </div>
//             </div>
//             {usersMap}
//         </div>
//     )
// }

export default Users;