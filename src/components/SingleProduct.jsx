import { useEffect, useState } from "react";
import { MdOutlineStar } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom"
import { addToCart } from "../redux/bazarSlice";
import { ToastContainer, toast } from "react-toastify";


export const SingleProduct = () => {

    const dispatch = useDispatch();
    const [details, setDetails] = useState({});
    const [quantity, setQuantity] = useState(1);
    const location = useLocation();
    useEffect(() => {
      setDetails(location.state.item)
    }, []);


    const incrementQuantity = ( ) => {
      setQuantity(quantity + 1);
    }

    const decrementQuantity = ( ) => {
      if(quantity <= 1) return;
      setQuantity(quantity - 1);
    }

  return (
    <div>
      <div className="max-w-screen-2xl h-[550px] mx-auto my-10 flex gap-10">
        <div className="w-3/12 relative ">
          <img 
          className="max-w-full max-h-full object-cover"
          src={details.image} 
          alt="productImage"
          />
        </div>
        <div className="w-3/5 flex flex-col justify-center gap-12">
          <div>
            <h2 className="text-3xl font-semibold">{details.title}</h2>
            <div>
              <p className="text-2xl font-medium mt-3 text-gray-900">S/.{details.price}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-base">
            <div className="flex">
              <MdOutlineStar/>
              <MdOutlineStar/>
              <MdOutlineStar/>
              <MdOutlineStar/>
              <MdOutlineStar/>
            </div>
            <p>({details.rating?.count} Customer Review)</p>
          </div>
          <p className="text-base text-gray-500 -mt-3">{details.description}</p>
          <div className="flex gap-4">
            <div className="w-52 flex items-center justify-between text-gray-500 gap-4 border p-3">
              <p className="text-sm">Quantity</p>
              <div className="flex items-center gap-4 text-sm font-semibold">
                <button onClick={decrementQuantity} className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white
                cursor-pointer duration-300 active:bg-black">
                  -
                </button>
                <span>{quantity}</span>
                <button onClick={incrementQuantity} className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white
                cursor-pointer duration-300 active:bg-black">
                  +
                </button>
              </div>
            </div>
            <button onClick={ () => dispatch(addToCart({
              id: details.id,
              title: details.title,
              image: details.image,
              quantity,
              description: details.description,
              price: details.price
                })
              ) & toast.success(`${details.title} is added`)
            } className="bg-black text-white py-3 px-6 active:bg-gray-800">add to cart</button>
          </div>
          <p className="text-base text-gray-500">Category: <span className="font-medium capitalize">{details.category}</span></p>
        </div>
      </div>
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
