import { Link, Outlet } from 'react-router-dom'

const Items = () => {
  return (
    <div>
      <h1>Items</h1>
      <Link to={'items/item/1'}>Item1</Link>
      <Link to={'items/item/2'}>Item2</Link>
      <Outlet/>
    </div>
  )
}

export default Items