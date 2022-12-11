import * as React from 'react';
import PostLayout from '../components/layout/PostLayout';
import { useRecoilValue } from 'recoil';
import { postState } from '../store/atom';
import Markdown from '../components/markdown/Markdown';

const content = `

> 이번 글에서는 Github Actions 를 사용해 도커 이미지를 만들고 Docker Hub 에 푸시하는 방법에 대해 알아볼게요.

### 1. .yml 파일 작성

Github Actions 는 작업 내용을 .yml 파일에 기술하는데요.

.yml 파일은 아래 경로에 생성해주세요.

\`\`\`bash
[PROJECT_ROOT]/.github/workflows
\`\`\`

저는 아래와 같이 .yml 파일을 만들고 

\`\`\`bash
[PROJECT_ROOT]/.github/workflows/github-actions-soham.yml
\`\`\`

Spring Boot 프로젝트 빌드 작업을 명시해놓은 상태예요.

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

그러면 여기에 이어서 docker 작업을 추가해볼께요.

### 2. docker job 추가

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
  docker:
    name: Deploy Docker Image
    runs-on: ubuntu-latest
    needs: build
    env:
      REPO: \${{ secrets.DOCKER_REPO }}
    steps:
      - run: echo "github run id - \${GITHUB_RUN_ID}"
      - uses: actions/checkout@v2
      - name: Retrieve build artifact
        uses: actions/download-artifact@v2
        with:
          name: build-artifact
          path: build
      - name: Building Docker Image
        run: docker build --tag $REPO:\${GITHUB_RUN_ID} .
      - name: Docker Hub SignIn
        run: docker login -u \${{ secrets.DOCKER_USERNAME }} -p \${{ secrets.DOCKER_PASSWORD }}
      - name: Publish Docker Image
        run: docker push $REPO:\${GITHUB_RUN_ID}
\`\`\`

build 작업은 이전에 설명드려서 건너뛰고 docker 작업에 대해 살펴볼께요.

* jobs
  * docker : job 아이디
    * name : job 이름
    * runs-on : job 실행 환경
    * needs : job 의존성 설정, 해당 job 이 끝나야 job 수행
    * uses : actions 사용 (ex, actions/checkout@v2)
    * run : script 수행 (ex, docker build --tag \${{ secrets.DOCKER_REPO }}:\${GITHUB_RUN_ID} .)

여기서 한 가지 중요한 점은 steps 시작할 떄 **\`- uses: actions/checkout@v2\`** 로 레퍼지토리 코드를 pull 받아야 한다는 것이예요.

이 작업을 해주지 않으면 **\`Dockerfile\`** 을 찾지 못해서 에러가 나더라구요.

그리고 중간에 보이는 **\`\${{ secrets.* }}\`** 는 github 레퍼지토리에 설정해준 secrets 환경변수예요.

![workflow](/pages/11/1.jpg)

이렇게 설정해준 환경변수를 .yml 파일에서 가져다 쓸 수 있답니다. 무척 편하죠. 😄


### 3. Github Actions 실행

그러면 push 를 통해 github actions 를 실행시켜볼께요.

![workflow](/pages/11/2.jpg)
![workflow](/pages/11/3.jpg)
![workflow](/pages/11/4.jpg)
[github run id 3666863208]

정상적으로 workflow 가 실행된 것을 확인할 수 있어요.

### 4. Docker Hub Repository 확인

Docker Hub 에 로그인해서 Repository 를 보게되면 Docker Image 가 Github Run Id 태그로 푸시된 것을 확인할 수 있어요.

![workflow](/pages/11/5.jpg)

다음 시간에는 Github Actions 에서 SSH 로 AWS EC2 인스턴스에 접속하여 배포를 진행하는 부분에 대해 알아볼께요. 😁

`;

const Page11 = () => {
    const postCards = useRecoilValue(postState);
    const post = postCards.filter(postCard => postCard.no === 11).pop();

    return (
        <PostLayout
            title={post.title}
            datetime={post.datetime}
            content={<Markdown content={content} />}
        />
    )
}

export default Page11;
