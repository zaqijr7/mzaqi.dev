import Image from "next/image";
import { Layout } from "@components/index";

export default function Home() {
  return (
    <Layout>
      <div className="lg:h-screen flex justify-center items-center flex-col px-10 lg:flex-row-reverse">
        <div className="lg:w-6/12 h-screen lg:h-fit flex justify-center items-center">
          <Image src="/sayaa.png" width={700} height={700} alt="me" />
        </div>
        <div className="lg:w-6/12 h-screen lg:h-fit flex justify-center items-center">
          <div>
            <div className="text-3xl xl:text-5xl font-thin mb-3">
              Hallo i&apos;m
            </div>
            <h2 className="text-3xl xl:text-5xl font-medium">
              Muhammad Zaqi Al <br />
              Quraisyi
            </h2>
            <div className="text-xl xl:text-3xl p-3 bg-gradient-to-r from-cyan-500 to-blue-500 font-thin mt-5 inline-block text-white">
              Fullstack Web & Mobile Developer
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
