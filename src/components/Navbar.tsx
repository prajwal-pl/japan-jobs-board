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

type Props = {};

const Navbar = async (props: Props) => {
  const session = await auth();
  return (
    <div>
      <div className="dark:bg-gray-950 bg-muted-foreground/10 border-b border-black dark:border-white w-full items-center mx-auto p-2 flex justify-between">
        <div>
          <Link href="/" className="text-3xl font-bold">
            Sakura
          </Link>
        </div>
        <div className="flex gap-1">
          {!session?.user ? (
            <form
              action={async () => {
                "use server";
                await signIn("google");
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
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    {
                      <form
                        action={async () => {
                          "use server";
                          await signOut();
                        }}
                      >
                        <Button variant="secondary" type="submit">
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
