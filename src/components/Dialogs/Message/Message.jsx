import s from './../Dialogs.module.css'

const Message = (props) => {
    return <div className={`${s.message} ${props.owner ? s.myMessage : s.companionMessage } ${props.isFirstInBlock ? s.first : '' }`}>
        <img className={s.avatar} src="https://media.kg-portal.ru/movies/a/ava/posters/ava_3.jpg" alt="" />
        {props.message}
        </div>
}

export default Message;
