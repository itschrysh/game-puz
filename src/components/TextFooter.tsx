import { Playfair_Display } from "next/font/google";
import Link from "next/link";

const playfairDisplay = Playfair_Display({
  display: "swap",
  subsets: ["latin"],
});

export default function TextFooter() {
  return (
    <>
      {/* Left Text */}
      <h1
        className={`absolute left-10 bottom-5 transform -translate-y-1/2 text-white text-5xl font-bold leading-tight ${playfairDisplay.className}`}
      >
        <span className="text-black-400">Hi</span> <br /> Camii :)
      </h1>

      {/* Right Text */}
      <h1
        className={`absolute right-10 bottom-5 transform -translate-y-1/2 text-red text-5xl font-bold leading-tight text-right ${playfairDisplay.className}`}
      >
        Match <br /> <span className="text-black-400">photo</span>
      </h1>

      {/* Copyright */}
      <p className="absolute bottom-5 right-5 text-white text-sm opacity-15 hover:opacity-50">
        © {new Date().getFullYear()}{" "}
        <Link href="">Chryshxoxo!</Link>
      </p>
    </>
  );
}
