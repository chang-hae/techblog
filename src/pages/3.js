import * as React from 'react';
import PostLayout from '../components/layout/PostLayout';
import { useRecoilValue } from 'recoil';
import { postState } from '../store/atom';
import Markdown from '../components/markdown/Markdown';

const content = `

> 이번 글에서는 react-native 프로젝트 첫 생성 후 개발을 위한 세팅 과정을 정리해봤어요.

1. 폴더 구조 세팅
2. Styled Component 스타일링 적용
3. 절대경로 사용 설정

### 1. 폴더 구조 세팅

처음 *react-native* 프로젝트를 생성하고 폴더 구조를 보면 아래와 같이 만들어져요.

![folder structure](/pages/3/1.jpg)

여기서 먼저 *src* 폴더를 추가하고 그 아래에 각 용도에 맞게 폴더들을 추가해볼께요.

* src : 소스 파일이 담기는 폴더
  - Assets : *fonts*, *images* 등 리소스 파일이 담기는 폴더
  - Common : *axios*, *jwt*, *file* 등 프로젝트 전역에서 사용하는 기능관련 파일이 담기는 폴더
  - Components : *button*, *view* 등 화면을 구성하는 각 컴포넌트 파일이 담기는 폴더
  - Context : *user*, *error* 등 하위 컴포넌트 트리에서 필요한 기능을 제공하는 컨텍스트 파일이 담기는 폴더
  - Screens : *login*, *home* 등 화면 컴포넌트 파일이 담기는 폴더
  - App.tsx : *index.js* 에서 *import* 하여 사용자에게 루트 컴포넌트

![folder structure](/pages/3/2.jpg)

앞으로 위와 같은 구조로 개발을 진행할 예정이예요.

![folder structure](/pages/3/3.jpg)

### 2. Styled Component 스타일링 적용

**\`yarn\`** 이 설치되어 있지 않다면 아래 명령어로 설치 가능해요.

\`\`\`bash
npm install -g yarn
\`\`\`

그러면 *yarn* 을 이용해서 **\`styled-components\`** 를 설치해볼께요.

*[styled-components.com](https://styled-components.com/docs/api#typescript "styled components link")* 공식 사이트에서 설치방법에 대해 확인할 수 있어요.

저는 **\`typescript\`** 를 사용하기 때문에 *@types* 도 같이 설치할께요.

\`\`\`bash
yarn add styled-components
yarn add -D @types/styled-components
yarn add -D @types/styled-components-react-native
\`\`\`

그리고 나서 *typescript* 설정 파일인 **\`tsconfig.json\`** 에서 아래와 같이 ***types*** 프로퍼티를 추가해주면 되요.


\`\`\`json
{
  "extends": "@tsconfig/react-native/tsconfig.json",
  "compilerOptions": {
    "types": ["jest", "styled-components-react-native"],
    "skipLibCheck": true
  }
}
\`\`\`

***Login*** 스크린, ***MoodSet*** 스크린, ***MoodList*** 스크린를 각각 만들고 *App.tsx* 에서 불러와 화면에 출력시켜볼께요.

\`\`\`js
import Styled from 'styled-components/native';

const Container = Styled.View\`
    background-color: royalblue;
\`

const Title = Styled.Text\`
    font-size: 36px;
\`

const Login = () => {
    return (
        <Container>
            <Title>Login Page</Title>
        </Container>
    );
}

export default Login;
\`\`\`

\`\`\`js
import Styled from 'styled-components/native';

const Container = Styled.View\`
    background-color: yellow;
\`

const Title = Styled.Text\`
    font-size: 12px;
\`

const MoodSet = () => {
    return (
        <Container>
            <Title>MoodSet Page</Title>
        </Container>
    );
}

export default MoodSet;
\`\`\`

\`\`\`js
import Styled from 'styled-components/native';

const Container = Styled.View\`
    background-color: green;
\`

const Title = Styled.Text\`
    font-size: 24px;
\`

const MoodList = () => {
    return (
        <Container>
            <Title>MoodList Page</Title>
        </Container>
    );
}

export default MoodList;
\`\`\`

\`\`\`js
import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, useColorScheme, } from 'react-native';
import Login from './Screens/Login';
import MoodList from './Screens/MoodList';
import MoodSet from './Screens/MoodSet';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Login />
          <MoodSet />
          <MoodList />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
\`\`\`

![styled components screen](/pages/3/4.jpg)

스타일링이 잘 적용된 것을 확인할 수 있어요. 😁

### 3. 절대경로 사용 설정

프로젝트 소스파일은 *src* 폴더에 모여있는데요.

이 *src* 폴더를 *root* 폴더로 사용하려면 어떻게 세팅해야하는지 알아볼께요.

먼저 *babel-plugin-root-import* 를 설치해주세요.

\`\`\`bash
yarn add -D babel-plugin-root-import
\`\`\`

그리고 프로젝트의 *babel.config.js* 파일을 열고 아래와 같이 수정해주세요.

\`\`\`js
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'babel-plugin-styled-components',
    [
      'babel-plugin-root-import',
      {
        rootPathPrefix: '~',
        rootPathSuffix: 'src',
      },
    ],
  ],
};
\`\`\`

코드를 보시면 *rootPathSuffix* 가 *src* 로 설정된 것을 보실 수 있어요.

이제 *src* 가 *root* 폴더로 사용될 거예요.

타입스크립트를 사용한다면 여기서 하나 더 세팅을 해주어야하는데요.

바로 *tsconfig.json* 파일에 아래 내용을 추가해주어야해요.

\`\`\`json
{
  "compilerOptions": {
    ...
    "baseUrl": "./src", // all paths are relative to the baseUrl
    "paths": {
      "~/*": ["*"] // resolve any \`~/foo/bar\` to \`<baseUrl>/foo/bar\`
    }
  },
  ...
}
\`\`\`

여기까지 설정해주시면 세팅은 끝이 나게되요.

그러면 *App.tsx* 파일에서 *Login*, *MoodSet*, *MoodList* 를 *import* 할 때 **~** 를 사용해서 불러와볼께요. 

***~*** 는 *root* 폴더로 프로젝트에서는 ***src*** 폴더를 의미해요.

\`\`\`js
import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, useColorScheme, } from 'react-native';
import Login from '~/Screens/Login';
import MoodList from '~/Screens/MoodList';
import MoodSet from '~/Screens/MoodSet';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Login />
          <MoodSet />
          <MoodList />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
\`\`\`

![styled components screen](/pages/3/5.jpg)

***src*** 절대경로가 제대로 세팅되어 화면이 잘 나오는 것을 확인할 수 있어요.

다음 글에서는 화면전환에 사용되는 네비게이션 기능에 대해 알아보도록 할께요. 😁
`;

const Page3 = () => {
    const postCards = useRecoilValue(postState);
    const post = postCards.filter(postCard => postCard.no === 3).pop();

    return (
        <PostLayout
            title={post.title}
            datetime={post.datetime}
            content={<Markdown content={content} />}
        />
    )
}

export default Page3;
