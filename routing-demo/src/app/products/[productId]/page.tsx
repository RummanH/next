import { notFound } from "next/navigation";
import React from "react";
import { Metadata } from "next";
type Props = { params: { productId: string } };

// export const generateMetadata = ({ params }: Props): Metadata => {
//   return { title: "This is metadata for product" + params.productId };
// };

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const title: string = await new Promise((resolve) => {
    setTimeout(() => {
      resolve("This tile is coming from database" + params.productId);
    }, 1000);
  });
  return { title };
};

const page = ({ params }: Props) => {
  if (parseInt(params.productId) > 100) {
    return notFound();
  }
  return <h1>Details of Product: {params.productId}</h1>;
};

export default page;
