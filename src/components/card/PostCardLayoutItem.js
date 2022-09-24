import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 0.5rem 0;
`;

export const FlexContainer = styled.div`
    display: flex;
    flex-direction: row;

`;

export const Datetime = styled.span`
    font-size: 1.1rem;
    font-weight: bold;
    padding: 1rem;
`;

export const Division = styled.span`
    font-size: 1.1rem;
    font-weight: bold;
    padding: 1rem;
`;

export const Title = styled.span`
    font-size: 1.5rem;
    padding: 1rem;
`;

export const Wall = styled.span`
    font-size: 1.1rem;
    font-weight: bold;
    padding: 1rem;
`

export const StyledLink = styled(Link)`
    color: black;
    text-decoration: none;

    &:hover {
        color : skyblue;
        background-color: red;
    }
`;