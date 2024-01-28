import { createBrowserRouter } from "react-router-dom";
import HomeScreen from "../Pages/HomeScreen";
import Layout from "../Block/Layout";
import Register from "../auth/Register";
import SignIn from "../auth/SignIn";
import Layout2 from "../Block/Layout2";
import HomeScreen2 from "../Pages/HomeScreen2";
import ReadBooks from "../Pages/ReadBooks";
import DashBoardProp from "../Pages/DashBoardProp";
import SettingScreen from "../Pages/Upgrade";


export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <SignIn />,
  },
  {
    path: "/homeScreen",
    element: <Layout2 />,
    children: [
      {
        index: true,
        element: <HomeScreen2 />,
      },
      {
        path: "readbooks",
        index: true,
        element: <ReadBooks />,
      },

      {
        path: "favourite",
        index: true,
        element: <DashBoardProp />,
      },
      {
        path: "upgrade",
        index: true,
        element: <SettingScreen/>,
      },
    ],
  },
]);

