import { AppleSvg } from "@/components/svg/apple";
import { FacebookSvg } from "@/components/svg/facebook";
import { GoogleSvg } from "@/components/svg/google";
import { Image } from "@heroui/image";


export const LoginScreen = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-y-4 bg-gray-50 p-4">
      <div className="mb-8">
        <Image 
          src="/assets/Logo-Animation-1.png" 
          alt="Rock Paper Scissors Logo" 
          className="w-48 h-auto" 
        />
      </div>

      <h1 className="text-3xl font-bold" style={{ color: '#E87D98', letterSpacing: '0.2em' }}>
        <span style={{ color: '#E87D98' }}>R</span> -
        <span style={{ color: '#F1BF42' }}> P</span> -
        <span style={{ color: '#5DBEF2' }}> S</span>
      </h1>

      <div className="flex gap-x-5">
        <GoogleSvg/>
        <FacebookSvg/>
        <AppleSvg/>
      </div>

      {/* Divisor "or" */}
      <div className="flex items-center w-full max-w-sm mb-8">
        <div className="flex-grow border-t-2 border-orange-200"></div>
        <span className="mx-4 text-gray-500 font-medium">or</span>
        <div className="flex-grow border-t-2 border-orange-200"></div>
      </div>

      <button className="w-full max-w-sm px-4 py-3 bg-orange-300 hover:bg-orange-400 text-white font-semibold rounded-full shadow-md transition duration-300 ease-in-out"
              style={{ background: 'linear-gradient(to right, #FFC19D, #FFAB70)' }}>
        Sign in with Password
      </button>

      <div className="mt-8 text-gray-600">
        Don't have an account?{' '}
        <a href="#" className="text-orange-400 hover:underline font-semibold" style={{ color: '#FFAB70' }}>
          Sign Up
        </a>
      </div>
    </div>
  );
};