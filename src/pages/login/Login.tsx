import logo from './discord-logo-white.png'
import qr from './qr.png'

function Login() {
    return (
    <div className='w-full h-full bg-zinc-800 text-white text-sm
    desktop:flex desktop:flex-row desktop:justify-center desktop:items-center desktop:bg-[url("/src/pages/login/background.jpg")]'>
        <div className='flex flex-col items-center gap-1
        desktop:hidden'>
            <img src={ logo } alt="Discord Logo" className='w-1/4 my-4' /> 
            <h3 className='mb-2'>Welcome back!</h3>
            <p className='text-gray-400'>We're so excited to see you again!</p>
        </div>
        
        <div className='h-3/5
        desktop:flex desktop:flex-row desktop:w-[40%] desktop:h-[45%] desktop:bg-zinc-800 desktop:rounded-lg'>
            <form className='mx-4 text-xs text-gray-200 h-full
            desktop:w-3/5 desktop:mx-8 desktop:flex desktop:flex-col desktop:justify-center'>
                <div className='hidden desktop:block text-center text-base'>
                    <h3 className='mb-2'>Welcome back!</h3>
                    <p className='text-gray-400'>We're so excited to see you again!</p>
                </div>
                <p className='mt-3 mb-1'>EMAIL OR PHONE NUMBER <span className='text-red-500'>*</span></p>
                <input type="text" className='w-full rounded-sm h-[8%] bg-zinc-900 text-base
                desktop:h-[9.5%]' />
                <p className='mt-5 mb-1'>PASSWORD <span className='text-red-500'>*</span></p>
                <input type="password" className='w-full rounded-sm h-[8%] bg-zinc-900 text-base
                desktop:h-[9.5%]'/>
                <p className='text-blue-400 mt-1 mb-4'>Forgot your password?</p>
                <button className='bg-indigo-600 w-full h-[6%] rounded-sm
                desktop:h-[9.5%]'>
                    Log In
                </button>
                <br></br>
                <p className='inline-block mt-2 text-gray-400'>Need an account?  <span className='inline-block ml-1 text-blue-400'>Register</span></p>
            </form>

            <div className='hidden text-center flex-col justify-center items-center
            desktop:flex'>
                <img src={ qr } alt="QR Code" className='h-48 w-48'/>
                <h2 className='mb-2 mt-8'>Log in with QR Code</h2>
                <p className='text-gray-400'>Scan this with the <span className='font-bold'>Discord mobile app</span> to log in instantly.</p>
            </div>
        </div>
    </div>
    );
}

export default Login