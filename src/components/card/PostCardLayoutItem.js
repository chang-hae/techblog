import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 1rem 0;
`;

export const FlexContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Datetime = styled.span`
    width: 110px;
    text-align: center;
    font-size: 1.1rem;
    font-weight: bold;
`;

export const Division = styled.span`
    width: 80px;
    text-align: center;
    font-size: 1.1rem;
    font-weight: bold;
`;

export const Title = styled.span`
    font-size: 1.5rem;
    padding-left: 0.5rem;
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

    &:hover {
        color : skyblue;
        background-color: red;
    }
`;