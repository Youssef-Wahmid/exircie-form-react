import { useContext } from 'react';
import { MyContext, MyContext2 } from './Parent';

function Child() {
  const text = useContext(MyContext);
  const nb = useContext(MyContext2);
  return (
    <>
      <h1>{text}</h1>

      <h1>{nb}</h1>
      {/* {users.map((u)=>{
            return(
                <li key={u.id}>
                    {u.name}
                </li>
            )
        })} */}
    </>
  );
}

export default Child;
