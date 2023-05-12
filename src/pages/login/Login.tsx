import logo from './discord-logo-white.png'
import qr from './qr.png'
import {Link} from "react-router-dom";

function Login() {
    return (
    <div className='w-full h-full bg-zinc-800 text-white text-sm
    tablet:flex tablet:flex-row tablet:justify-center tablet:items-center tablet:bg-[url("/src/pages/login/background.jpg")]'>

        <div className='flex flex-col items-center gap-1
        tablet:hidden'>
            <img src={ logo } alt="Discord Logo" className='w-1/4 my-4' /> 
            <h3 className='mb-2'>Welcome back!</h3>
            <p className='text-gray-400'>We're so excited to see you again!</p>
        </div>
        
        <div className='h-3/5
        tablet:flex tablet:flex-row tablet:w-[500px] tablet:h-[420px] tablet:bg-zinc-800 tablet:rounded-lg 
        tablet:justify-center
        laptop:w-[750px] laptop:justify-normal
        desktop:w-[800px]'>
            <form className='mx-4 text-base text-gray-200 h-full
            tablet:w-3/5 tablet:mx-8 tablet:flex tablet:flex-col tablet:justify-center'>

                <div className='hidden tablet:block text-center text-base'>
                    <h3 className='mb-2'>Welcome back!</h3>
                    <p className='text-gray-400'>We're so excited to see you again!</p>
                </div>
                
                <p className='mt-3 mb-1 text-xs'>EMAIL OR PHONE NUMBER <span className='text-red-500'>*</span></p>
                <input type="text" className='w-full rounded-sm h-[8%] bg-zinc-900
                tablet:h-[9.5%] tablet:text-xl'/>

                <p className='mt-5 mb-1 text-xs'>PASSWORD <span className='text-red-500'>*</span></p>
                <input type="password" className='w-full rounded-sm h-[8%] bg-zinc-900
                tablet:h-[9.5%] tablet:text-xl'/>

                <p className='text-blue-400 mt-1 mb-4'>Forgot your password?</p>
                <Link className='bg-indigo-600 flex justify-center items-center w-full h-[6%] rounded-sm
                tablet:h-[9.5%]' to="/Home">
                    Login
                </Link>
                <br></br>
                <p className='inline-block mt-2 text-gray-400'>Need an account?  <span className='inline-block ml-1 text-blue-400'>Register</span></p>
            </form>

            <div className='hidden text-center flex-col justify-center items-center
            laptop:flex'>
                <img src={ qr } alt="QR Code" className='h-48 w-48'/>
                <h2 className='mb-2 mt-8'>Log in with QR Code</h2>
                <p className='text-gray-400'>Scan this with the <span className='font-bold'>Discord mobile app</span> to log in instantly.</p>
            </div>
        </div>
    </div>
    );
}

export default Login;