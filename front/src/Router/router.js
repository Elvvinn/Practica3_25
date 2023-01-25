import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AddPage from "../Pages/AddPage/add";
import DetailPage from "../Pages/DetailPage/detail";
import HomePage from "../Pages/HomePage/home";



const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/detail",
        element: <DetailPage />,
    },
    {
        path: "/add",
        element: <AddPage />,
    },
]);

export default router