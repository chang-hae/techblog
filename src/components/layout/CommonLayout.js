import * as React from 'react';
import { Content, FlexColumnContainer, Header, Wrapper } from './CommonLayoutItem';

const CommonLayout = (props) => {
    const { header, content } = props;
    return (
        <Wrapper>
            <FlexColumnContainer>
                <Header>
                    {header}
                </Header>
                <Content>
                    {content}
                </Content>
            </FlexColumnContainer>
        </Wrapper>
    )
}

export default CommonLayout;