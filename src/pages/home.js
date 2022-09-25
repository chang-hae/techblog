import * as React from 'react';
import { useRecoilValue } from 'recoil';
import PostCardLayout from '../components/card/PostCardLayout';
import HomeLayout from '../components/layout//HomeLayout';
import { postState } from '../store/atom';

const Content = ({ postCards }) => {
    return (
        <>
            {postCards.map(({ no, datetime, division, title }) => (
                <PostCardLayout key={no} no={no} datetime={datetime} division={division} title={title} />
            ))}
        </>
    );
}

const Home = () => {
    const postCards = useRecoilValue(postState);
    return (
        <HomeLayout
            title="창해 기술블로그"
            content={<Content postCards={postCards} />}
        />
    )
}

export default Home;