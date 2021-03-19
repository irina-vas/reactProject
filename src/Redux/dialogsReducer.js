const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = 
{
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
};

const dialogsReducer = (state = initialState, action) => {
  let stateCopy = {
    ...state,
    //messages: [...state.messages]
  };
  stateCopy.messages = [...state.messages];

  switch(action.type){
    case UPDATE_NEW_MESSAGE_BODY:
      stateCopy.newMassageBody = action.body;
      return stateCopy;
    case SEND_MESSAGE:
      let body = stateCopy.newMassageBody;
      stateCopy.newMassageBody = '';
      stateCopy.messages.push({id: 7, message: body});
      return stateCopy;
    default: 
      return stateCopy;
  }
}


export const sendMessageCreator = () => ({type: SEND_MESSAGE})

export const updateNewMessageBodyCreator = (body)=> 
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})


export default dialogsReducer;