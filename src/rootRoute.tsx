import RootLayout from "./RootLayout";
import HomePage from "./pages/homepage/HomePage";

export const rootRoute = [{
  path:"/",
  element:<RootLayout/>,
  children: [{index:true, element:<HomePage/>}]
}]