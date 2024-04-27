import React from "react";
import { ModeToggle } from "./mode-toggle";
import { auth, signIn, signOut } from "../../auth";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { permanentRedirect, redirect, RedirectType } from "next/navigation";

type Props = {};

const Navbar = async (props: Props) => {
  const session = await auth();
  return (
    <div>
      <div className="dark:bg-black/40 sticky bg-muted-foreground/10 border-b border-black dark:border-white w-full items-center mx-auto p-2 flex justify-between">
        <div>
          <Link
            href="/"
            className="dark:hover:text-purple-500 hover:text-purple-700 text-3xl font-bold"
          >
            Sakura
          </Link>
        </div>
        <div className="flex gap-1">
          {!session?.user ? (
            <form
              action={async () => {
                "use server";
                await signIn("google");
                if (session?.user.role == null) redirect("/choose");
              }}
            >
              <Button type="submit">Sign In</Button>
            </form>
          ) : (
            <div className="pt-1 self-center">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Image
                    className="rounded-full"
                    src={session.user.image!}
                    alt="profile"
                    width={32}
                    height={32}
                  />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel className="text-center">
                    My Account
                  </DropdownMenuLabel>
                  {session.user.role ? (
                    <DropdownMenuLabel className="text-center">
                      {session.user.role}
                    </DropdownMenuLabel>
                  ) : null}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    {
                      <form
                        action={async () => {
                          "use server";
                          await signOut();
                        }}
                      >
                        <Button
                          className="self-center"
                          variant="secondary"
                          type="submit"
                        >
                          Sign Out
                        </Button>
                      </form>
                    }
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )}
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
