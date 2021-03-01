let store = {
  _callSubscriber() {
    console.log('state has being changed')
  },

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
        ]
    },
    sidebar: {}
  },
  getState(){
    return this._state;
  },
  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0
  };

    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },
  
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  }

}
window.store = store;
export default store;