// Card.js
import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import ModelSelect from "./ModelSelect";
import { product } from "../Content/Product"; // Import your product data
import Link from "next/link";

const StyledCard = styled.div`
  padding: 20px;
`;

const Bg = styled.div`
  background-color: #fff;'
  border: 1px solid #ccc;
  border-radius: 10px;
`;

export default function Card({ productId }) {
  const [selectedModel, setSelectedModel] = useState(
    product[productId]?.model[0]
  ); // Set initial model

  const handleModelChange = (model) => {
    setSelectedModel(model);
  };

  // Get the product data based on productId
  const currentProduct = product.find((p) => p.id === productId);

  // Get the front view image URL based on the selected model
  const frontImageUrl = currentProduct?.images?.frontView.find((img) =>
    img.includes(selectedModel)
  );

  return (
    <Bg>
      <StyledCard>
        <Image src={frontImageUrl} width={300} height={300} />
        <ModelSelect
          models={currentProduct?.model}
          selectedModel={selectedModel}
          onChange={handleModelChange}
        />
        <p>{currentProduct?.description}</p>
      </StyledCard>
      <Link
        style={{
          textDecoration: "none",
          color: "#323232",
          fontSize: "1.2rem",
          justifyContent: "center",
          display: "flex",
        }}
        href={`https://product-details-ed195.web.app/`}
      >
        - More Details -
      </Link>
    </Bg>
  );
}
