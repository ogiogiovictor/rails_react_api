import React,  { useEffect }  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMessage } from '../redux/messages/messageSlice';
import AllMessage from './AllMessage';

const MessageComponent = () => {

    const all_messages = useSelector((state) => state.msg);
    const dispatch = useDispatch();

      useEffect(() => {
        if (!all_messages.length) {
          dispatch(getMessage());
        }
      }, [all_messages.length, dispatch]);
    
      return (
        <div>
          {
          all_messages.length ? <AllMessage msg={all_messages} /> : <h2>No Message Found</h2>
          }
        </div>
      );

}

export default MessageComponent;