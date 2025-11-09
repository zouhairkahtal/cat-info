import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./views/HomePage";
import { CatGallery } from "./views/CatGallery";
import { Layout } from "./layout";



function App() {
  const router = createBrowserRouter([
    {
      path: "/",

      element: <Layout />,
      children: [
        {
          index: true,
          element: <HomePage/>,
        },
        {
          path:"Gallery",
          element: <CatGallery/>,
        },
        {
          path: "*",
          element: (
            <h1 className="text-center text-2xl text-red-600">
              404 - Page Not Found
            </h1>
          ),
        },
      ],
    },
  ]);
  return (
 
      <RouterProvider router={router} />
  
  );
}

export default App;
