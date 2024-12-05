"use client";

import { trpc } from "./_trpc/client";

const Page = () => {
  const { data, isLoading } = trpc.ping.useQuery();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="p-4 flex h-full w-full justify-center items-center">
      <h1>hello world</h1>
      {isLoading && <p>Loading...</p>}
      {data && <p>{data}</p>}
    </div>
  );
};

export default Page;
