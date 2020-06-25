import React from 'react';

const Test = ({ test }) => {
  const { id, title, status, comments, dateTime, responsible } = test

  let classes
  if(status === 'Success'){
    classes = 'alert alert-success font-weight-bold'
  } else {
    classes = 'alert alert-danger font-weight-bold'
  }

  return (
    <tr className={classes}>
      <td>{id}</td>
      <td>{title}</td>
      <td>{status}</td>
      <td>{comments}</td>
      <td>{dateTime}</td>
      <td>{responsible}</td>
    </tr>
  );
};

export default Test;