//import { Profiler } from "react"
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div className = {classes.content}>
      <ProfileInfo />
      <MyPosts posts = {props.stateProfilePage.posts} 
              newPostText = {props.stateProfilePage.newPostText}
              addPost = {props.addPost} 
              updateNewPostText = {props.updateNewPostText}/>
    </div>
  )
}

export default Profile;