import {
    BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";

import Home from '../views/Home';
import TransposColumn from '../views/TransposColumn';
import TransposClave from '../views/TransposClave';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/TransposColumn" element={<TransposColumn />}></Route>
                <Route path="/TransposClave" element={<TransposClave />}></Route>
                
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;