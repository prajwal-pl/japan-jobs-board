import { Button } from "@/components/ui/button";
import React from "react";
import { auth, signIn } from "../../../auth";
import Link from "next/link";

type Props = {};

const Auth = async (props: Props) => {
  const session = await auth();
  if (session?.user) {
    return (
      <div className="w-full flex-col gap-3 h-screen items-center justify-center flex">
        <h1 className="text-4xl font-semibold text-center ">
          You&apos;re already logged in!
        </h1>
        <Link href="/search-jobs">
          <Button>View Jobs</Button>
        </Link>
      </div>
    );
  }
  return (
    <main>
      <div className="flex flex-col items-center justify-center h-screen w-full">
        <div className="border border-purple-500 flex flex-col rounded-xl bg-muted-foreground/20 p-4">
          <p className="text-center font-medium text-xl">Welcome to sakura</p>
          <form
            action={async () => {
              "use server";
              await signIn("google", { redirectTo: "/search-jobs" });
            }}
          >
            <Button type="submit" className="mx-12 mt-4">
              Sign in
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Auth;
