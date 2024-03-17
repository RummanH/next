import React from "react";

const page = ({ params }: { params: { productId: string; reviewId: string } }) => {
  return (
    <h1>
      Product {params.productId}, Review {params.reviewId}
    </h1>
  );
};

export default page;
