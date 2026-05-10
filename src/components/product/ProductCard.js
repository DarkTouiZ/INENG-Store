import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import ModelSelect from "./ModelSelect";
import { products } from "@/data/products";
import Link from "next/link";

const StyledCard = styled.div`
  padding: 20px;
`;

const Bg = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

export default function ProductCard({ productId }) {
  const currentProduct = products.find((p) => p.id === productId);
  const [selectedModel, setSelectedModel] = useState(
    currentProduct?.model[0]
  );

  const handleModelChange = (model) => {
    setSelectedModel(model);
  };

  const frontImageUrl = currentProduct?.images?.frontView.find((img) =>
    img.includes(selectedModel)
  );

  return (
    <Bg>
      <StyledCard>
        {frontImageUrl && (
          <Image src={frontImageUrl} width={300} height={300} alt={currentProduct?.name || "Product"} />
        )}
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
        href={`https://product-details-ca6b0.web.app/`}
      >
        - More Details -
      </Link>
    </Bg>
  );
}
