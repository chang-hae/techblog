import * as React from 'react';
import PostLayout from '../components/layout/PostLayout';
import { useRecoilValue } from 'recoil';
import { postState } from '../store/atom';
import Markdown from '../components/markdown/Markdown';

const content = `

> 이번 글에서는 Github Actions 에서 Spring Boot 프로젝트를 빌드하는 방법에 대해 알아볼게요.

### 1. .yml 파일 생성

Github Actions 를 사용하려면 CI/CD 에 대한 명령문을 기술한 파일이 필요한데요.

이 파일이 바로 .yml 파일이예요. 아무곳에나 파일을 생성하면 안되고 아래 경로에 맞춰서 파일을 만들어줘야해요.

\`\`\`bash
[PROJECT_ROOT]/.github/workflows
\`\`\`

이 workflows 폴더에 .yml 파일을 만들어주면 된답니다. 파일명은 적절히 구분이 될 수 있도록 편하게 작성해주시면 되요.

저는 아래와 같이 파일을 만들었어요.

\`\`\`bash
[PROJECT_ROOT]/.github/workflows/github-actions-soham.yml
\`\`\`

그러면 이제 .yml 파일에 작업 내용을 기술하는 부분에 대해 알아볼께요.

### 2. build job 추가

먼저 코드 전체를 살펴보고 한 부분씩 알아볼께요.

\`\`\`yml
name: API CI with Gradle

on:
  push:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Set up JDK 14
        uses: actions/setup-java@v2
        with:
          java-version: '14'
          distribution: 'adopt'
      - name: Grant execute permission for gradlew
        run: chmod +x gradlew
      - name: Test with Gradle
        run: ./gradlew test
      - name: Build with Gradle
        run: ./gradlew build -x test
      - name: Temporarily save build artifact
        uses: actions/upload-artifact@v2
        with:
          name: build-artifact
          path: build
          retention-days: 1
\`\`\`

큰 그림을 먼저 보자면 **\`name\`**, **\`on\`**, **\`jobs\`** 를 보시면 되는데요.

**\`name\`** 은 뜻 그래도 workflow의 이름을 설정하는 부분이예요.

**\`on\`** 은 workflow 를 언제 실행해야하는지를 기술 하는 부분으로 이벤트를 감지하는 부분이예요.

**\`jobs\`** 는 workflow 에서 구체적으로 실행할 내용에 대해 기술하는 부분이예요.

그러면 **\`on\`** 과 **\`jobs\`** 에 대해 좀 더 알아볼께요.

* on : 이벤트 감지
  * push : 감지할 이벤트 명시
    * branches : 감지할 브랜치 명시
* jobs : 작업 기술
  * build : job 아이디
    * runs-on : job 실행 환경
    * steps : 작업 순서 명시
      * name : 각 step 의 이름을 설정
      * uses : 액션을 사용할 때 명시 (ex, actions/checkout@v2)
      * run : 스크립트를 사용할 때 명시 (ex, ./gradlew build)
      * with : step 실행에 필요한 부가 정보를 기술

actions 는 Github Actions 의 강력한 기능으로 자주 사용하는 작업에 대해 사용하기 편하도록 명령문으로 만들어놓은 것을 말해요.

제가 사용한 actions 는 아래와 같아요.

* actions/checkout@v2 : 코드 pull 받기
* actions/setup-java@v2 : 실행 환경에 java 세팅하기
* actions/upload-artifact@v2 : 동일 workflow 내 이후 job 에서 사용가능하도록 artifact 업로드
* actions/download-artifact@v2 : 동일 workflow 내 이전 job 에서 업로드한 artifact 를 다운로드

문법에 대한 자세한 설명은 [여기](https://docs.github.com/ko/actions/using-workflows/workflow-syntax-for-github-actions "Github Actions Syntax Link") 링크를 참고하시면 좋을 것 같아요.

### 3. Github Actions 실행

그러면 작성한 main 브랜치에 push 하여 .yml 을 실행시켜 볼께요.

![workflow](/pages/10/1.jpg)
![workflow](/pages/10/2.jpg)
![workflow](/pages/10/3.jpg)

workflow 가 정상적으로 실행되어 **\`success\`** 한 것을 확인할 수 있어요. 😁

다음 글에선 Github Actions 로 Docker Hub Repository 에 Docker Image 를 푸시하는 작업에 대해 알아볼께요.
`;

const Page10 = () => {
    const postCards = useRecoilValue(postState);
    const post = postCards.filter(postCard => postCard.no === 10).pop();

    return (
        <PostLayout
            title={post.title}
            datetime={post.datetime}
            content={<Markdown content={content} />}
        />
    )
}

export default Page10;
