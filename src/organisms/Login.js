
import Image from 'next/image';
import LoginSvg from 'public/login.svg';

export default function Login() {
  return (
    <div className='flex justify-center items-center'>
      <div className="flex w-[80%] h-screen bg-white">
        <div className="flex flex-1">
          <Image src={LoginSvg} alt="login-img" width={550} height={550} layout="fixed" />
        </div>

        <div className="flex-1 flex justify-center items-center">
          <div className="h-1/2 w-[60%] m-0 5rem flex flex-col justify-center">
            <div className="m-0 mb-[10%] p-0 font-bold text-center text-2xl">Sign in</div>

            <label className="m-0 mt-1rem mb-2 p-0 text-gray-500 font-semibold" htmlFor="standard-basic-email">
              Email
            </label>
            <input
              className="h-[42px] px-4 py-3 bg-gray-50 rounded-lg border border-gray-300 mb-[8%]"
              type="text"
              id="standard-basic-email"
              name="email"
            />

            <label className="m-0 mt-1rem mb-2 p-0 text-gray-500 font-semibold" htmlFor="standard-basic-password">
              Password
            </label>
            <input
              className="h-[42px] px-4 py-3 bg-gray-50 rounded-lg border border-gray-300 mb-[8%]"
              type="password"
              id="standard-basic-password"
              name="password"
            />

            <div className="flex justify-end">
              <button className="text-black font-medium transform-none p-0.5 mr-0.5 mb-[10%] text-sm hover:bg-transparent" type="button">
                Forget Password
              </button>
            </div>

            <div className='flex justify-center items-center'>
            <button className="w-[215px] h-[41px] pl-[19px] pr-5 py-2.5 bg-gray-900 rounded-lg text-white transform-none text-sm font-semibold mb-[10%] hover:bg-black" type="button">
              Sign in
            </button>
            </div>

            <h5 className="font-medium text-sm m-0 auto text-center text-gray-900">
              Don't have an account?
              <a href="#" className="font-medium text-blue-600 text-sm hover:underline p-0 ml-1 cursor-pointer">
                Sign up
              </a>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

