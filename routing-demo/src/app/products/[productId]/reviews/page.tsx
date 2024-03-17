import React from "react";

const page = ({ params }: { params: { productId: string } }) => {
  return (
    <>
      <h1>Reviews for Product {params.productId}</h1>
      <h3>Review 1</h3>
      <h3>Review 2</h3>
      <h3>Review 3</h3>
      <h3>Review 4</h3>
    </>
  );
};

export default page;
