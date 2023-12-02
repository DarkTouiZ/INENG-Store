import styled from 'styled-components';

const CenterStyles = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
`;

export default function Center({ children }) {
    return (
        <CenterStyles>
            {children}
        </CenterStyles>
    );
}