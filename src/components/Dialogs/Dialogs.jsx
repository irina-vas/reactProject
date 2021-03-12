import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

  let messagesElements = props.state.messages.map(message => <Message message={message.message} />);
  let dialogElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
  
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        { dialogElements }
      </div>
      <div className={classes.messages}>
        <div>{ messagesElements }</div>
        <div>
          <div>
            <textarea></textarea>
          </div>
          <div>
            <button>Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;