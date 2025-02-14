import CoponentA from './CoponentA';
import CoponentB from './CoponentB';
import Service1 from './services/Service1';
import Service2 from './services/Service2';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './Nav';
import Service from './Service';

const Index = () => {
  return (
    <>
      {/* <Service2/>
    <Service1/> */}
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="a" element={<CoponentA />} />
          <Route path="b" element={<CoponentB />} />
          <Route path="services" element={<Service />}>
            <Route path="service1" element={<Service1 />} />
            <Route path="service2" element={<Service2 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Index;
