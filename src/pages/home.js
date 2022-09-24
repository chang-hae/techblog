import * as React from 'react';
import PostCardLayout from '../components/card/PostCardLayout';
import HomeLayout from '../components/layout//HomeLayout';

const Content = ({ postCards }) => {
    return (
        <>
            {postCards.map(({ title, datetime, no }) => (<PostCardLayout key={no} title={title} datetime={datetime} />))}
        </>
    );
}

const Home = () => {
    const postCards = [
        {
            no: 1,
            title: "아무거나 막 써보는 창해 기술블로그 글 1",
            datetime: "2022. 09. 25",
        },
        {
            no: 2,
            title: "아무거나 막 써보는 창해 기술블로그 글 2",
            datetime: "2022. 09. 25",
        },
        {
            no: 3,
            title: "아무거나 막 써보는 창해 기술블로그 글 3",
            datetime: "2022. 09. 25",
        },
        {
            no: 4,
            title: "아무거나 막 써보는 창해 기술블로그 글 4",
            datetime: "2022. 09. 25",
        },
        {
            no: 5,
            title: "아무거나 막 써보는 창해 기술블로그 글 5",
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