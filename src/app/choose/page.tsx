import { Button } from "@/components/ui/button";
import prisma from "@/lib";
import React from "react";
import { redirect } from "next/navigation";
import { auth } from "../../../auth";

type Props = {};

const ChooseRole = async (props: Props) => {
  const session = await auth();
  if (!session?.user) {
    return (
      <h1 className="w-full items-center h-screen flex gap-2 text-3xl justify-center">
        Sign In to use this app!
      </h1>
    );
  }

  return (
    <div>
      <div className="w-full items-center h-screen flex flex-col gap-2 justify-center">
        Choose your Role
        <form
          action={async () => {
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
          }}
        >
          {/* <p className="text-xs">I'm looking for candidates</p> */}
          <Button type="submit">Employer</Button>
        </form>
        <form
          action={async () => {
            "use server";
            await prisma.user.update({
              where: {
                id: session.user.id,
              },
              data: {
                role: "candidate",
              },
            });
            redirect("/search-jobs");
          }}
        >
          <Button type="submit">Candidate</Button>
        </form>
      </div>
    </div>
  );
};

export default ChooseRole;
