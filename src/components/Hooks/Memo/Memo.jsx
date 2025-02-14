import { useMemo, useState } from 'react';
// useMemo hook in React memoizes the result of a computation,
// ensuring it is only recalculated when its dependencies change
// useMemo hook returns the memoized value
// const var = useMemo(()=>{},[dep]) ==> value

function Memo() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const handel1 = () => setCount1(count1 + 1);
  const handel2 = () => setCount2(count2 + 1);

  const IsEven = useMemo(() => {
    // let s = 0;
    // for (let i = 0; i < 2000000; i++) {
    //   s =s+ i;
    // }
    return count1 % 2 === 0;
  }, [count1]);

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Memo</h1>
      <button onClick={handel1}>{count1} </button>
      {IsEven ? 'Even' : 'Odd'}
      <button onClick={handel2}>{count2} </button>
    </>
  );
}

export default Memo;
