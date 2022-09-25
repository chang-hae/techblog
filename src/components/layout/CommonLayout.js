import * as React from 'react';
import { Content, ContentContainer, FlexColumnContainer, Header, Wrapper } from './CommonLayoutItem';

const CommonLayout = (props) => {
    const { header, content } = props;
    return (
        <Wrapper>
            <FlexColumnContainer>
                <Header>
                    {header}
                </Header>
                <ContentContainer>
                    <Content>
                        {content}
                    </Content>
                </ContentContainer>
            </FlexColumnContainer>
        </Wrapper>
    )
}

export default CommonLayout;