import Image from "next/image";
import Calculator from "@/app/components/Calculator";

export default function Home() {
  return (
    <div className="page">
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
