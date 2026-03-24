import { createBrowserRouter } from "react-router-dom";
import Login from "./components/login";
import Register from "./components/register"
import DocList from "./components/doclist"
import Appmnt from "./components/appointments"
import DocBook from './components/doctor_book'
import App from "./App";

const router = createBrowserRouter([
    { path: '', element: <App/> },
    { path: 'login', element: <Login/> },
    {path:'register',element:<Register/>},
    {path:'doclist',element:<DocList/>},
    {path:'appointments',element:<Appmnt/>},
    {path:'book',element:<DocBook/>}
]);

export default router;