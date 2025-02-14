import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home.jsx';
import About from './About.jsx';
import Services from './Services.jsx';
import Contact from './Contact.jsx';
import Layout from './Layout.jsx';
import Service1 from './services/Service1.jsx';
import Service2 from './services/Service2.jsx';
import NotFound from './NotFound.jsx';
import Items from './Params/Items.jsx';
import Details from './Params/Details.jsx';

const Index = () => {
  const myRouting = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: '/about', element: <About /> },
        {
          path: '/services',
          element: <Services />,
          children: [
            { index: true, element: <Service1 /> },
            { path: 'services/service2', element: <Service2 /> },
          ],
        },
        { path: '/contact', element: <Contact /> },
        {
          path: '/items',
          element: <Items />,
          //! Passing Params
          children: [{ path: 'items/item/:id', element: <Details /> }],
        },
        //! Not Found Url
        { path: '/*', element: <NotFound /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={myRouting} />
    </>
  );
};

export default Index;
