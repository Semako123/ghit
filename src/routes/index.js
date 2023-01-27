import { createBrowserRouter } from "react-router-dom";
import courseRoute from "./courses.routes";
import homeRoute from "./home.routes";
import partnershipRoute from "./partnership.routes";
import programRoute from "./programs.routes";
import adultCoursesRoute from "./adultCourses.routes"

const router = createBrowserRouter([
  ...homeRoute,
  ...courseRoute,
  ...partnershipRoute,
  ...programRoute,
  ...adultCoursesRoute,
]);

export default router;
