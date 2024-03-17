import React from "react";

const page = ({ params }: { params: { slug: string[] } }) => {
  console.log(params);

  if (params.slug?.length) {
    return <h1>There is at least one segment after the main segment.</h1>;
  }
  return <h1>These is no segment after the main segment.</h1>;
};

export default page;
