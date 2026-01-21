import { useEffect } from "react";
import { useRouter } from "next/router";
import Header from "@/components/Header";
import HeroCard from "@/components/HeroCard";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const token = window.localStorage.getItem("_M_token");

    if (!token) {
      router.replace("/login");
    }
  }, [router]);

  return (
    <div className="h-screen">
      <Header />
      <HeroCard />
    </div>
  );
}
