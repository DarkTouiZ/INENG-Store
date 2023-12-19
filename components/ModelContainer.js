// ModelContainer.js
import styled from 'styled-components';

const StyledModelContainer = styled.div`
  background-color: ${(props) => props.color || '#000'};
  height: 50px; 
  width: 100%;
`;

export default function ModelContainer({ color }) {
  return <StyledModelContainer color={color} />;
}
