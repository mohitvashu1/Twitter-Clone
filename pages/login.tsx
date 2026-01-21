import Image from "next/image";
import logo from "@/public/logo.png";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { graphqlClient } from "@/clients/api";
import { verifyUserGoogleTokenQuery } from "@/graphql/query/user";
import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useCallback } from "react";
import { useRouter } from "next/router";

export default function Login() {
  const queryClient = useQueryClient();
  const router = useRouter();

  const handleLoginWithGoogle = useCallback(
    async (cred: CredentialResponse) => {
      try {
        const googleToken = cred.credential;

        if (!googleToken) {
          toast.error("Google token not found");
          return;
        }

        const { verifyGoogleToken } = await graphqlClient.request(
          verifyUserGoogleTokenQuery,
          { token: googleToken }
        );

        if (!verifyGoogleToken) {
          toast.error("Verification failed");
          return;
        }

        // ✅ Store JWT
        window.localStorage.setItem("_M_token", verifyGoogleToken);

        toast.success("Login successful");

        // ✅ Refetch user
        await queryClient.invalidateQueries({
          queryKey: ["current-user"],
        });

        // ✅ REDIRECT TO HOME
        router.push("/");

      } catch (err) {
        console.error(err);
        toast.error("Something went wrong");
      }
    },
    [queryClient, router]
  );

  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Left */}
      <div className="hidden md:flex w-1/2 items-center justify-center">
        <Image src={logo} alt="logo" width={250} priority />
      </div>

      {/* Right */}
      <div className="flex w-full md:w-1/2 flex-col justify-center items-center px-8 md:px-20">
        <h1 className="text-5xl font-bold mb-6">Happening now</h1>
        <h2 className="text-3xl font-bold mb-8">Join today.</h2>

        <div className="flex justify-center">
          <GoogleLogin
            onSuccess={handleLoginWithGoogle}
            onError={() => toast.error("Google login failed")}
            useOneTap
          />
        </div>
      </div>
    </div>
  );
}
