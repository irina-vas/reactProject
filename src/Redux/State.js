const ADD_POST = 'ADD-POST',
      UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT',
      UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY',
      SEND_MESSAGE = 'SEND_MESSAGE';

let store = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: 'hi!', likesCount: 10},
        {id: 2, message: 'How are you', likesCount: 1},
        {id: 3, message: 'What about your studing?', likesCount: 5},
        {id: 4, message: 'Have you already done it?', likesCount: 12},
        {id: 5, message: 'Hi there!', likesCount: 2},
        {id: 6, message: 'Did you get my message?', likesCount: 1}
      ],
      newPostText: 'hi! kyky!'
    },
    dialogsPage: {
      messages: [
        {id: 1, message: 'hi!'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'What about your studing?'},
        {id: 4, message: 'Have you already done it?'},
        {id: 5, message: 'Hi there!'},
        {id: 6, message: 'Did you get my message?'}
        ],
        dialogs: [
          {id: 1, name: 'Irina'},
          {id: 2, name: 'Victor'},
          {id: 3, name: 'Yuriy'},
          {id: 4, name: 'Olha'},
          {id: 5, name: 'Yliana'},
          {id: 6, name: 'Sulik'}
        ],
        newMassageBody: ''
    },
    sidebar: {}
  },

  _callSubscriber() {
    console.log('state has being changed')
  },

  getState(){
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if(action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      };
          this._state.profilePage.posts.push(newPost);
          this._state.profilePage.newPostText = '';
          this._callSubscriber(this._state);
      } else if(action.type === 'UPDATE-NEW-POST-TEXT') {
          this._state.profilePage.newPostText = action.newText;
          this._callSubscriber(this._state);
      } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
          this._state.dialogsPage.newMassageBody = action.body;
          this._callSubscriber(this._state);
      } else if (action.type === SEND_MESSAGE) {
          let body = this._state.dialogsPage.newMassageBody;
          this._state.dialogsPage.newMassageBody = '';
          this._state.dialogsPage.message.push({id: 7, message: body});
          this._callSubscriber(this._state);
      }
  }
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text)=> 
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

export const sendMessageCreator = () => ({type: SEND_MESSAGE})

export const updateNewMessageBodyCreator = (body)=> 
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})


export default store;
window.store = store;
