import Searchbar from "@/components/Searchbar";
import JobResult from "@/components/JobResult";
import { Suspense } from "react";

const SearchJobs = async ({
  searchParams,
}: {
  searchParams?: { query?: string };
}) => {
  const query = searchParams?.query || "";

  return (
    <main>
      <div className="w-[80%] space-y-3 mx-auto mt-12">
        <Searchbar />
        <Suspense fallback={<div>Loading...</div>}>
          <JobResult query={query} />
        </Suspense>
      </div>
    </main>
  );
};

export default SearchJobs;
