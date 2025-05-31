import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Children } from "react";

const router= createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        Children: [
            {
                path: "/",
                element: <h1>Home</h1>
            }
        ]
    },
]);

export default router;