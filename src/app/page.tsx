import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-300 h-full p-4">
      <div className="flex items-center gap-x-2">
        <Button>
          <Link href={"/auth/register"}>Register</Link>
        </Button>
        <Button>
          <Link href={"/auth/login"}>login</Link>
        </Button>
      </div>
    </div>
  );
}
