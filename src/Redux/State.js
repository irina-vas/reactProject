import profileReduser from './profileReducer';
import dialogsReducer from './dialogsReducer';
import sideBarReduser from './sideBarReducer';


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
    this._state.profilePage = profileReduser(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sideBarReduser(this._state.sideBarReduser, action);
    this._callSubscriber(this._state);
  }
}



export default store;
window.store = store;
