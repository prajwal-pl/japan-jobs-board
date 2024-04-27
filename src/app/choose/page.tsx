import { Button } from "@/components/ui/button";
import prisma from "@/lib";
import React from "react";
import { redirect } from "next/navigation";
import { auth } from "../../../auth";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

type Props = {};

const ChooseRole = async (props: Props) => {
  const session = await auth();

  if (!session?.user) {
    redirect("/auth");
  }

  const handleEmployerRole = async () => {
    "use server";
    await prisma.user.update({
      where: {
        id: session.user.id,
      },
      data: {
        role: "employer",
      },
    });
    redirect("/add-jobs");
  };
  const handleCandidateRole = async () => {
    "use server";
    await prisma.user.update({
      where: {
        id: session.user.id,
      },
      data: {
        role: "candidate",
      },
    });
    redirect("/add-jobs");
  };

  if (session.user.role) {
    return (
      <div className="w-full h-screen flex justify-center flex-col gap-3 items-center">
        <h1 className="text-4xl font-bold">You're a {session.user.role}</h1>
        <Link href="/search-jobs">
          <Button>View jobs</Button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="w-full items-center h-screen flex flex-col gap-2 justify-center">
        <h1 className="text-3xl mb-0 font-semibold md:mt-20 text-center">
          Choose your Role
        </h1>
        <div className="flex flex-col md:flex-row items-center md:gap-4 justify-center">
          <div>
            <h1 className="md:hidden mt-52 text-center text-3xl font-semibold">
              Choose your role
            </h1>
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 group/card  dark:hover:shadow-2xl dark:hover:shadow-purple-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                <CardItem
                  translateZ="50"
                  className="text-xl w-full text-center font-bold text-neutral-600 dark:text-white"
                >
                  Employer
                </CardItem>
                <CardItem
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm text-center mt-2 dark:text-neutral-300"
                >
                  An employer is an individual, organization, or business that
                  hires and pays individuals to work for them in exchange for
                  their skills, labor, and services. Employers provide jobs,
                  training, and compensation to employees, and in return,
                  employees contribute their time, effort, and expertise to help
                  the employer achieve their business goals.
                </CardItem>
                <div className="flex justify-between items-center mt-10">
                  <CardItem
                    translateZ={20}
                    target="__blank"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                  >
                    <Link className="text-xl" href="/">
                      Home
                    </Link>
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    <form action={handleEmployerRole}>
                      {/* <p className="text-xs">I'm looking for candidates</p> */}
                      <Button className="p-0" type="submit">
                        Choose
                      </Button>
                    </form>
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </div>
          <div>
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-purple-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                <CardItem
                  translateZ="50"
                  className="text-xl w-full text-center font-bold text-neutral-600 dark:text-white"
                >
                  Candidate
                </CardItem>
                <CardItem
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm text-center mt-2 dark:text-neutral-300"
                >
                  A candidate is an individual who is seeking employment or a
                  job opportunity within a company or organization. Candidates
                  typically submit their resumes or applications for specific
                  job positions that match their skills, qualifications, and
                  career goals.
                </CardItem>
                <div className="flex justify-between items-center mt-10">
                  <CardItem
                    translateZ={20}
                    target="__blank"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                  >
                    <Link className="text-xl" href="/">
                      Home
                    </Link>
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    <form action={handleCandidateRole}>
                      <Button className="p-0" type="submit">
                        Choose
                      </Button>
                    </form>
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseRole;
