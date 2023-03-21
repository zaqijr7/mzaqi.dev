import { Layout } from "@components/index";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/404");
  }, []);
  return (
    <div className="h-screen w-screen bg-gray-900 flex justify-center items-center">
      <div className="text-center">
        <div className="text-7xl mb-3 text-red-500">404</div>
        <div className="text-3xl font-thin text-white">Not Found</div>
      </div>
    </div>
  );
}
