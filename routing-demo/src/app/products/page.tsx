import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <h1>Product List Page</h1>
      <h3>
        <Link href="/products/1">Product 1</Link>
      </h3>
      <h3>
        <Link href="/products/2">Product 2</Link>
      </h3>
    </>
  );
};

export default page;
