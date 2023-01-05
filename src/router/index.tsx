import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { MainPages } from "../containers/mainPage";
import { Header } from "../containers/header/header";

export const Router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Header />}></Route>)
);
