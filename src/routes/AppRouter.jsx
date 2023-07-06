import {
  createBrowserRouter,
} from "react-router-dom";

import Home from '../views/Home';
import Encrypt from '../views/Encrypt';

const AppRouter = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: 'Encrypt',
        element: <Encrypt />,
    }
]);

export default AppRouter;