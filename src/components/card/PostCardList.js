import * as React from 'react';
import PostCardLayout from './PostCardLayout';
import { Wrapper } from './PostCardLayoutItem';

const PostCardList = ({ postCards }) => {
    return (
        <Wrapper>
            {postCards.map(({ no, datetime, division, title }) => (
                <PostCardLayout key={no} no={no} datetime={datetime} division={division} title={title} />
            ))}
        </Wrapper>
    );
}

export default PostCardList;