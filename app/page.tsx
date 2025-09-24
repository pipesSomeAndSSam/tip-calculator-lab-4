import Image from "next/image";
import Calculator from "@/components/layouts/Calculator";
import { Space_Mono } from "next/font/google";

const spaceMone = Space_Mono({
  weight: "700",
});

export default function Home() {
  return (
    <div className={`page ${spaceMone.className}`}>
      <Image
        className="heading"
        src="/logo.svg"
        alt="splitter logo"
        width={75}
        height={75}
      />
      <div>
        <Calculator />
      </div>
    </div>
  );
}
