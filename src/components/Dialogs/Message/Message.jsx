import classes from './Message.module.css';
import {NavLink} from 'react-router-dom';

const Message = (props) => {
  return (
   <div>
    <div className={classes.message}>{props.message}</div>
  </div>
  )
}

export default Message;