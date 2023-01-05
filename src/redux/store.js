import { configureStore, combineReducers } from '@reduxjs/toolkit';
import MessageReducer from './messages/messageSlice';

const reducer = combineReducers({
    msg: MessageReducer,
  });
  
  const store = configureStore({ reducer });
  
  export default store;