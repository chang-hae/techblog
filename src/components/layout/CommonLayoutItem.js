import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    max-width: 900px;
    margin: 0 auto;
    min-height: 50vh;
`;

export const NavigationContainer = styled.div`
    width: 100%;
    background: #ffffff;
    padding: 1rem 0;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99999;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    user-select: none;
`;

export const NavigationBar = styled.div`
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const NavigationTitle = styled.div`
    font-size: 1.2rem;
    font-weight: bold;
`;

export const NavigationLinks = styled.div`
`;

export const NavigationIconLink = styled.img`
    width: 2.4rem;
    height: 2.4rem;
`;

export const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 7rem;
`;

export const Header = styled.div`
    padding: 10px 0;
`;

export const Underline = styled.div`
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    user-select: none;
`;

export const Title = styled.div`
    font-size: 2rem;
    font-weight: bold;
    padding: 1rem;
`;

export const Author = styled.div`
    display: flex;
    align-items: center;
    padding: 0.8rem;
    user-select: none;
`;

export const Datetime = styled.span`
    font-size: 1.1rem;
    padding: 0.4rem;
`;

export const Nickname = styled.span`
    font-size: 1.1rem;
    padding: 0.4rem;
`;

export const Profile = styled.img`
    width: 2.4rem;
    height: 2.4rem;
    padding: 0.4rem;
    border-radius: 100%;
`;

export const BigProfile = styled.img`
    width: 3.6rem;
    height: 3.6rem;
    padding: 0.4rem;
    border-radius: 100%;
`;

export const ContentContainer = styled.div`
`;

export const Content = styled.div`
    padding: 10px 15px;
    font-size: 1.3rem;
    line-height: 2.5rem;
`;

export const StyledLink = styled(Link)`
    color: black;
    text-decoration: none;
    user-select: none;

    &:hover {
        color : ${props => props.primary || "royalblue"};
    }
`;