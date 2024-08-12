import {createBrowserRouter} from "react-router-dom";
import Home from "../../components/Home";
import BoardList from "../../components/board/BoardList";
import React from "react";
import BoardWrite from "../../components/board/BoardWrite";
import Index from "../../components/Index";
import BoardDetail from "../../components/board/BoardDetail";
import JoinForm from "../../components/member/JoinForm";

const router= createBrowserRouter([
    {
        path: '/',
        element: <Index />,
        children : [
            {
                index : true,
                element: <Home />,
            },
            {
                path: '/board/list',
                element: <BoardList />,
            },
            {
                path: '/board/write',
                element: <BoardWrite />,
            },
            {
                path: '/board/detail/:id',
                element: <BoardDetail />
            },
            {
                path: '/member/join',
                element: <JoinForm/>,
            }
        ]
    }
]);

export default router;