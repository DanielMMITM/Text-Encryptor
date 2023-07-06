import {
    BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";

import Home from '../views/Home';
import Encrypt from '../views/Encrypt';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/Encrypt" element={<Encrypt />}></Route>
                
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;