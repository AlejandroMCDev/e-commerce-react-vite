import { Link } from "react-router-dom"
import { cart, logoDark } from "../assets"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react";



export const Header = () => {

  const { productData,userInfo } = useSelector( state => state.bazar );
  const [quantity, setQuantity] = useState(0);
  
  useEffect(() => {  
    let cant = 0
    productData.map( (item) => {
      cant += item.quantity
      return cant; 
    });
    setQuantity( cant );
  }, [ productData ]);

  


  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50">
      <div className="max-w-screen-2xl h-full mx-auto flex items-center justify-between">
        <Link to="/">
          <div>
            <img  className="w-28" src={logoDark} alt="logoDark"/>
          </div>
        </Link>
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <Link to="/">
              <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2
              decoration-[1px] cursor-pointer duration-300">Home</li>
            </Link>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2
            decoration-[1px] cursor-pointer duration-300">Pages</li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2
            decoration-[1px] cursor-pointer duration-300">Shop</li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2
            decoration-[1px] cursor-pointer duration-300">Element</li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2
            decoration-[1px] cursor-pointer duration-300">Blog</li>
          </ul>
          <Link to="/cart">
            <div className="relative">
              <img className="w-7" src={cart} alt="cart" />
              <span className="absolute w-6 bottom-4 left-5 text-sm flex items-center justify-center font-semibold">{quantity}</span>
            </div>
          </Link>
          <Link to="/login">
            <img className="w-8 h-8 rounded-full"
             src={userInfo ? userInfo.userPhoto : "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80"} referrerPolicy="no-referrer" alt="user-image" />
          </Link>
          {
            userInfo && (
              <p className="text-base font-titleFont font-semibold underline underline-offset-2">{userInfo.name}</p>
            )
          }
          
        </div>
      </div>
    </div>
  )
}
