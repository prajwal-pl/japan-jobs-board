import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { types } from "@/lib/constants";
import React from "react";

type Props = {};

const AddJobs = (props: Props) => {
  return (
    <main>
      <div className="w-full h-full">
        <h1 className="md:text-4xl text-3xl font-semibold my-12 text-center">
          Add your perfect job with Sakura
        </h1>
        <div className="mx-auto w-[75%]">
          <form className="mb-12 flex flex-col gap-3" action="">
            <Label htmlFor="name">Job Title</Label>
            <Input type="text" name="title" placeholder="Job Title" />

            <Label htmlFor="">Company Name</Label>
            <Input type="text" name="company" placeholder="Organization name" />
            <Label htmlFor="">Job Location</Label>
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
