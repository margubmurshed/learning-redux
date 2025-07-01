import { createBrowserRouter, Navigate } from "react-router";
import Tasks from "@/pages/Tasks";
import App from "@/App";
import User from "@/pages/User";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                index: true,
                element: <Navigate to="/tasks"/>
            },
            {
                path: "tasks",
                Component: Tasks
            },
            {
                path: "user",
                Component: User
            }
        ]
    }
]);