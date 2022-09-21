import * as React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
    max-width: 900px;
    margin: 0 auto;
    min-height: 50vh;
`;

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const Header = styled.div`
    padding: 10px;
`;

const Title = styled.div`
    font-size: 2.4rem;
    font-weight: bold;
    padding: 1rem 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const Content = styled.div`
    padding: 15px;
    font-size: 1.3rem;
    line-height: 2.5rem;
`;

const CommonLayout = (props) => {
    const { title, content } = props;

    return (
        <Wrapper>
            <FlexContainer>
                <Header>
                    <Title>{title}</Title>
                </Header>
                <Content>
                    {content}
                </Content>
            </FlexContainer>
        </Wrapper>
    )
}

export default CommonLayout;