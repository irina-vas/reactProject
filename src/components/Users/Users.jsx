import React from 'react';
import styles from './Users.module.css';
import userPhoto from '../../images/05.png';
import {NavLink} from 'react-router-dom';


let Users = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return <div>
    <div>
      {pages.map(p => {
        return <span className={props.currenPage === p && styles.selectedPage}
        onClick={(e) => { props.onPageChanged(p); }}>{p}</span>
      })}
    </div>

    {/* <button onClick={ getUsers }>Get users</button> */}
    {props.users.map( u => 
      <div key={u.id}>
        <div>
          <NavLink to={'/Profile/' + u.id}>
            <img src={ u.photos.small != null ? u.photos : userPhoto } className={styles.userPhoto}/>
          </NavLink>
        </div>       
        <div>
          { u.followed 
          ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button> 
          : <button onClick={() => { props.follow(u.id)} }>Follow</button> }
          
        </div>
        <span>
          <span>
          <div>{u.name}</div>
          <div>{u.status}</div>
          </span>
          <span>
          <div>{'u.location.country'}</div>
          <div>{'u.location.city'}</div>
          </span>
        </span>
      </div>)
    }
  </div>
}

export default Users;