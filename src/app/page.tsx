import Image from "next/image";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="text-red-600 h-screen">
      <div className="h-screen">
        <UserButton />
      </div>
      Button
    </div>
  );
}
