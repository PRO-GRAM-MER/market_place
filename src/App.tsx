import { createBrowserRouter, RouterProvider } from "react-router";
import { rootRoute } from "./rootRoute";



const router = createBrowserRouter(rootRoute);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
