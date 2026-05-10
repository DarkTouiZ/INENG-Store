import React from 'react';
import styled from 'styled-components';

const StyledSelect = styled.select`
  padding: 8px 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
`;

export default function ModelSelect({ models, selectedModel, onChange }) {
  const handleModelChange = (e) => {
    const selectedValue = e.target.value;
    onChange(selectedValue);
  };

  return (
    <StyledSelect value={selectedModel} onChange={handleModelChange}>
      {models?.map((model) => (
        <option key={model} value={model}>
          {model}
        </option>
      ))}
    </StyledSelect>
  );
}
