import styled, { css } from "styled-components"; // Added import for 'css'

const StyledBtn = styled.button`
    background-color: #676767;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    &:hover {
        background-color: #383838;
    }
    ${props => props.size === 'l' && css`
        font-size: 1.5rem;
        padding: 15px 20px;
    `}
`;

export default function Button({ children , ...rest}){
    return (
        <StyledBtn {...rest}>
            {children}
        </StyledBtn>
    )
}