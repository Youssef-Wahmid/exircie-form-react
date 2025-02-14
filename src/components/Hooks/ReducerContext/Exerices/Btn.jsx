import React from 'react';

const Btn = ({ action, value, dispatch }) => {
  const handelClick = () => {
    dispatch({ type: action.act, value: action.value });
  };

  return (
    <>
      <button onClick={handelClick}>{value}</button>
    </>
  );
};

export default Btn;
