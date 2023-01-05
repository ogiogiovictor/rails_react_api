import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMessage } from '../redux/messages/messageSlice';
import AllMessage from './AllMessage';

const MessageComponent = () => {
  const allMessages = useSelector((state) => state.msg);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!allMessages.length) {
      dispatch(getMessage());
    }
  }, [allMessages.length, dispatch]);

  return (
    <div>
      {
          allMessages.length ? <AllMessage msg={allMessages} /> : <h2>No Message Found</h2>
          }
    </div>
  );
};

export default MessageComponent;
