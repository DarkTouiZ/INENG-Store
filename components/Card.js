// Card.js
import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import ModelContainer from './ModelContainer';

const StyledCard = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
`;

const ModelSwatches = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`;

const Swatch = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  cursor: pointer;
`;

export default function Card({ imageUrl, models = [], description }) {
  const [selectedModel, setSelectedModel] = useState(models.length > 0 ? models[0] : null);

  const handleModelChange = (model) => {
    setSelectedModel(model);
  };

  return (
    <StyledCard>
      <Image src={imageUrl} width={300} height={300} />
      <ModelSwatches>
        {models.map((model) => (
          <Swatch
            key={model}
            color={model}
            onClick={() => handleModelChange(model)}
            style={{ border: model === selectedModel ? '2px solid #000' : 'none' }}
          />
        ))}
      </ModelSwatches>
      <ModelContainer model={selectedModel || ''} />
      <p>{description}</p>
    </StyledCard>
  );
}
