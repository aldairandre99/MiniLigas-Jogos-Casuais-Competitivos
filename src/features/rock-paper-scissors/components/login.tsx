import { AppleSvg } from "@/components/svg/apple";
import { FacebookSvg } from "@/components/svg/facebook";
import { GoogleSvg } from "@/components/svg/google";
import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";


export const LoginScreen = () => {
  const navigate = useNavigate()
  return (
    <div

      className="min-h-screen flex flex-col items-center justify-center gap-y-4 bg-gray-50 p-4"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
        className="mb-8"
      >
        <Image
          src="/assets/Logo-Animation-1.png"
          alt="Rock Paper Scissors Logo"
          className="w-48 h-auto"
        />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.7 }}
        className="text-3xl font-bold" style={{ color: '#E87D98', letterSpacing: '0.2em' }}>
        <span style={{ color: '#E87D98' }}>R</span> -
        <span style={{ color: '#F1BF42' }}> P</span> -
        <span style={{ color: '#5DBEF2' }}> S</span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 1 }}
        className="flex gap-x-5"
      >
        <GoogleSvg />
        <FacebookSvg />
        <AppleSvg />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 1.2 }}
        className="flex items-center w-full max-w-sm mb-8"
      >
        <div className="flex-grow border-t-2 border-orange-200"></div>
        <span className="mx-4 text-gray-500 font-medium">or</span>
        <div className="flex-grow border-t-2 border-orange-200"></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 1.4 }}
        className="w-full max-w-sm"
      >
        <Button
          onPress={() => navigate("/login")}
          className="w-full  bg-orange-30 hover:bg-orange-400 text-white font-semibold rounded-full shadow-md transition duration-300 ease-in-out"
          style={{ background: 'linear-gradient(to right, #FFC19D, #FFAB70)' }}>
          Sign in with Password
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 1.6 }}
        className="mt-8 text-gray-600">
        Don't have an account?{' '}
        <a href="#" className="text-orange-400 hover:underline font-semibold" style={{ color: '#FFAB70' }}>
          Sign Up
        </a>
      </motion.div>
    </div>
  );
};