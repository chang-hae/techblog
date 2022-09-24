import * as React from 'react';
import PostCardLayout from '../components/card/PostCardLayout';
import { StyledLink } from '../components/card/PostCardLayoutItem';
import HomeLayout from '../components/layout//HomeLayout';

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
    const postCards = [
        {
            no: 1,
            title: "아무거나 막 써보는 창해 기술블로그 글 1",
            division: "React",
            datetime: "2022. 09. 25",
        },
        {
            no: 2,
            title: "아무거나 막 써보는 창해 기술블로그 글 2",
            division: "React",
            datetime: "2022. 09. 25",
        },
        {
            no: 3,
            title: "아무거나 막 써보는 창해 기술블로그 글 3",
            division: "React",
            datetime: "2022. 09. 25",
        },
        {
            no: 4,
            title: "아무거나 막 써보는 창해 기술블로그 글 4",
            division: "React",
            datetime: "2022. 09. 25",
        },
        {
            no: 5,
            title: "아무거나 막 써보는 창해 기술블로그 글 5",
            division: "React",
            datetime: "2022. 09. 25",
        },
    ]
    return (
        <HomeLayout
            title="창해 기술블로그 - 우당탕탕 1인창업 도전기"
            content={<Content postCards={postCards} />}
        />
    )
}

export default Home;