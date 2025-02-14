/*
1-
Ideal for managing complex state, such as large forms with multiple inputs
2-
dispatch is the function used to send actions to the reducer
*/

import { useReducer } from 'react';
import './reducer.css';
const Reducer = () => {
  const initStatu = { name: '', email: '', notes: '', age: 2000 };
  const reducer = (statu, action) => {
    switch (action.ty) {
      case 'input':
        // console.log({ ...statu, [action.fildes]: action.values });
        return { ...statu, [action.fildes]: action.values };
      case 'submit':
        return console.log(statu);
      case 'reset':
        return initStatu;
      default:
        return statu;
    }
  };

  const [statu, dispatch] = useReducer(reducer, initStatu);

  const handelRes = () => {
    dispatch({ ty: 'reset' });
  };

  const handelChange = (e) => {
    dispatch({
      ty: 'input',
      fildes: e.target.name,
      values: e.target.value,
    });
  };

  const handelSub = (e) => {
    e.preventDefault();
    console.log(statu);
  };
  return (
    <>
      <h1>useReducer</h1>
      <form onSubmit={handelSub}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            onChange={handelChange}
            type="text"
            name="name"
            value={statu.name}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            value={statu.email}
            name="email"
            onChange={handelChange}
          />
        </div>
        <div>
          <label htmlFor="notes">Notes:</label>
          <textarea
            value={statu.notes}
            name="notes"
            onChange={handelChange}></textarea>
        </div>
        <div>
          <button onClick={handelRes} type="button">
            Reset
          </button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default Reducer;
