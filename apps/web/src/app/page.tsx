import Particlesmoving from "../components/Particlesmoving";
import TypewriterTitle from "@repo/ui/Typewriter";
import { Button } from "@repo/ui/Button"
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/sketch1704618933812two - Copy.png"
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div>
      <Particlesmoving></Particlesmoving>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="grid justify-items-center">
          <Image src={logo} alt="logo" className="h-40 w-40"></Image>
        </div>
        <h1 className="font-semibold text-white text-7xl text-center">
          AI <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">note taking</span>{" "}
          assistant.
        </h1>
        <div className="mt-4"></div>
        <h2 className="font-semibold text-3xl text-center text-slate-700">
          <TypewriterTitle />
        </h2>
        <div className="mt-8"></div>
        <div className="flex justify-center">
          <Link href="/dashboard">
            <Button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Get Started
              </span>
              <ArrowRight></ArrowRight>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}