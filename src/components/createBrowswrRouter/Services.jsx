import { Link, Outlet } from 'react-router-dom';
function Services() {
  return (
    <div>
      <h2>Services</h2>

      <Link>Service1</Link>
      <br />

      <Link to={'services/service2'}>Service2</Link>
      <div style={{ background: 'red', textAlign: '' }}>
        <Outlet />
      </div>
    </div>
  );
}

export default Services;
