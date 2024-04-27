import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { revalidatePath } from "next/cache";
import { Button } from "./ui/button";
import { Trash } from "lucide-react";
import Link from "next/link";
import { auth } from "../../auth";
import prisma from "@/lib";

const JobResult = async ({ query }: { query: string }) => {
  const session = await auth();
  const data = await prisma.job.findMany();
  const filterData = Array.isArray(data)
    ? data.filter((searchData) => {
        return searchData.jobName?.toLowerCase().includes(query?.toLowerCase());
      })
    : [];
  return (
    <div>
      {Array.isArray(data) && data.length === 0 && <div>No results found</div>}
      <div className="w-full mb-12 space-y-3 grow">
        {Array.isArray(data) &&
          filterData.map((data) => (
            <Card
              className="hover:shadow-md border border-purple-400"
              key={data.id}
            >
              <CardHeader className="flex flex-row justify-between">
                <div>
                  <CardTitle>{data.jobName}</CardTitle>
                  <CardDescription>{data.Company}</CardDescription>
                </div>
                {session?.user.role === "employer" && (
                  <form
                    action={async () => {
                      "use server";
                      await prisma.job.delete({
                        where: {
                          id: data.id,
                        },
                      });
                      revalidatePath("/search-jobs");
                    }}
                  >
                    <Button type="submit">
                      <Trash />
                    </Button>
                  </form>
                )}
              </CardHeader>
              <CardContent className="space-y-1">
                <p className="text-sm text-muted-foreground">Stipend/Salary:</p>
                <p>{data.Stipend}JPY</p>
                <p className="text-sm text-muted-foreground">
                  Location:/Salary:
                </p>
                <p>{data.Location}</p>
              </CardContent>
              <CardFooter className="flex justify-between flex-row">
                <Link href={`/job-details/${data.id}`}>
                  <Button className="hover:bg-purple-400">View Details</Button>
                </Link>
                <p className="text-muted-foreground text-sm">
                  {data?.createdAt?.toDateString()}
                </p>
              </CardFooter>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default JobResult;
