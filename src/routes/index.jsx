import Home from "../pages/Home";
import Layout from "../Component/LayOut";


export const ROUTES = [
    {
        path: "/",
        element:<Layout/>,
        children : [
            {
                path:"",
                element:<Home/>
            },
            {
                path:"home",
                element:<Home/>
            }
        ]
    }
]