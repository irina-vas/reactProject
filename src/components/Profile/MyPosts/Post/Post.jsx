import classes from './Post.module.css';

const Post = (props) => {
  return (
    <div className={classes.posts}>
      <div className={classes.item}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8AKs86bzYXkp66ilnGqlkEwl8hPsWfFpzSw&usqp=CAU "/>post 1</div>
      {props.message}
      <div>
        <span>like</span>{props.likeCount}
      </div>
    </div>
);
}

export default Post;