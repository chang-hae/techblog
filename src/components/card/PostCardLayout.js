import * as React from 'react';
import { Datetime, FlexContainer, Title, Wrapper } from './PostCardLayoutItem';

const PostCardLayout = (props) => {
    const { title, datetime } = props;
    return (
        <Wrapper>
            <FlexContainer>
                <Datetime>
                    {datetime}
                </Datetime>
                <Title>
                    {title}
                </Title>
            </FlexContainer>
        </Wrapper>
    )
}

export default PostCardLayout;