import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
    margin: 2rem 1rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    
    &:hover {
        border-color : ${props => props.primary || "skyblue"};
    }
`;

export const FlexContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 1rem;
`;

export const Datetime = styled.span`
    text-align: center;
    font-size: 1.1rem;
    font-weight: bold;
`;

export const Division = styled.span`
    text-align: center;
    font-size: 1.1rem;
    font-weight: bold;
`;

export const Title = styled.span`
    font-size: 1.2rem;
    padding-left: 0.5rem;
    word-break: break-all;
`;

export const Wall = styled.span`
    font-size: 1.1rem;
    font-weight: bold;
    padding-left: 1rem;
    padding-right: 1rem;
`

export const StyledLink = styled(Link)`
    color: black;
    text-decoration: none;
    user-select: none;

    &:hover {
        color : ${props => props.primary || "skyblue"};
    }
`;