import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 900px;
    margin: 0 auto;
    min-height: 50vh;
`;

export const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Header = styled.div`
    padding: 10px;
`;

export const Title = styled.div`
    font-size: 2.4rem;
    font-weight: bold;
    padding: 1rem 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const Author = styled.div`
    display: flex;
    align-items: center;
    padding: 0.8rem 0;
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

export const Content = styled.div`
    padding: 15px;
    font-size: 1.3rem;
    line-height: 2.5rem;
`;