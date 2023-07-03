import { Outlet, ScrollRestoration } from "react-router-dom"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"



export const MainLayout = () => {
  return (
    <div>
        <Header/>
        <ScrollRestoration/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
