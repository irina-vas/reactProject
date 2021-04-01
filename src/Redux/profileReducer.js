const ADD_POST = 'ADD-POST',
      UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT',
      SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
  posts: [
    {id: 1, message: 'hi,how are you?', likeCount: 12},
    {id: 2, message: 'watz uup', likeCount: 10},
    {id: 3, message: 'yeah, defenitly', likeCount: 1},
    {id: 4, message: 'you`re so right', likeCount: 12}
  ],
  newPostText: 'ky-ky ;)'
};

const profileReduser = (state = initialState, action) => {
  switch(action.type) {
    case ADD_POST: {
      let newPost = {
      id: 5,
      message: state.newPostText,
      likesCount: 0
      };

      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      };
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText
      }
    }
    default:
      return state;
  }
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text)=> 
    ({type: UPDATE_NEW_POST_TEXT, newText: text})
    export const setUserProfile = (Profile) => ({type: SET_USER_PROFILE, Profile})

export default profileReduser;