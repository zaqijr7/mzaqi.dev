import Image from "next/image";

import {
  AcademicTimeline,
  CardCareer,
  ContactForm,
  Layout,
  TitleFlip,
} from "@components/index";

export default function Home() {
  return (
    <Layout>
      <div id="container" className="p-5 lg:p-10">
        <div className="flex flex-col prose prose-pre:p-0 max-w-none">
          <div className="pb-5 border-b-2">
            <div className="flex lg:inline-block lg:float-left items-center justify-center mb-5 lg:mb-0">
              <div
                id="cover-my-image"
                className="w-[200px] h-[200px] mr-5 relative"
              >
                <Image
                  src={"/saya.jpeg"}
                  fill={true}
                  className="rounded-lg m-0"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  alt="me"
                />
              </div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-xl xl:text-2xl font-semibold m-0">
                MUHAMMAD ZAQI Al QURAISYI
              </div>
              <div className="text-xl xl:text-2xl font-thin">
                Frontend Developer at Mandala Multifinance
              </div>
              <div className="mt-3 text-justify">
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
              styles="text-xl xl:text-2xl font-semibold my-3"
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3 mb-3">
              <CardCareer
                title="Frontend Developer"
                companyName="Mandala Finance"
                workPlace="Jakarta"
                companyWebsite="https://mandalafinance.com/"
                from="2022-06-27"
                to="Present"
                employmentType="Contract"
              />
              <CardCareer
                title="Web Developer"
                companyName="Cindrum"
                workPlace="Jakarta"
                companyWebsite="https://cindrum.com/"
                from={"2021-05-02"}
                to={"2022-06-22"}
                employmentType="Contract"
              />
              <CardCareer
                title="Graphic Designer"
                companyName="DePrint"
                workPlace="Tasikmalaya"
                companyWebsite="#"
                from="2019-05-28"
                to="2019-08-02"
                employmentType="Freelance"
              />
              <CardCareer
                title="System Administrator"
                companyName="Graha Putra Nusantara"
                workPlace="Tasikmalaya"
                companyWebsite="https://indokontraktor.com/business/pt-graha-putra-nusantara"
                from="2017-05-01"
                to="2017-08-19"
                employmentType="Internship"
              />
            </div>
          </div>
          <div className="">
            <TitleFlip
              title={"Academic"}
              icon="👨🏼‍🎓"
              styles="text-xl xl:text-2xl font-semibold my-3"
            />
            <div className="py-2 xl:py-4 xl:px-12">
              <AcademicTimeline />
            </div>
          </div>
          <div className="">
            <TitleFlip
              title={"Contact"}
              icon="📞"
              styles="text-xl xl:text-2xl font-semibold my-3"
            />
            <div className="">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
