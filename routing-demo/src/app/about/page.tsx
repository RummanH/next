import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: { absolute: "My absolute title" },
};

const page = () => {
  return <h1>About Page</h1>;
};

export default page;
