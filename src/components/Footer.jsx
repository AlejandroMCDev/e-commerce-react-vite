import { logoLight, payment } from "../assets";
import { ImGithub } from 'react-icons/im';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaHome } from "react-icons/fa";
import { BsPersonFill, BsPaypal } from 'react-icons/bs';
import { MdLocationOn } from 'react-icons/md';


export const Footer = () => {
  return (
    <footer className="bg-black text-[#949494] py-20 font-titleFont">
        <div className="max-w-screen-2xl mx-auto  grid grid-cols-4">
            <div className="flex flex-col gap-7">
                <img className="w-32" src={logoLight} alt="logoLight" />
                <p className="text-white text-sm tracking-wide">Andopracticando.com</p>
                <img className="w-56" src={payment} alt="paymentImg" />
                <div className="flex gap-5 text-lg text-gray-400">
                    <ImGithub className="hover:text-white duration-300 cursor-pointer"/>
                    <FaYoutube className="hover:text-white duration-300 cursor-pointer"/>
                    <FaFacebook className="hover:text-white duration-300 cursor-pointer"/>
                    <FaTwitter className="hover:text-white duration-300 cursor-pointer"/>
                    <FaInstagram className="hover:text-white duration-300 cursor-pointer"/>
                    {/* <FaHome className="hover:text-white duration-300 cursor-pointer"/> */}
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-semibold text-white mb-4">Locate Us</h2>
                <div className="text-base flex flex-col gap-2">
                    <p>Peru,Trujillo Razuri 4 Etapa</p>
                    <p>Mobile: 044 229312</p>
                    <p>Phone: 732 232 244</p>
                    <p>e-mail: aversiaprendoalgo@gmail.com</p>
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-semibold text-white mb-4">Profile</h2>
                <div className="flex flex-col gap-2 text-base">
                    <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
                        <BsPersonFill/> Mi cuenta
                    </p>
                    <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
                        <BsPaypal/> Checkout
                    </p>
                    <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
                        <FaHome/> Order Tracking
                    </p>
                    <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
                        <MdLocationOn/> Help & Support
                    </p>
                </div>
            </div>

            <div className="flex flex-col justify-center">
                <input
                 className="bg-transparent border px-4 py-2 text-sm" placeholder="e-mail" 
                 type="text"/>
                <button className="text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black">Suscribete</button>
            </div>
        </div>
    </footer>
  )
}
