import * as React from 'react';
import PostLayout from '../components/layout/PostLayout';
import { useRecoilValue } from 'recoil';
import { postState } from '../store/atom';
import Markdown from '../components/markdown/Markdown';

const content = `

> 이번 글에서는 Github Actions 을 사용해 도커 이미지를 만들고 Docker Hub 에 푸시하는 방법에 대해 알아볼게요.

### 1. workflows.yml 파일 생성

### 2. docker job 추가

### 3. Github Actions 실행

### 4. Docker Hub Repository 확인

`;

const Page11 = () => {
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

export default Page11;
