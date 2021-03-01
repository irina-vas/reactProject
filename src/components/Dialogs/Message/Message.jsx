import classes from './Message.module.css';
import {NavLink} from 'react-router-dom';

const Message = (props) => {
  return (
   <div>
    <div className={classes.message}>{props.message}</div>
    <textarea></textarea>
  </div>
  )
}

export default Message;