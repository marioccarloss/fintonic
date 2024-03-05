import Browser from "components/pages/Browse";
import ErrorPage from "components/pages/ErrorPage";
export default function useRoutes() {
  const routes = [
    {
      path: "/",
      element: <Browser />,
      errorElement: <ErrorPage />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ];

  return { routes };
}
