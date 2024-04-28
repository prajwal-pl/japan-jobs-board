import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ContainerScroll } from "@/components/ui/container-scroll";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
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
          >
            <Image
              src="/scroll-animate.png"
              alt="animation pic"
              width="2500"
              height={2500}
              className="py-32 md:py-14 dark:bg-white rounded-lg object-fill"
            />
          </ContainerScroll>
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
            Sakura is the japan&apos; largest job board search engine and a job
            posting service for HR needs worldwide.
            <br />
            <br /> It&apos;a free service for recruiters and candidates, which
            aims to help identify the best recruitment media for their
            recruitment strategy or for their job search.
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
      <section className="border-b dark:border-purple-500 border-purple-900 my-12 mx-auto items-center">
        <div>
          <h1 className="text-4xl text-center font-semibold">
            <span className="text-purple-500">Dynamic</span> support
          </h1>
        </div>
        <div className="flex flex-col mb-12 gap-2 justify-center items-center">
          <div className="text-xl mt-4 w-2/3">
            Our innovative jobs board application offers a seamless and
            user-friendly experience for both employers and job seekers.
            <br />
            <br /> On the employer side, the platform provides a comprehensive
            dashboard to manage job postings, track applications, and
            communicate with potential candidates. Employers can easily create
            and customize job listings, set specific requirements and
            qualifications, and receive notifications when new applications are
            submitted.
            <br />
            <br /> Meanwhile, job seekers can search for jobs by keyword,
            location, and industry, and apply to positions that match their
            skills and interests. The application also features a personalized
            job matching system, which suggests relevant job openings based on
            individual profiles and preferences.
            <br />
            <br /> With its dynamic support for both employers and job seekers,
            our jobs board application streamlines the hiring process, increases
            efficiency, and fosters meaningful connections between talented
            individuals and top companies.
          </div>
          <Link
            className="w-1/2 flex mt-10 items-center justify-center text-center"
            href="/auth"
          >
            <Button className="w-full">Get started</Button>
          </Link>
        </div>
      </section>
      <section className="border-b dark:border-purple-500 border-purple-900 my-12 mx-auto items-center">
        <div>
          <h1 className="text-3xl text-center font-semibold">
            Find your dream job today
          </h1>
        </div>
        <div className="flex flex-col mb-12  justify-center items-center">
          <p className="text-xl mt-4 w-2/3">
            Sakura has the latest job openings from various top companies all
            over <span className="text-purple-400">Japan</span>. With over
            millions of users, it stands out as the world&apos; most used job
            searching website at Japan.
          </p>
          <Link className="w-1/2 my-8" href="/about">
            <Button className="w-full">View more on Japan</Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
