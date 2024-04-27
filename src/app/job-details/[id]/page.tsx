import { Button } from "@/components/ui/button";
import prisma from "@/lib";
import React from "react";
import { auth } from "../../../../auth";
import Link from "next/link";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";

const JobDetails = async ({ params }: { params: { id: string } }) => {
  const session = await auth();
  const data = await prisma.job.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!session?.user) {
    redirect("/auth");
  }

  const jobData = await prisma.job?.findUnique({
    where: {
      id: params.id,
    },
  });

  const applyHandler = async () => {
    "use server";
    await prisma.application.create({
      data: {
        profileInfo: session?.user.name,
        job: jobData?.jobName,
        userId: session?.user.id,
      },
    });
    redirect("/search-jobs");
  };

  return (
    <main>
      <section>
        <div className="my-12 gap-3 items-center flex flex-col w-full">
          <h1 className="text-4xl font-extrabold md:text-5xl">
            {data?.jobName}
          </h1>
          <p className="text-xl text-muted-foreground font-medium">
            {data?.Company}
          </p>
          <p className="w-1/2 my-3">{data?.jobDescription}</p>
          <div className="w-1/2">
            <h2 className="text-xl font-medium ">Stipend:</h2>
            <p className="text-muted-foreground text-lg">{data?.Stipend} Jpy</p>
          </div>
          <div className="w-1/2">
            <h2 className="text-xl font-medium ">Type:</h2>
            <p className="text-lg text-muted-foreground">{data?.jobType}</p>
          </div>
          <div className="w-1/2">
            <h2 className="text-xl font-medium ">Location:</h2>
            <p className="text-lg text-muted-foreground">{data?.Location}</p>
          </div>
          {session?.user.role === "candidate" ? (
            <form action={applyHandler}>
              <button
                type="submit"
                className="bg-black text-white dark:text-black w-full font-semibold rounded-lg hover:bg-slate-300 dark:bg-white p-2"
              >
                Apply now
              </button>
            </form>
          ) : (
            <Link className="flex justify-center w-full" href="/search-jobs">
              <Button className=" w-1/2">Back</Button>
            </Link>
          )}
        </div>
      </section>
    </main>
  );
};

export default JobDetails;
