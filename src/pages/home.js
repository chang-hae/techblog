import * as React from 'react';
import { useRecoilValue } from 'recoil';
import PostCardLayout from '../components/card/PostCardLayout';
import { StyledLink } from '../components/card/PostCardLayoutItem';
import HomeLayout from '../components/layout//HomeLayout';
import { postState } from '../store/atom';

const Content = ({ postCards }) => {
    return (
        <>
            {postCards.map(({ no, datetime, division, title }) => (
                <StyledLink to={`/${no}`} key={no}>
                    <PostCardLayout datetime={datetime} division={division} title={title} />
                </StyledLink>
            ))}
        </>
    );
}

const Home = () => {
    const postCards = useRecoilValue(postState);
    return (
        <HomeLayout
            title="창해 기술블로그 - 우당탕탕 1인창업 도전기"
            content={<Content postCards={postCards} />}
        />
    )
}

export default Home;