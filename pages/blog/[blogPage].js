import React from "react";
import { useRouter } from "next/router";
import { Layout } from "../../components";
import { UilArrowLeft, UilHeart, UilShare } from "@iconscout/react-unicons";
import Image from "next/image";

export default function BlogPost() {
  const router = useRouter();
  // console.log(router);
  return (
    <>
      <Layout className="">
        <div className="w-7/12 px-20 py-10 overflow-auto scrollbar-hide">
          <div className="flex items-center">
            <UilArrowLeft /> Back
          </div>
          <div className="my-5 font-bold text-3xl">
            Building a Custom Google Maps Marker React Component Like Airbnb in
            Next.js
          </div>
          <div className="flex items-center">
            <div className="bg-gray-200 py-2 px-3 rounded-full">
              04 October 2022
            </div>
            <div className="bg-gray-200 p-2 rounded-full mx-2">
              <UilHeart />
            </div>
            <div className="bg-gray-200 p-2 rounded-full">
              <UilShare />
            </div>
            {/* <div>04 October 2022</div> */}
          </div>
          <div className="relative w-full h-[30rem] mt-8">
            <Image
              src={
                "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
              }
              fill={true}
              alt="img content"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="text-justify py-5">
            Dolor eu fugiat sunt sit tempor non sunt incididunt nostrud aute
            culpa incididunt nulla. Laboris deserunt ea eiusmod occaecat
            proident Lorem deserunt nisi elit aute. Cillum dolor sunt irure
            Lorem nulla minim commodo proident incididunt nulla deserunt. Ea
            irure adipisicing cillum adipisicing nostrud eiusmod occaecat ad
            culpa non. Aliquip labore ullamco occaecat enim adipisicing sit
            aliqua exercitation ullamco dolore dolor est. Cupidatat laborum
            dolore nisi do dolore proident mollit fugiat ut. Dolor anim commodo
            in deserunt reprehenderit Lorem occaecat incididunt veniam voluptate
            aute. Aliqua mollit aliqua ea adipisicing dolore officia
            exercitation. Est quis tempor in duis non adipisicing amet in do est
            aliqua. Lorem adipisicing sit deserunt proident cupidatat et
            incididunt velit. Dolore adipisicing proident nisi esse ullamco id
            est id irure fugiat. Veniam irure voluptate consequat elit. Id
            eiusmod veniam exercitation culpa ut eiusmod deserunt mollit tempor
            culpa consectetur. Ea veniam fugiat irure consectetur quis aliqua
            cillum mollit adipisicing labore duis laborum amet. Commodo ipsum do
            cillum quis labore excepteur nulla. Exercitation duis tempor nostrud
            tempor aliquip excepteur non do commodo. Cillum Lorem sit ipsum
            irure id elit dolor labore ipsum. Minim culpa ipsum exercitation
            esse amet excepteur dolor cillum nisi excepteur ex nisi. Incididunt
            elit magna excepteur ea voluptate sint laboris proident anim ea
            cillum fugiat. Consectetur aliqua deserunt veniam dolor proident in
            culpa aliqua proident sunt dolore proident laboris adipisicing.
            Velit enim ipsum exercitation aliquip ipsum occaecat. Aute ea
            exercitation dolor officia veniam Lorem velit officia cupidatat
            adipisicing et. Culpa nulla proident ut nulla qui aliquip magna
            irure officia ullamco magna laborum adipisicing. Anim deserunt
            eiusmod irure ex anim cillum laborum ipsum adipisicing anim aliqua
            quis. Sit deserunt cillum et commodo non quis aliquip eu fugiat
            eiusmod ad proident et laborum. Nulla qui irure mollit esse sunt
            elit non labore. Nisi aliquip exercitation proident minim tempor
            voluptate incididunt ipsum nulla labore magna mollit. Incididunt
            magna aute excepteur nostrud reprehenderit aute. Sit consectetur
            exercitation in veniam qui qui deserunt veniam esse proident
            voluptate. Nulla et fugiat sint nulla nostrud proident dolore enim
            ipsum magna duis. Duis mollit culpa ipsum magna nisi fugiat
            incididunt. Laborum pariatur in sit consectetur dolore. Minim qui
            enim ullamco eiusmod consequat commodo qui ipsum commodo minim duis.
            Consequat cupidatat sunt irure officia do incididunt velit cupidatat
            enim irure exercitation. Cupidatat occaecat laborum consectetur
            labore ea enim officia consequat tempor nulla consectetur enim. Sit
            aliquip nulla fugiat magna reprehenderit sunt id labore aute nostrud
            consequat nostrud. Laboris do laborum elit esse officia consectetur
            deserunt tempor ipsum mollit. Nulla laboris incididunt duis sit
            consectetur consequat non veniam officia incididunt. Esse velit elit
            est et nulla Lorem sit reprehenderit eu ullamco anim. Non aliquip
            deserunt nostrud nostrud est occaecat ut nulla occaecat eu elit ex.
            Veniam ut do ipsum nostrud et reprehenderit consectetur aliqua irure
            fugiat eiusmod. Ex exercitation cupidatat consectetur ea cupidatat
            est cillum quis cupidatat esse. Commodo enim cupidatat culpa
            incididunt velit voluptate reprehenderit quis consequat excepteur
            consequat. Reprehenderit amet magna culpa minim. Laboris enim veniam
            quis do laboris. Dolor eu fugiat sunt sit tempor non sunt incididunt
            nostrud aute culpa incididunt nulla. Laboris deserunt ea eiusmod
            occaecat proident Lorem deserunt nisi elit aute. Cillum dolor sunt
            irure Lorem nulla minim commodo proident incididunt nulla deserunt.
            Ea irure adipisicing cillum adipisicing nostrud eiusmod occaecat ad
            culpa non. Aliquip labore ullamco occaecat enim adipisicing sit
            aliqua exercitation ullamco dolore dolor est. Cupidatat laborum
            dolore nisi do dolore proident mollit fugiat ut. Dolor anim commodo
            in deserunt reprehenderit Lorem occaecat incididunt veniam voluptate
            aute. Aliqua mollit aliqua ea adipisicing dolore officia
            exercitation. Est quis tempor in duis non adipisicing amet in do est
            aliqua. Lorem adipisicing sit deserunt proident cupidatat et
            incididunt velit. Dolore adipisicing proident nisi esse ullamco id
            est id irure fugiat. Veniam irure voluptate consequat elit. Id
            eiusmod veniam exercitation culpa ut eiusmod deserunt mollit tempor
            culpa consectetur. Ea veniam fugiat irure consectetur quis aliqua
            cillum mollit adipisicing labore duis laborum amet. Commodo ipsum do
            cillum quis labore excepteur nulla. Exercitation duis tempor nostrud
            tempor aliquip excepteur non do commodo. Cillum Lorem sit ipsum
            irure id elit dolor labore ipsum. Minim culpa ipsum exercitation
            esse amet excepteur dolor cillum nisi excepteur ex nisi. Incididunt
            elit magna excepteur ea voluptate sint laboris proident anim ea
            cillum fugiat. Consectetur aliqua deserunt veniam dolor proident in
            culpa aliqua proident sunt dolore proident laboris adipisicing.
            Velit enim ipsum exercitation aliquip ipsum occaecat. Aute ea
            exercitation dolor officia veniam Lorem velit officia cupidatat
            adipisicing et. Culpa nulla proident ut nulla qui aliquip magna
            irure officia ullamco magna laborum adipisicing. Anim deserunt
            eiusmod irure ex anim cillum laborum ipsum adipisicing anim aliqua
            quis. Sit deserunt cillum et commodo non quis aliquip eu fugiat
            eiusmod ad proident et laborum. Nulla qui irure mollit esse sunt
            elit non labore. Nisi aliquip exercitation proident minim tempor
            voluptate incididunt ipsum nulla labore magna mollit. Incididunt
            magna aute excepteur nostrud reprehenderit aute. Sit consectetur
            exercitation in veniam qui qui deserunt veniam esse proident
            voluptate. Nulla et fugiat sint nulla nostrud proident dolore enim
            ipsum magna duis. Duis mollit culpa ipsum magna nisi fugiat
            incididunt. Laborum pariatur in sit consectetur dolore. Minim qui
            enim ullamco eiusmod consequat commodo qui ipsum commodo minim duis.
            Consequat cupidatat sunt irure officia do incididunt velit cupidatat
            enim irure exercitation. Cupidatat occaecat laborum consectetur
            labore ea enim officia consequat tempor nulla consectetur enim. Sit
            aliquip nulla fugiat magna reprehenderit sunt id labore aute nostrud
            consequat nostrud. Laboris do laborum elit esse officia consectetur
            deserunt tempor ipsum mollit. Nulla laboris incididunt duis sit
            consectetur consequat non veniam officia incididunt. Esse velit elit
            est et nulla Lorem sit reprehenderit eu ullamco anim. Non aliquip
            deserunt nostrud nostrud est occaecat ut nulla occaecat eu elit ex.
            Veniam ut do ipsum nostrud et reprehenderit consectetur aliqua irure
            fugiat eiusmod. Ex exercitation cupidatat consectetur ea cupidatat
            est cillum quis cupidatat esse. Commodo enim cupidatat culpa
            incididunt velit voluptate reprehenderit quis consequat excepteur
            consequat. Reprehenderit amet magna culpa minim. Laboris enim veniam
            quis do laboris. Dolor eu fugiat sunt sit tempor non sunt incididunt
            nostrud aute culpa incididunt nulla. Laboris deserunt ea eiusmod
            occaecat proident Lorem deserunt nisi elit aute. Cillum dolor sunt
            irure Lorem nulla minim commodo proident incididunt nulla deserunt.
            Ea irure adipisicing cillum adipisicing nostrud eiusmod occaecat ad
            culpa non. Aliquip labore ullamco occaecat enim adipisicing sit
            aliqua exercitation ullamco dolore dolor est. Cupidatat laborum
            dolore nisi do dolore proident mollit fugiat ut. Dolor anim commodo
            in deserunt reprehenderit Lorem occaecat incididunt veniam voluptate
            aute. Aliqua mollit aliqua ea adipisicing dolore officia
            exercitation. Est quis tempor in duis non adipisicing amet in do est
            aliqua. Lorem adipisicing sit deserunt proident cupidatat et
            incididunt velit. Dolore adipisicing proident nisi esse ullamco id
            est id irure fugiat. Veniam irure voluptate consequat elit. Id
            eiusmod veniam exercitation culpa ut eiusmod deserunt mollit tempor
            culpa consectetur. Ea veniam fugiat irure consectetur quis aliqua
            cillum mollit adipisicing labore duis laborum amet. Commodo ipsum do
            cillum quis labore excepteur nulla. Exercitation duis tempor nostrud
            tempor aliquip excepteur non do commodo. Cillum Lorem sit ipsum
            irure id elit dolor labore ipsum. Minim culpa ipsum exercitation
            esse amet excepteur dolor cillum nisi excepteur ex nisi. Incididunt
            elit magna excepteur ea voluptate sint laboris proident anim ea
            cillum fugiat. Consectetur aliqua deserunt veniam dolor proident in
            culpa aliqua proident sunt dolore proident laboris adipisicing.
            Velit enim ipsum exercitation aliquip ipsum occaecat. Aute ea
            exercitation dolor officia veniam Lorem velit officia cupidatat
            adipisicing et. Culpa nulla proident ut nulla qui aliquip magna
            irure officia ullamco magna laborum adipisicing. Anim deserunt
            eiusmod irure ex anim cillum laborum ipsum adipisicing anim aliqua
            quis. Sit deserunt cillum et commodo non quis aliquip eu fugiat
            eiusmod ad proident et laborum. Nulla qui irure mollit esse sunt
            elit non labore. Nisi aliquip exercitation proident minim tempor
            voluptate incididunt ipsum nulla labore magna mollit. Incididunt
            magna aute excepteur nostrud reprehenderit aute. Sit consectetur
            exercitation in veniam qui qui deserunt veniam esse proident
            voluptate. Nulla et fugiat sint nulla nostrud proident dolore enim
            ipsum magna duis. Duis mollit culpa ipsum magna nisi fugiat
            incididunt. Laborum pariatur in sit consectetur dolore. Minim qui
            enim ullamco eiusmod consequat commodo qui ipsum commodo minim duis.
            Consequat cupidatat sunt irure officia do incididunt velit cupidatat
            enim irure exercitation. Cupidatat occaecat laborum consectetur
            labore ea enim officia consequat tempor nulla consectetur enim. Sit
            aliquip nulla fugiat magna reprehenderit sunt id labore aute nostrud
            consequat nostrud. Laboris do laborum elit esse officia consectetur
            deserunt tempor ipsum mollit. Nulla laboris incididunt duis sit
            consectetur consequat non veniam officia incididunt. Esse velit elit
            est et nulla Lorem sit reprehenderit eu ullamco anim. Non aliquip
            deserunt nostrud nostrud est occaecat ut nulla occaecat eu elit ex.
            Veniam ut do ipsum nostrud et reprehenderit consectetur aliqua irure
            fugiat eiusmod. Ex exercitation cupidatat consectetur ea cupidatat
            est cillum quis cupidatat esse. Commodo enim cupidatat culpa
            incididunt velit voluptate reprehenderit quis consequat excepteur
            consequat. Reprehenderit amet magna culpa minim. Laboris enim veniam
            quis do laboris. Dolor eu fugiat sunt sit tempor non sunt incididunt
            nostrud aute culpa incididunt nulla. Laboris deserunt ea eiusmod
            occaecat proident Lorem deserunt nisi elit aute. Cillum dolor sunt
            irure Lorem nulla minim commodo proident incididunt nulla deserunt.
            Ea irure adipisicing cillum adipisicing nostrud eiusmod occaecat ad
            culpa non. Aliquip labore ullamco occaecat enim adipisicing sit
            aliqua exercitation ullamco dolore dolor est. Cupidatat laborum
            dolore nisi do dolore proident mollit fugiat ut. Dolor anim commodo
            in deserunt reprehenderit Lorem occaecat incididunt veniam voluptate
            aute. Aliqua mollit aliqua ea adipisicing dolore officia
            exercitation. Est quis tempor in duis non adipisicing amet in do est
            aliqua. Lorem adipisicing sit deserunt proident cupidatat et
            incididunt velit. Dolore adipisicing proident nisi esse ullamco id
            est id irure fugiat. Veniam irure voluptate consequat elit. Id
            eiusmod veniam exercitation culpa ut eiusmod deserunt mollit tempor
            culpa consectetur. Ea veniam fugiat irure consectetur quis aliqua
            cillum mollit adipisicing labore duis laborum amet. Commodo ipsum do
            cillum quis labore excepteur nulla. Exercitation duis tempor nostrud
            tempor aliquip excepteur non do commodo. Cillum Lorem sit ipsum
            irure id elit dolor labore ipsum. Minim culpa ipsum exercitation
            esse amet excepteur dolor cillum nisi excepteur ex nisi. Incididunt
            elit magna excepteur ea voluptate sint laboris proident anim ea
            cillum fugiat. Consectetur aliqua deserunt veniam dolor proident in
            culpa aliqua proident sunt dolore proident laboris adipisicing.
            Velit enim ipsum exercitation aliquip ipsum occaecat. Aute ea
            exercitation dolor officia veniam Lorem velit officia cupidatat
            adipisicing et. Culpa nulla proident ut nulla qui aliquip magna
            irure officia ullamco magna laborum adipisicing. Anim deserunt
            eiusmod irure ex anim cillum laborum ipsum adipisicing anim aliqua
            quis. Sit deserunt cillum et commodo non quis aliquip eu fugiat
            eiusmod ad proident et laborum. Nulla qui irure mollit esse sunt
            elit non labore. Nisi aliquip exercitation proident minim tempor
            voluptate incididunt ipsum nulla labore magna mollit. Incididunt
            magna aute excepteur nostrud reprehenderit aute. Sit consectetur
            exercitation in veniam qui qui deserunt veniam esse proident
            voluptate. Nulla et fugiat sint nulla nostrud proident dolore enim
            ipsum magna duis. Duis mollit culpa ipsum magna nisi fugiat
            incididunt. Laborum pariatur in sit consectetur dolore. Minim qui
            enim ullamco eiusmod consequat commodo qui ipsum commodo minim duis.
            Consequat cupidatat sunt irure officia do incididunt velit cupidatat
            enim irure exercitation. Cupidatat occaecat laborum consectetur
            labore ea enim officia consequat tempor nulla consectetur enim. Sit
            aliquip nulla fugiat magna reprehenderit sunt id labore aute nostrud
            consequat nostrud. Laboris do laborum elit esse officia consectetur
            deserunt tempor ipsum mollit. Nulla laboris incididunt duis sit
            consectetur consequat non veniam officia incididunt. Esse velit elit
            est et nulla Lorem sit reprehenderit eu ullamco anim. Non aliquip
            deserunt nostrud nostrud est occaecat ut nulla occaecat eu elit ex.
            Veniam ut do ipsum nostrud et reprehenderit consectetur aliqua irure
            fugiat eiusmod. Ex exercitation cupidatat consectetur ea cupidatat
            est cillum quis cupidatat esse. Commodo enim cupidatat culpa
            incididunt velit voluptate reprehenderit quis consequat excepteur
            consequat. Reprehenderit amet magna culpa minim. Laboris enim veniam
            quis do laboris.
          </div>
        </div>
        <div className="w-3/12 py-10 px-3 overflow-auto">
          <i className="text-2xl font-bold">Latest Post</i>
          {[...Array(100)].map((a, i) => (
            <div key={i} className="my-2 font-semibold border-b py-1">
              Building a Custom Google Maps Marker React Component Like Airbnb
              in Next.js
            </div>
          ))}
        </div>
      </Layout>
    </>
  );
}
