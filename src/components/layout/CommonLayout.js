import * as React from 'react';
import { Content, FlexContainer, Header, Wrapper } from './CommonLayoutItem';

const CommonLayout = (props) => {
    const { header, content } = props;
    return (
        <Wrapper>
            <FlexContainer>
                <Header>
                    {header}
                </Header>
                <Content>
                    {content}
                </Content>
            </FlexContainer>
        </Wrapper>
    )
}

export default CommonLayout;