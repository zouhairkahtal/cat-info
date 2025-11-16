import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./views/HomePage";
import { CatGallery } from "./views/CatGallery";
import { Layout } from "./layout";
import { DogPage } from "./views/DogPage";
import { CatPage } from "./views/CatPage";
import { CAtInfo } from "./views/CatInfo";
import { DogGallery } from "./views/DogGallery";
import { DogInfo } from "./views/DogInfo";



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
          path:"HomePage",
          element: <HomePage/>,
        },
        {
          path:"Gallery",
          element: <CatGallery/>,
        },
        {
          path:"DogPage",
          element: <DogPage/>,
        },
        {
          path:"catPage",
          element: <CatPage/>,
        },
        {
          path:"CatInfo",
          element: <CAtInfo/>,
        },
        {
          path:"DogInfo",
          element: <DogInfo/>,
        },
        {
          path:"DogGallery",
          element: <DogGallery/>,
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
