import * as React from 'react';
import PostLayout from '../components/layout/PostLayout';
import { useRecoilValue } from 'recoil';
import { postState } from '../store/atom';
import Markdown from '../components/markdown/Markdown';

const content = `

> 이번 글에서는 react-navigation 을 사용해서 화면 전환하는 부분에 대해 알아보려해요.

1. 화면 전환 관련 패키지 설치
2. 프로젝트에 네비게이션 적용
3. 앱 화면 전환 테스트

### 1. 화면 전환 관련 패키지 설치

화면 전환 기능을 사용하려면 관련 패키지를 설치해주어야 하는데요

***react navigation*** 공식 홈페이지 *[reactnavigation.org](https://reactnavigation.org/docs/getting-started/ "reactnavigation.org link")* 에 나와있는 가이드를 참고해서 진행할께요.

\`\`\`bash
yarn add @react-navigation/native
yarn add react-native-screens react-native-safe-area-context
yarn add @react-navigation/stack
yarn add react-native-gesture-handler
\`\`\`

**\`react-native-gesture-handler\`** 를 설치해주지 않으면 아래와 같은 에러가 뜨기 때문에 같이 설치를 해주어야되요.

![package.json](/pages/4/1.jpg)

그리고 **\`@react-navigation/stack\`** 이 외에도 **\`@react-navigation/bottom-tabs\`**, **\`@react-navigation/drawer\`** 등 다른 패키지도 있는데요.

제 프로젝트에서는 *@react-navigation/stack* 을 이용한 화면 전환만 필요하기 때문에 다른 패키지는 설치하지 않을 계획이예요.

설치 후에는 *package.json* 에 패키지가 추가된 것을 확인할 수 있답니다. 😁

![package.json](/pages/4/2.jpg)


### 2. 프로젝트에 네비게이션 적용


*Screens* 폴더에 *Navigator.tsx* 파일을 추가해주세요.

![navaigator.tsx](/pages/4/3.jpg)

\`\`\`js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MoodSet from './MoodSet';
import MoodList from './MoodList';

const Stack = createStackNavigator();

const UserScreens = () => {
    return (
        <Stack.Navigator>
          <Stack.Screen
            name="MoodSet"
            component={MoodSet}
          />
          <Stack.Screen
            name="MoodList"
            component={MoodList}
          />
        </Stack.Navigator>
    )
}

const Navigator = () => {
    return (
        <NavigationContainer>
            <UserScreens />
        </NavigationContainer>
    );
}

export default Navigator;
\`\`\`

*Navigation* 기능을 통해 화면을 제어해야하기 때문에 별도의 파일로 *Navigator* 를 만들었어요.

먼저 가장 바깥 컴포넌트로 **\`NavigationContainer\`** 를 넣어주고 그 안에 **\`createStackNavigator\`** 로 생성한 ***Stack.Navigator*** 를 넣어줍니다.

그리고 ***Stack.Screen*** 컴포넌트로 각 화면을 설정해주면 되요.

이어서 *App.tsx* 도 아래와 같이 바꿔 볼께요.

\`\`\`js
import React from 'react';
import { StatusBar } from 'react-native';
import Navigator from '~/Screens/Navigator';

const App = () => {
  return (
    <>
      <Navigator />
      <StatusBar barStyle={'light-content'} />
    </>
  );
};

export default App;
\`\`\`

그리고 *MoodSet* 화면에서 *MoodList* 화면으로 이동할 것이기 때문에 *MoodSet* 에 화면 이동버튼을 추가해주어야 해요.

\`\`\`js
import Styled from 'styled-components/native';
import Button from '~/Components/Button';
import { StackNavigationProp } from '@react-navigation/stack';

const Container = Styled.View\`
    background-color: yellow;
\`

const Title = Styled.Text\`
    font-size: 12px;
\`

type NavigationProp = StackNavigationProp<UserScreensParamList, 'MoodSet'>;

interface Props {
  navigation: NavigationProp;
}

const MoodSet = ({ navigation }: Props) => {
    return (
        <Container>
            <Title>MoodSet Page</Title>
            <Button
                label='완료'
                onPress={() => {
                    navigation.navigate("MoodList");
                }}
            />
        </Container>
    );
}

export default MoodSet;
\`\`\`

*UserScreensParamList* 는 화면을 정의한 타입인데요. 아래와 같이 파일을 추가해주고 코드를 넣어주세요.

![navaigator.tsx](/pages/4/4.jpg)

\`\`\`js
type UserScreensParamList = {
    MoodSet: undefined;
    MoodList: undefined;
}
\`\`\`


### 3. 앱 화면 전환 테스트

프로젝트 폴더 경로에서 ***react-native run-android*** 명령문으로 앱을 실행해볼께요.

![navaigator.tsx](/pages/4/5.gif)

완료 버튼을 눌렀을 때 화면이 잘 이동되는 것을 확인할 수 있어요. 😆
`;

const Page4 = () => {
    const postCards = useRecoilValue(postState);
    const post = postCards.filter(postCard => postCard.no === 4).pop();

    return (
        <PostLayout
            title={post.title}
            datetime={post.datetime}
            content={<Markdown content={content} />}
        />
    )
}

export default Page4;
