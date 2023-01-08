import { createBrowserRouter } from "react-router-dom";
import courseRoute from "./courses.routes";
import homeRoute from "./home.routes";

const router = createBrowserRouter([...homeRoute, ...courseRoute]);

export default router;
