import Image from "next/image";
import { Layout } from "../components";

export default function Home() {
  return (
    <Layout>
      <div className="h-screen flex p-10">
        <div className="w-6/12 flex justify-center items-center">
          <div>
            <div className="text-5xl font-thin mb-3">Hello i&apos;m</div>
            <h2 className="text-6xl font-medium">
              Muhammad Zaqi Al <br />
              Quraisyi
            </h2>
            <div className="text-3xl p-3 bg-[#0085D0] font-thin mt-5 inline-block text-white">
              Fullstack Web & Mobile Developer
            </div>
          </div>
        </div>
        <div className="w-6/12 flex content-center items-center">
          <Image src="/sayaa.png" width={700} height={700} />
        </div>
      </div>
    </Layout>
  );
}
