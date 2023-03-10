import s from './Master.module.css';

const Master = () => {
    return (
        <div class={s.block__master}>
            <div className={s.avatar__master}>
                <Avatar />
            </div>
            <div className={s.description}>
                <Name />
                <Description />
            </div>
        </div>
    );
}

export default Master;