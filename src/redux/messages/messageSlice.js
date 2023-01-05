import fetchMessages from './messageData';

const initialState = [];

// create action contants - This are calleds action types
const GET_MESSAGE = 'msg/GET_MESSAGE';

// Action Creators for the action constant
// ########## Action to to get Dragon ###############/
const getMessage = () => async (dispatch) => {
  const message = await fetchMessages();
  dispatch({
    type: GET_MESSAGE,
    payload: message,
  });
};

// Reducers that recieves the actions and updates the state
const MessageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MESSAGE:
      return action.payload;
    default:
      return state;
  }
};

export { getMessage };
export default MessageReducer;
