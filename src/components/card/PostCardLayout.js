import * as React from 'react';
import { Datetime, Division, FlexContainer, Title, Wall, Wrapper } from './PostCardLayoutItem';

const PostCardLayout = (props) => {
    const { title, division, datetime } = props;
    return (
        <Wrapper>
            <FlexContainer>
                <Datetime>
                    {datetime}
                </Datetime>
                <Wall>|</Wall>
                <Division>
                    {division}
                </Division>
                <Wall>|</Wall>
                <Title>
                    {title}
                </Title>
            </FlexContainer>
        </Wrapper>
    )
}

export default PostCardLayout;