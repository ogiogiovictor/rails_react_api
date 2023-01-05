import React, {Fragment} from 'react';
import { useDispatch } from 'react-redux';
import '../index.css';


const SingleMessage = ({message, created_at }) => {
  return (
    <Fragment>
    <li>{message}</li>
    <li>{created_at} </li>
    </Fragment>
  );
};


export default SingleMessage;
