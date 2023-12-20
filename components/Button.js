import styled, { css } from "styled-components"; // Added import for 'css'

const StyledBtn = styled.button`
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    box-shadow: 0 2px 5px #ccc;
    &:hover {
        background-color: #383838;
        
    }
    ${props => props.block && css `
    display: block;
    width: 100%;
    `}

    ${props => props.white && !props.outline && css`
    background-color: #fff;
    color: #000;
    `}

    ${props => props.white && props.outline && css`
    background-color: transparent;
    color: #fff;
    border: 1px solid #fff; 
    `}

    ${props => props.primary && css`
    background-color: #676767;
    border: 1px solid #676767; 
    color: #fff;
    `}

    ${props => props.size === 'l' && css`
        font-size: 1.2rem;
        padding: 10px 20px;
    `}

    ${props => props.size === 'md' && css`
        font-size: 1rem;
        padding: 10px 20px;
    `}
`;

export default function Button({ children , ...rest}){
    return (
        <StyledBtn {...rest}>
            {children}
        </StyledBtn>
    )
}