import Searchbar from "@/components/Searchbar";
import JobResult from "@/components/JobResult";
import { Suspense } from "react";
import { redirect, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { auth } from "../../../auth";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const SearchJobs = async ({
  searchParams,
}: {
  searchParams?: { query?: string };
}) => {
  const session = await auth();

  if (!session?.user) {
    redirect("/auth");
  }

  if (!session.user.role) {
    redirect("/choose");
  }
  const query = searchParams?.query || "";

  return (
    <main>
      <div className="w-[80%] space-y-3 mx-auto mt-12">
        <h1 className="text-4xl font-bold text-center my-8">
          Find your <span className="text-purple-500">perfect</span> job
        </h1>
        <div className="flex gap-2 justify-between w-full">
          <div className="w-full">
            <Searchbar />
          </div>
          {session.user.role === "employer" && (
            <div className="flex gap-2 justify-end w-full">
              <Link href="/applications">
                <Button>View Applications</Button>
              </Link>
              <Link href="/add-jobs">
                <Button>Post a job</Button>
              </Link>
            </div>
          )}
        </div>
        <Suspense
          fallback={
            <div className="w-full h-screen flex justify-center items-center text-center">
              Just a second...
            </div>
          }
        >
          <JobResult query={query} />
        </Suspense>
      </div>
    </main>
  );
};

export default SearchJobs;
