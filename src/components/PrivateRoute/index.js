import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const token = "";

const PrivateRoute = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      const idTimeOut = setTimeout(() => {
        router.push("/cms-admin");
        clearTimeout(idTimeOut);
      }, 3000);
    }
  }, []);

  if (token) {
    return children;
  } else {
    return (
      <div className="h-screen w-screen bg-gray-900 flex justify-center items-center">
        <div className="text-center">
          <div className="text-7xl mb-3 text-red-500">403</div>
          <div className="text-3xl font-thin text-white">Access Forbidden</div>
        </div>
      </div>
    );
  }
};

export default PrivateRoute;
