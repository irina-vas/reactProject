const ADD_POST = 'ADD-POST',
      UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {};
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

export default profileReduser;