 import React from 'react';
 import SingleMessage from './SingleMessage';

const AllMessage = ({ msg }) => (
  <ul className="rockets-list">

    {msg.map((dr) => (

      <SingleMessage
        key={dr.id}
        message={dr.message}
        created_at={dr.created_at}
      />

    ))}
  </ul>
);

export default AllMessage;
