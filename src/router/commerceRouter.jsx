import { MainLayout } from "../layout/MainLayout"
import { Cart } from "../pages/Cart"
import { Home } from "../pages/Home"
import { fetchProducts } from "../api/Api"
import { SingleProduct } from "../components/SingleProduct"
import { Login } from "../pages/Login"

export const getRoutes = [
  {
    path:"/",
    element:<MainLayout/>,
    children: [
      {
        path: "/",
        element:<Home/>,
        loader: fetchProducts
      },
      {
        path:"/cart",
        element: <Cart/>
      },
      {
        path:"/product/:id",
        element:<SingleProduct/>
      },
      {
        path:"/login",
        element: <Login/>
      }
    ]
  }
]