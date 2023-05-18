

const requiredField = value => {
if (value) {
    return undefined;
}
return 'Ошибка, поле обязательное';
}