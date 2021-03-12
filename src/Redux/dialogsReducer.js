const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

const dialogsReducer = (state, action) => {
  switch(action.type){
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMassageBody = action.body;
      return state;
    case SEND_MESSAGE:
      let body = state.newMassageBody;
      state.newMassageBody = '';
      state.messages.push({id: 7, message: body});
      return state;
    default: 
      return state;
  }
}


export const sendMessageCreator = () => ({type: SEND_MESSAGE})

export const updateNewMessageBodyCreator = (body)=> 
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})


export default dialogsReducer;