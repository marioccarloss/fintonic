import { createBrowserRouter, RouterProvider } from "react-router-dom";
import useRoutes from "hooks/useRoutes";

export default function App() {
  const { routes } = useRoutes();
  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
}
