import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import prisma from "@/lib";
import { types } from "@/lib/constants";
import { redirect } from "next/navigation";
import React from "react";
import { auth } from "../../../auth";

type Props = {};

const AddJobs = async (props: Props) => {
  const session = await auth();

  if (!session?.user) {
    redirect("/auth");
  }

  const jobAction = async (formData: FormData) => {
    "use server";
    const data = {
      title: formData.get("title"),
      company: formData.get("company"),
      location: formData.get("location"),
      type: formData.get("type"),
      stipend: formData.get("stipend"),
      description: formData.get("description"),
    };

    const res = await prisma.job.create({
      data: {
        jobName: data.title as string,
        Company: data.company as string,
        Location: data.location as string,
        jobType: data.type as string,
        Stipend: data.stipend as string,
        jobDescription: data.description as string,
      },
    });

    redirect(`/job-details/${res.id}`);
  };

  if (session?.user.role === "candidate") {
    return (
      <div className="h-screen w-full flex text-center justify-center items-center text-4xl font-extrabold">
        You&apos;re not allowed to access this page!
      </div>
    );
  }
  return (
    <main>
      <div className="w-full h-full">
        <h1 className="md:text-4xl text-3xl font-semibold my-12 text-center">
          Add your perfect job with Sakura
        </h1>
        <div className="mx-auto w-[75%]">
          <form className="mb-12 flex flex-col gap-3" action={jobAction}>
            <Label htmlFor="title">Job Title</Label>
            <Input type="text" name="title" placeholder="Job Title" />

            <Label htmlFor="company">Company Name</Label>
            <Input type="text" name="company" placeholder="Organization name" />
            <Label htmlFor="location">Job Location</Label>
            <Input type="text" name="location" placeholder="Location" />
            <Label htmlFor="type">Job Type</Label>
            <select
              name="type"
              className="w-full text-muted-foreground rounded-lg bg-inherit border border-muted-foreground/20 p-2"
            >
              <option className="text-black">job type</option>
              {types.map((type) => (
                <option value={type} className="text-black" key={type}>
                  {type}
                </option>
              ))}
            </select>
            <Label htmlFor="stipend">Stipend/Salary</Label>
            <Input type="text" name="stipend" placeholder="Salary" />
            <Label htmlFor="description">Job Description</Label>
            <textarea
              className="w-full rounded-lg bg-inherit border border-muted-foreground/20 p-4"
              name="description"
              placeholder="Job description"
            />
            <Button type="submit">Submit</Button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default AddJobs;
