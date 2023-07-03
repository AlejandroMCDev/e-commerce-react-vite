import { useSelector } from "react-redux"
import { CartItem } from "../components/CartItem";
import { bgCart, payment } from "../assets";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { ToastContainer, toast } from "react-toastify";
import StripeCheckout from "react-stripe-checkout";



export const Cart = () => {

  const { productData,userInfo } = useSelector( state => state.bazar );
  const [totalAmt, setTotalAmt] = useState("");
  const [PayNow, setPayNow] = useState(false)


  useEffect(() => {
    let price = 0;
    productData.map(( item ) => {
      price += item.price * item.quantity
      return price;
    })
    setTotalAmt(price.toFixed(2));
  }, [ productData ]);

  const handleCheckout = () => {
    if (userInfo) {
      setPayNow(true);
    } else {
      toast.error("Por favor logeate para pagar")
    }
  }

  return (
    <div>
      <img
        className="w-full h-60 object-cover"
        src={bgCart}
        alt="cartImg" 
      />
      <div className="max-w-screen-2xl mx-auto py-32 flex justify-center items-center">
        {
          ( productData.length >= 1 ) 
          ?
          <>
            <CartItem/>
            <div className="w-1/3 bg-[#fafafa] py-6 px-4">
              <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
                <h2 className="text-2xl font-medium">Cart totals</h2>
                <p className="flex items-center gap-4 text-base">
                  Subtotal
                  <span className="font-titleFont font-bold text-lg">S/. {totalAmt}</span>
                </p>
                <p className="flex items-start gap-4 text-base">
                  Shopping
                  <span>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum dolorem tempore officiis pariatur,
                    vel voluptate numquam neque facilis voluptatum perferendis esse optio, aliquam eos, repellat dolores iure aliquid non placeat.
                  </span>
                </p>
              </div>
              <p className="font-titleFont font-semibold flex justify-between mt-6">
                Total <span className="text-xl font-bold">S/. {totalAmt}</span>
              </p>
              <button onClick={handleCheckout} className="text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300">Proceed to checkout</button>
              {
                PayNow && 
                  <div className="w-full mt-6 flex items-center justify-center">
                    <StripeCheckout
                      stripeKey="pk_test_51NPYOpDvk3F58eKTC5MU1nkEbZThBfesyy1tD5LlAXPXgVoU6q5CpIz6etB1hM2X8UJ0FhAG869vuv19F9mfLCAp00WDUwxIC6"
                      name="Ecommerce React Vite"
                      amount={totalAmt*100}
                      label="Pagame"
                      description={`Has pagado ${totalAmt}`}
                      //token={payment}
                      email={userInfo.email}
                    />
                  </div>
              }
            </div>
          </>
          : ( <div className="flex flex-col content-center items-center">     
                <p className="font-titleFont text-xl text-orange-500 font-bold">El carrito esta vacio asi que anda rellenalo con algo gil</p>      
                <Link to="/">
                  <button className="mt-2 ml-7 flex items-center gap-1 text-gray-400 hover:text-black duration-300">
                    <span>
                      <HiOutlineArrowLeft/>
                    </span>
                    go shopping
                  </button>
                </Link>
              </div>
            )
        }
      </div>
      <ToastContainer
         position='top-left'
         autoClose={2000}
         hideProgressBar={false}
         newestOnTop={false}
         closeOnClick
         rtl={false}
         pauseOnFocusLoss
         draggable
         pauseOnHover
         theme='dark'
        />
    </div>
  )
}
