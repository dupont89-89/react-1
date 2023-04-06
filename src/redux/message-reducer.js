const ACTION_NEW_MESSAGE = 'ACTION-NEW-MESSAGE';
const UPDATE_NEW_NESSAGE_BODY = 'UPDATE-NEW-NESSAGE-BODY';

export const sendMessage = () => ({ type: ACTION_NEW_MESSAGE })

export const sendNewMessage = (text) => ({
    type: UPDATE_NEW_NESSAGE_BODY,
    newText: text
})

let initialState = {
    dialogsData: [
        {
            id: 3,
            name: 'Валентин',
            avatar: 'https://w7.pngwing.com/pngs/980/886/png-transparent-male-portrait-avatar-computer-icons-icon-design-avatar-flat-face-icon-people-head-cartoon.png',
            group: 'Друзья'
        },
        {
            id: 4,
            name: 'Петя',
            avatar: 'https://w7.pngwing.com/pngs/805/207/png-transparent-account-avatar-profile-user-avatars-icon.png',
            group: 'Подписчики'
        },
        {
            id: 5,
            name: 'Костя',
            avatar: 'https://w7.pngwing.com/pngs/450/288/png-transparent-account-avatar-profile-user-avatars-icon.png',
            group: 'Слушатель'
        },
        {
            id: 6,
            name: 'Надя',
            avatar: 'https://w7.pngwing.com/pngs/306/225/png-transparent-account-avatar-profile-user-avatars-icon.png',
            group: 'Партнеры'
        },
        {
            id: 7,
            name: 'Кроха',
            avatar: 'http://img2.3png.com/5ede474221aa06595201d090f7f7936d1ae2.png',
            group: 'Коллеги'
        },
        {
            id: 8,
            name: 'Лука',
            avatar: 'https://w7.pngwing.com/pngs/44/624/png-transparent-avatar-people-person-business-user-man-character-set-icon-portrait.png',
            group: 'Теневая'
        },
        {
            id: 9,
            name: 'Костя',
            avatar: 'https://w7.pngwing.com/pngs/638/710/png-transparent-avatar-female-girl-woman-avatars-xmas-giveaway-icon.png',
            group: 'Друзья'
        }
    ],
    messagesData: [
        {
            id: 1,
            messagesRead: 'Прочитано',
            message: 'Приветик это же ВАНЯ!. Привет, Валентина. Как твои дела?',
            messageFriends: 'Да вроде как все отлично?'
        },
        {
            id: 2,
            messagesRead: 'Ожидает',
            message: 'Напрямую сделать треугольник средствами CSS нельзя, поэтому доступны два метода, позволяющих его добавить — через border и transform. ... В примере 1 показано добавление треугольника к блоку через псевдоэлемент', messageFriends: 'Да я не знаю, как там это всё делать'
        },
        {
            id: 3,
            messagesRead: 'Читает',
            message: 'Треугольники с рамкой. Примеры как сделать различные вариации треугольников с помощью CSS-свойства border. ... В продолжении первой части, примеры как добавить стрелки к блоку с рамкой. Используются оба псевдо-элемента', messageFriends: 'Фуух, я вообще не знал такого'
        },
        {
            id: 4,
            messagesRead: 'Прочитано',
            message: 'ХАХ ХА АХ тф даешь',
            messageFriends: 'Я то чего, нормально же ощались. Че ты'
        },
        {
            id: 5,
            messagesRead: 'Пишет',
            message: 'Откуда берется треугольник? Все контейнеры в HTML изначально',
            messageFriends: 'Оотуда где рак свисти всегда. Хаааа.'
        }
    ],
    newMessage: ''
}

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_NEW_MESSAGE: {
            let newMessage = {
                id: 6,
                messagesRead: 'Новое',
                message: state.newMessage,
                messageFriends: 'Я пока компонента, тупая'
            }
            let stateCopy = {...state};
            stateCopy.messagesData = [...state.messagesData];
            stateCopy.messagesData.push(newMessage);
            stateCopy.newMessage = '';
            return stateCopy;
        }
        case UPDATE_NEW_NESSAGE_BODY: {
            let stateCopy = {...state};
            stateCopy.newMessage = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }
}

export default messageReducer;