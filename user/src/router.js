import { createBrowserRouter } from "react-router-dom";
import Login from "./components/login";
import Register from "./components/register"
import DocList from "./components/doclist"
import Appmnt from "./components/appointments"
import DocBook from './components/doctor_book'
import DocProfile from './components/doc_profile'
import App from "./App";
import UserProfile from './components/user_profile'
import UserProfileEdit from './components/userprof_edit'

const router = createBrowserRouter([
    { path: '', element: <App/> },
    { path: 'login', element: <Login/> },
    {path:'register',element:<Register/>},
    {path:'doclist',element:<DocList/>},
    {path:'appointments',element:<Appmnt/>},
    {path:'book/:id',element:<DocBook/>},
    {path:'docprofile/:id',element:<DocProfile/>},
    {path:'userprofile',element:<UserProfile/>},
    {path:'userprofedit',element:<UserProfileEdit/>}
]);

export default router;