import * as React from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import  { addPostActionCreator, updateNewPostTextActionCreator, setUserProfile } from '../../Redux/profileReducer';
import profileReducer from '../../Redux/profileReducer';
import { connect } from 'react-redux';


class ProfileContainer extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then(response => {
        this.props.setUserProfile(response.data);
  });
  }
  render() {
    return (
      <Profile {...this.props} />
    )
  }
}

let mapStateToProps = (state) => ({
  a: 13
});

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);