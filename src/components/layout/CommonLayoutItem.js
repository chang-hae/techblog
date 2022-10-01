import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 900px;
    margin: 0 auto;
    min-height: 50vh;
`;

export const FlexRowContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const FlexColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
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