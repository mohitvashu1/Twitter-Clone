import { GoogleLogin } from "@react-oauth/google";
import { AiOutlineMail } from "react-icons/ai";

const AuthCard = ({ onLogin }: { onLogin: () => void }) => {
  return (
    <>
    <div className="border border-gray-700 rounded-2xl px-6 py-6 mx-6 mt-22 bg-black">

      {/* Title */}
      <h1 className="text-lg text-center text-gray-200 mb-4">
        New here?
      </h1>

      {/* Google Login */}
      <div className="flex justify-center mb-5">
        <GoogleLogin
          onSuccess={(cred) => console.log(cred)}
          onError={() => console.log("Login Failed")}
        />
      </div>

      {/* Divider */}
      <div className="flex items-center my-5">
        <div className="flex-1 h-px bg-gray-700" />
        <span className="px-3 text-xs text-gray-400 tracking-wide">
          OR
        </span>
        <div className="flex-1 h-px bg-gray-700" />
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-3">
        <button
          onClick={onLogin}
          className="w-full py-2.5  rounded-full bg-white text-black font-semibold
          hover:bg-gray-200 transition"
        >
          Sign In
        </button>

        <button
          className="w-full py-2.5 mt- rounded-full border border-gray-600
          text-white hover:bg-gray-800 transition"
        >
          Create Account
        </button>
      </div>
    </div>
    
    {/* 🔹 FLOATING MAIL */}
      <div className="fixed bottom-10 right-6">
        <button className="w-14 h-14 rounded-xl bg-black border border-gray-700
          flex items-center justify-center shadow-lg
          hover:bg-gray-800 transition">
          <AiOutlineMail className="text-white text-3xl" />
        </button>
      </div>
    
    
    </>




  );
};

export default AuthCard;
