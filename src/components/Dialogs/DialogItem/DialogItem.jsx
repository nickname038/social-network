import { NavLink } from 'react-router-dom'
import s from './../Dialogs.module.css'

const DialogItem = (props) => {

    const path = `/messages/${props.id}`;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <img className={s.avatar} src="https://media.kg-portal.ru/movies/a/ava/posters/ava_3.jpg" alt="" />
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem;
