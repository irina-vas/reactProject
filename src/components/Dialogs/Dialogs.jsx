import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../Redux/dialogsReducer';

const Dialogs = (props) => {

  let state = props.store.getState().dialogsPage;

  let dialogElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
  let messagesElements = state.messages.map(message => <Message message={message.message} />);
  let newMessageBody = state.newMessageBody;
  
  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  }

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body));
  }

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        { dialogElements }
      </div>
      <div className={classes.messages}>
        <div>{ messagesElements }</div>
        <div>
          <div>
            <textarea value={ newMessageBody } 
                      onChange={ onNewMessageChange }
                      placeholder="enter your message..."></textarea>
          </div>
          <div>
            <button onClick={ onSendMessageClick }>Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;