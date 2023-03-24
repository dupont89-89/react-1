const ACTION_NEW_MESSAGE = 'ACTION-NEW-MESSAGE';
const UPDATE_NEW_NESSAGE_BODY = 'UPDATE-NEW-NESSAGE-BODY';

export const sendMessage = () => ({ type: ACTION_NEW_MESSAGE })

export const sendNewMessage = (newTextMessage) => ({
    type: UPDATE_NEW_NESSAGE_BODY,
    newText: newTextMessage
})

const messageReducer = (state, action) => {
    switch (action.type) {
        case ACTION_NEW_MESSAGE:
            let newMessage = {
                id: 6,
                messagesRead: 'Новое',
                message: state.newMessage,
                messageFriends: 'Я пока компонента, тупая'
            }
            state.messagesData.push(newMessage);
            state.newMessage = ('');
            return state;
        case UPDATE_NEW_NESSAGE_BODY:
            state.newMessage = action.newText;
            return state;
        default:
            return state;
    }
}

export default messageReducer;