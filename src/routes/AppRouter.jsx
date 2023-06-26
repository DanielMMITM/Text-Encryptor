import {
    BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";

import Home from '../views/Home';
import ColumnTranspos from '../views/ColumnTranspos';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/ColumnTranspos" element={ <ColumnTranspos/> }></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;