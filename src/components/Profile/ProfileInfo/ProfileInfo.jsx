import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src='https://yenisey.co/photos/5/LRM_EXPORT_332003029365118_20190816_120348535.jpeg' />
      </div>
      <div className={classes.descriptionBlock}>
        ava + description
      </div>
    </div>
  )
}
export default ProfileInfo;