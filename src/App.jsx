import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { getRoutes } from "./router/commerceRouter"


const router = createBrowserRouter(getRoutes)

export const App = () => {
  return (
    <div className="font-bodyfont">
      <RouterProvider router={router}/>
    </div>
  )
}


