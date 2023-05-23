export const requiredField = value => {
if (value) {
    return undefined;
}
return 'Ошибка, поле обязательное';
}

export const maxLenghtCreater = (maxLength) => (value) => {
    if (value.length > maxLength ) {
        return `Ошибка, текст больше ${maxLength} символов`;
    }
    return undefined;
    }