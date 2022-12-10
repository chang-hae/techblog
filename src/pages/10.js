import * as React from 'react';
import PostLayout from '../components/layout/PostLayout';
import { useRecoilValue } from 'recoil';
import { postState } from '../store/atom';
import Markdown from '../components/markdown/Markdown';

const content = `

> 이번 글에서는 Github Actions 에서 Spring Boot 프로젝트를 빌드하는 방법에 대해 알아볼게요.

### 1. workflows.yml 파일 생성

### 2. build job 추가

### 3. Github Actions 실행


`;

const Page10 = () => {
    const postCards = useRecoilValue(postState);
    const post = postCards.filter(postCard => postCard.no === 9).pop();

    return (
        <PostLayout
            title={post.title}
            datetime={post.datetime}
            content={<Markdown content={content} />}
        />
    )
}

export default Page10;
