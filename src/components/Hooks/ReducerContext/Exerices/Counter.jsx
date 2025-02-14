import { useReducer } from 'react';
import Btn from './Btn';
import { actions } from './action';
const { UP, DOWN, RESET } = actions;

const reducerCoumter = (s, action) => {
  console.log(action);

  switch (action.type) {
    case UP:
      return s + action.value;
    case DOWN:
      return s - action.value;
    case RESET:
      return 0;

    default:
      return s;
  }
};
const initState = 0;
const Counter = () => {
  const [count, dispatchCounter] = useReducer(reducerCoumter, initState);

  return (
    <div>
      <h2>{count} </h2>
      <Btn
        action={{ act: UP, value: 1 }}
        value={'UP'}
        v
        dispatch={dispatchCounter}
      />
      <Btn
        action={{ act: DOWN, value: 1 }}
        value={'DOWN'}
        dispatch={dispatchCounter}
      />
      <Btn
        action={{ act: RESET, value: 0 }}
        value={'RESET'}
        dispatch={dispatchCounter}
      />
    </div>
  );
};

export default Counter;
