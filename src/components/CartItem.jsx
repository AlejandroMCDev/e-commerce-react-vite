import { useDispatch, useSelector } from "react-redux"
import { MdOutlineClose } from 'react-icons/md'
import { HiOutlineArrowLeft } from 'react-icons/hi'
import { decrementQuantity, deleteItem, incrementQuantity, resetCart } from "../redux/bazarSlice";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";


export const CartItem = () => {
  
  const { productData } = useSelector( state => state.bazar );
  const dispatch = useDispatch(); 
  

  return (
    <div className="w-2/3 pr-10">
      <div className="w-full">
        <h2 className="font-titleFont text-2xl">Shopping cart</h2>
      </div>
      <div>
        {
          productData.map( (item) => (
            <div
              key={item.id}
              className="flex items-center justify-between gap-8 mt-6"
            >
              <div className="flex items-center gap-2">
                <MdOutlineClose
                  onClick={ () => dispatch( deleteItem({id: item.id})) && toast.error("Se ha quitado un item")  }
                  className="text-xl text-gray-600 hover:text-red-600 cursor-pointer duration-300"/>
                <img
                  className="w-32 h-32 object-cover"
                  src={item.image} 
                  alt="CartItemImage"
                />
              </div>
              <h2 className="w-52">{item.title}</h2>
              <div className="w-52 flex items-center justify-between text-gray-500 gap-4 border p-3">
                <p className="text-sm">Quantity</p>
                  <div className="flex items-center gap-4 text-sm font-semibold">
                    <button onClick={ () => dispatch( decrementQuantity({
                      id: item.id,
                      title: item.title,
                      image: item.image,
                      prince: item.price,
                      quantity: 1,
                      description: item.description
                    }) ) }  className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white
                    cursor-pointer duration-300 active:bg-black">
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={ () => dispatch( incrementQuantity({
                      id: item.id,
                      title: item.title,
                      image: item.image,
                      prince: item.price,
                      quantity: 1,
                      description: item.description
                    }) ) }   className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white
                    cursor-pointer duration-300 active:bg-black">
                      +
                    </button>
                  </div>
                </div>
              <p className="w-14">S/.{item.price * item.quantity}</p>
            </div>
          ) )
        }
      </div>
        <button onClick={ () => dispatch( resetCart() ) & toast.error("Your cart is empty!")  } className=" bg-red-500 text-white mt-8 ml-7 py-1 px-6 hover:bg-red-800 duration-300">
          Reset Cart
        </button>
        <Link to="/">
          <button className="mt-8 ml-7 flex items-center gap-1 text-gray-400 hover:text-black duration-300">
            <span>
              <HiOutlineArrowLeft/>
            </span>
            go shopping
          </button>
        </Link> 
      <ToastContainer 
        position="top-left"
        autoClose={3000}
        hideProgressBar = {false}
        newestOnTop = {false}
        closeOnClick
        rtl = {false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  )
}
