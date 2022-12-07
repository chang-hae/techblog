import * as React from 'react';
import PostLayout from '../components/layout/PostLayout';
import { useRecoilValue } from 'recoil';
import { postState } from '../store/atom';
import Markdown from '../components/markdown/Markdown';

const content = `

> 이번 글에서는 react native 앱에 아이콘을 적용하는 방법에 대해 알아볼게요.

![package.json](/pages/8/1.jpg)
![package.json](/pages/8/2.jpg)

### 1. react-native-make 설치

앱 아이콘을 적용하기 위해서 *[react-native-make](https://github.com/bamlab/react-native-make "react-native-make link")* 를 사용하는데요.

먼저 라이브러리를 설치해주세요.

\`\`\`bash
yarn add -D @bam.tech/react-native-make
\`\`\`

저는 Visual Studio Code 에서 터미널을 열고 설치를 했는데 아래와 같이 에러가 나와서 확인해보니 PS(Power Shell) 을 사용해서 발생한 문제였어요.

![package.json](/pages/8/3.jpg)

그래서 CMD(명령 프롬프트) 창을 열고 해당 프로젝트 폴더로 이동하여 설치를 진행하니 정상적으로 잘 설치가 되네요.

### 2. 앱 아이콘 이미지 준비하기

react-native-make 를 이용해서 앱 아이콘을 생성하려면 *[1024 x 1024 사이즈의 png](https://github.com/bamlab/react-native-make/blob/master/docs/set-icon.md "set-icon link")* 파일이 필요해요.

앱 아이콘이 준비되었다면 프로젝트로 돌아와 ./src/Assets/images/app_icon.png 경로에 아이콘 이미지 파일을 옮겨주세요.

![package.json](/pages/8/4.jpg)

![package.json](/pages/8/5.jpg)

### 3. 앱 아이콘 적용하기

\`\`\`bash
react-native set-icon --path ./src/Assets/Images/app_icon.png --background "#FFFFFF"
\`\`\`

위 명령문을 실행하고 앱을 다시 실행해보면 아래와 같이 아이콘이 바뀐 것을 확인할 수 있어요.

![package.json](/pages/8/6.jpg)
![package.json](/pages/8/7.jpg)

***한 가지 문제점!!***

저는 *@bam.tech/react-native-make* 설치 후 *react-native run-android* 명령문으로 안드로이드 앱을 실행하면 아래와 같이 에러가 나네요.. ㅜㅜ

![package.json](/pages/8/8.jpg)

그래서 아이콘만 적용하고 해당 라이브러리를 삭제한 후 개발을 하고 있어요.

*@bam.tech/react-native-make* 라이브러리를 지우니까 빌드가 다시 정상적으로 되네요. 😅

`;

const Page8 = () => {
    const postCards = useRecoilValue(postState);
    const post = postCards.filter(postCard => postCard.no === 8).pop();

    return (
        <PostLayout
            title={post.title}
            datetime={post.datetime}
            content={<Markdown content={content} />}
        />
    )
}

export default Page8;
