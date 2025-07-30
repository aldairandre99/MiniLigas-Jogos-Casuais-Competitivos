import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { GoogleSvg } from "@/components/svg/google";
import { FacebookSvg } from "@/components/svg/facebook";
import { AppleSvg } from "@/components/svg/apple";

export const SignUpScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-y-4 bg-gray-50 p-4">
      <motion.div
        animate={{ opacity: 1, scale: 1 }}
        className="mb-8"
        exit={{ opacity: 0, scale: 0.8 }}
        initial={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
      >
        <Image
          alt="Rock Paper Scissors Logo"
          className="w-48 h-auto"
          src="/assets/Logo-Animation-1.png"
        />
      </motion.div>

      <motion.h1
        animate={{ opacity: 1, scale: 1 }}
        className="text-3xl font-bold"
        exit={{ opacity: 0, scale: 0.8 }}
        initial={{ opacity: 0, scale: 0.8 }}
        style={{ color: "#E87D98", letterSpacing: "0.2em" }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.7 }}
      >
        <span style={{ color: "#E87D98" }}>R</span> -
        <span style={{ color: "#F1BF42" }}> P</span> -
        <span style={{ color: "#5DBEF2" }}> S</span>
      </motion.h1>

      <motion.div
        animate={{ opacity: 1, scale: 1 }}
        className="flex gap-x-5"
        exit={{ opacity: 0, scale: 0.8 }}
        initial={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 1 }}
      >
        <GoogleSvg />
        <FacebookSvg />
        <AppleSvg />
      </motion.div>

      <motion.div
        animate={{ opacity: 1, scale: 1 }}
        className="flex items-center w-full max-w-sm mb-8"
        exit={{ opacity: 0, scale: 0.8 }}
        initial={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 1.2 }}
      >
        <div className="flex-grow border-t-2 border-orange-200" />
        <span className="mx-4 text-gray-500 font-medium">or</span>
        <div className="flex-grow border-t-2 border-orange-200" />
      </motion.div>

      <motion.div
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-sm"
        exit={{ opacity: 0, scale: 0.8 }}
        initial={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 1.4 }}
      >
        <Button
          className="w-full  bg-orange-30 hover:bg-orange-400 text-white font-semibold rounded-full shadow-md transition duration-300 ease-in-out"
          style={{ background: "linear-gradient(to right, #FFC19D, #FFAB70)" }}
          onPress={() => navigate("/login")}
        >
          Sign in with Password
        </Button>
      </motion.div>

      <motion.div
        animate={{ opacity: 1, scale: 1 }}
        className="mt-8 text-gray-600"
        exit={{ opacity: 0, scale: 0.8 }}
        initial={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 1.6 }}
      >
        Não tem uma conta?{" "}
        <Link
          className="text-orange-400 hover:underline font-semibold"
          href="/login"
          style={{ color: "#FFAB70" }}
        >
          Sign Up
        </Link>
      </motion.div>
    </div>
  );
};
