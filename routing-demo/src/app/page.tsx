import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <h1>Home Page</h1>
      <Link href="/about">About Page</Link>
      <Link href="/products">Product Page</Link>
    </>
  );
};

export default page;
