import Image from "next/image";

import {
  AcademicTimeline,
  CardCareer,
  ContactForm,
  Layout,
  TitleFlip,
} from "../../components";

export default function Home() {
  return (
    <Layout>
      <div id="container" className="p-10">
        <div className="flex flex-col">
          <div className="pb-5 border-b-2">
            <div
              id="cover-my-image"
              className="w-[250px] h-[250px] mr-5 relative inline float-left"
            >
              <Image
                src={"/saya.jpeg"}
                fill={true}
                className="rounded-lg m-0"
                style={{ objectFit: "cover", objectPosition: "center" }}
                alt="me"
              />
            </div>
            <div className="inline">
              <div className="text-[1.8vw] font-semibold m-0">
                MUHAMMAD ZAQI Al QURAISYI
              </div>
              <div className="text-[1.8vw] font-thin">
                Frontend Developer at Mandala Multifinance
              </div>
              <div className="text-xl mt-3 text-justify">
                A Web and mobile developer who have a very high interest
                intechnological developments, especially in web and mobile app
                development. Able to adapt quickly both learning new things,
                working in teams or individually, and has experience in
                developing web with a focus on MERN stack and MEVN stack
                technologies that are also can connected to the blockchain, and
                has experience in developing mobile applications using React
                Native technology. Currently focusing on learning blockchain
                development using solidity and Web 3.0. A person who is
                enthusiastic, likes challenges, loyal, adaptive and fast
                learner.
              </div>
            </div>
          </div>
          <div className="">
            <TitleFlip
              title={"Career"}
              icon="👨🏼‍💻"
              styles="text-3xl font-semibold my-3"
            />
            <div className="grid grid-cols-3 gap-3 mb-3">
              <CardCareer
                title="Frontend Developer"
                companyName="Mandala Finance"
                workPlace="Jakarta"
                companyWebsite="https://mandalafinance.com/"
                from="Jun 2022"
                to="Present"
                employmentType="Contract"
              />
              <CardCareer
                title="Web Developer"
                companyName="Cindrum"
                workPlace="Jakarta"
                companyWebsite="https://cindrum.com/"
                from="May 2021"
                to="Jun 2022"
                employmentType="Contract"
              />
              <CardCareer
                title="Graphic Designer"
                companyName="DePrint"
                workPlace="Tasikmalaya"
                companyWebsite="#"
                from="May 2019"
                to="Jul 2019 "
                employmentType="Freelance"
              />
              <CardCareer
                title="System Administrator"
                companyName="Graha Putra Nusantara"
                workPlace="Tasikmalaya"
                companyWebsite="https://indokontraktor.com/business/pt-graha-putra-nusantara"
                from="May 2017"
                to="Aug 2017"
                employmentType="Internship"
              />
            </div>
          </div>
          <div className="">
            <TitleFlip
              title={"Academic"}
              icon="👨🏼‍🎓"
              styles="text-3xl font-semibold my-3"
            />
            <div className="py-4 px-12">
              <AcademicTimeline />
            </div>
          </div>
          <div className="">
            <TitleFlip
              title={"Contact"}
              icon="📞"
              styles="text-3xl font-semibold my-3"
            />
            <div className="px-4">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
