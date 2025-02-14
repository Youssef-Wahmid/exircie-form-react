import { useReducer } from 'react';

const initState = { name: '', email: '', age: '' };
const ControlForm = () => {
  const reducer = (s, action) => {
    switch (action.type) {
      case 'input':
        return { ...s, [action.nameFild]: action.valueFild };
      default:
        return s;
    }
  };
  const [state, dispatchForm] = useReducer(reducer, initState);

  const handelSub = (e) => {
    e.preventDefault();
    console.log(state);
  };

  const FormChange = (e) => {
    dispatchForm({
      type: 'input',
      nameFild: e.target.name,
      valueFild: e.target.value,
    });
  };
  return (
    <form onSubmit={handelSub} onChange={FormChange}>
      name:
      <input type="text" name="name" />
      <br />
      email:
      <input type="text" name="email" />
      <br />
      age:
      <input type="text" name="age" />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ControlForm;
