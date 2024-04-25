"use client";

import { ContainerScroll } from "@/components/ui/container-scroll";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const session = useSession();

  if (session.data?.user.role === null) {
    router.push("/choose");
  }

  return (
    <main className="w-full h-full">
      <section className="border-b dark:border-purple-500 border-purple-900">
        <div className="bg-gray-950">
          <ContainerScroll
            titleComponent={
              <>
                <h1 className="text-4xl font-semibold text-white dark:text-white">
                  Optimise your job search with <br />
                  <span className="text-4xl text-purple-500 md:text-[6rem] font-bold mt-1 leading-none">
                    Sakura
                  </span>
                </h1>
              </>
            }
            children
          />
        </div>
      </section>
      <section className="border-b dark:border-purple-500 border-purple-900 my-12 mx-auto items-center">
        <div>
          <h1 className="text-center my-4 text-4xl font-bold">
            What is <span className="text-purple-500">Sakura</span>?
          </h1>
        </div>

        <div className="flex flex-col mb-12 md:flex-row  justify-center items-center">
          <div className="text-xl mt-4 w-1/2">
            Sakura is the japan's largest job board search engine and a job
            posting service for HR needs worldwide.
            <br />
            <br /> It's a free service for recruiters and candidates, which aims
            to help identify the best recruitment media for their recruitment
            strategy or for their job search.
            <br />
            <br /> Keep in mind that Sakura is not a job board ! Sakura is a
            unique tool that provides such a service for job seekers, recruiters
            and job boards around the world.
            <br />
            <br /> Sakura is the product of 15 years of expertise in
            e-recruitment which enables us to provide the best service possible
            to our users.
          </div>
          <div className="p-2 md:ml-12 mt-12">
            <Image
              className="rounded-lg"
              src="/home-pic.jpg"
              alt="Jobs"
              width="500"
              height="500"
            />
          </div>
        </div>
      </section>
      <section></section>
    </main>
  );
}
