import { createBrowserRouter } from "react-router-dom";
import Login from "./components/login";
import Register from "./components/register"
import DocList from "./components/doclist"
import App from "./App";

const router = createBrowserRouter([
    { path: '', element: <App/> },
    { path: 'login', element: <Login/> },
    {path:'register',element:<Register/>},
    {path:'doclist',element:<DocList/>}
]);

export default router;