import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css'
import Message from './Message/Message';

const Dialogs = (props) => {
    const DialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    const MessagesElements = props.state.messages.map(m => <Message
        message={m.message}
        owner={m.owner}
        isFirstInBlock={m.isFirstInBlock}
    />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {DialogsElements}

            </div>
            <div className={s.messages}>
                {MessagesElements}

            </div>
        </div>
    )
}

export default Dialogs;
