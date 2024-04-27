"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Searchbar = async () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <main>
      <section className="flex w-full gap-2 items-center">
        <div className="w-full">
          <input
            type="search"
            className="p-2 w-full bg-inherit border border-muted-foreground/15 rounded-lg"
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="search job title..."
            name="search"
            defaultValue={searchParams.get("query")?.toString()}
          />
        </div>
      </section>
    </main>
  );
};

export default Searchbar;
