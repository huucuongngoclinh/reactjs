import React from 'react';

const userOutput = (props) => {
  return (
    <div>
      <p>UserName: {props.userName}</p>
      <p>I hope I can change this text</p>
    </div>
  )
};

export default userOutput;