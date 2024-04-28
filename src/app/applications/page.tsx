import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import prisma from "@/lib";
import { CheckCircle2Icon } from "lucide-react";
import { revalidatePath } from "next/cache";
import React from "react";
import { auth } from "../../../auth";
import Link from "next/link";
import { redirect } from "next/navigation";

type Props = {};

const ApplicationPage = async (props: Props) => {
  const session = await auth();

  if (!session?.user) {
    redirect("/auth");
  }
  const applications = await prisma.application.findMany();

  if (session?.user.role === "candidate") {
    return (
      <div className=" h-screen gap-3 items-center w-full flex flex-col text-center justify-center ">
        <h1 className="text-4xl font-bold">
          You&apos;re not allowed to view this content!
        </h1>
        <Link
          className="bg-black text-white dark:bg-white dark:text-black p-3 rounded-lg font-semibold"
          href="/search-jobs"
        >
          View Jobs
        </Link>
      </div>
    );
  }

  return (
    <main>
      <div className="mt-12 h-screen space-y-4 w-full mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center">
          Job Applications
        </h1>
        <div className="w-[85%] space-y-2 mx-auto">
          {applications.length === 0 && (
            <div className="text-3xl text-center font-bold">
              No applications recieved!
            </div>
          )}
          {applications.map((application) => (
            <Card key={application.id}>
              <CardContent className="mt-4 flex items-center gap-2 justify-evenly">
                <p className="truncate">{application.job}</p>
                <p className="truncate">{application.profileInfo}</p>
                <p>{application.createdAt?.toDateString()}</p>
                <div className="flex flex-col gap-1 md:flex-row md:gap-2">
                  {application.isApproved === true ? (
                    <CheckCircle2Icon className="" />
                  ) : (
                    <div className="flex flex-col gap-1 md:flex-row md:gap-2">
                      <form
                        action={async () => {
                          "use server";
                          await prisma.application.update({
                            where: {
                              id: application.id,
                            },
                            data: {
                              isApproved: true,
                            },
                          });
                          revalidatePath("/applications");
                        }}
                      >
                        <button className="bg-green-500 rounded-lg hover:bg-green-400 p-3 w-28">
                          approve
                        </button>
                      </form>
                      <form
                        action={async () => {
                          "use server";
                          await prisma.application.delete({
                            where: {
                              id: application.id,
                            },
                          });
                          revalidatePath("/applications");
                        }}
                      >
                        <button className="bg-red-500 rounded-lg hover:bg-red-400 p-3 w-28">
                          reject
                        </button>
                      </form>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ApplicationPage;
