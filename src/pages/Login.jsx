import { ToastContainer, toast } from 'react-toastify';
import {google,gitHub} from '../assets';
import { GoogleAuthProvider,getAuth,signInWithPopup,signOut } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../redux/bazarSlice';

export const Login = () => {

    const dispatch = useDispatch();
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const handleGoogleLogin = (e) => {
        e.preventDefault()
        signInWithPopup( auth,provider ).then(( result ) => {
            const user = result.user;
            dispatch( addUser({
                email: user.email,
                name: user.displayName,
                userPhoto: user.photoURL    ,
                id: user.uid
            }))
        }).catch((error) => {
            console.log(error)
        })
    }

    const handleSignOut = () => {
        signOut( auth ).then(() => {
            toast.success("Cierre al salir!");
            dispatch( removeUser() );
        }).catch((error) => {
            console.log(error)
        })
    }

  return (
    <div className='w-full flex flex-col items-center justify-center gap-10 py-44'>
        <div className='w-full flex items-center justify-center gap-10'>
            <div onClick={handleGoogleLogin} className='text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center
            justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300 '>
                <img className='w-8' src={google} alt="googleLogo" />
                <span className='text-sm text-gray-900'>Sign in with Google</span>
            </div>
            <button onClick={handleSignOut} className='bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300'>
                Sign out
            </button>
        </div>
        <div className='w-full flex items-center justify-center gap-10'>
            <div className='text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center
            justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300 '>
                <img className='w-11' src={gitHub} alt="githubLogo" />
                <span className='text-sm text-gray-900'>Sign in with Github</span>
            </div>
            <button className='bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300'>
                Sign out
            </button>
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
