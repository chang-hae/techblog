import * as React from 'react';
import PostLayout from '../components/layout/PostLayout';
import { useRecoilValue } from 'recoil';
import { postState } from '../store/atom';
import Markdown from '../components/markdown/Markdown';

const content = `

> 이번 글에서는 react-navigation/bottom-tabs 를 사용해서 하단 탭 네비게이션을 구현하는 과정에 대해 알아볼게요.

### 1. 패키지 설치

화면 전환 기능을 사용하려면 관련 패키지를 설치해주어야 하는데요.

[이전 글](http://techblog.changhae.io/4)에서 @react-navigation 관련 패키지를 모두 설치했다는 전제하에 진행할게요.

하단 네비게이션에 아이콘 표시를 위해 관련 패키지도 함께 설치해주세요.

\`\`\`bash
yarn add @react-navigation/bottom-tabs
yarn add react-native-vector-icons
yarn add --dev @types/react-native-vector-icons
\`\`\`

설치 후에 *package.json* 에 패키지가 추가된 것을 확인할 수 있어요.

![package.json](/pages/5/1.jpg)


### 2. 하단 탭 네비게이션 구현


*Screens* 폴더의 *Navigator.tsx* 파일에 아래 코드를 추가해주세요.

[reactnavigation.org](https://reactnavigation.org/docs/bottom-tab-navigator/#example) 의 example 코드를 참고해서 구현했어요.

\`\`\`js
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MoodList from './MoodList';
import Meditation from './Meditation';
import NotificationSet from './NotificationSet';

const BottomTab = createBottomTabNavigator();

const BottomNavigator = () => {
    return (
        <BottomTab.Navigator>
            <BottomTab.Screen
                name="기분 기록"
                component={MoodList}
                options={{
                  tabBarLabel: '기분 기록',
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="table" color={color} size={size} />
                  ),
                }}
            />
            <BottomTab.Screen
                name="소함 명상"
                component={Meditation}
                options={{
                  tabBarLabel: '소함 명상',
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="bowl-mix" color={color} size={size} />
                  ),
                }}
            />
            <BottomTab.Screen
                name="알림 설정"
                component={NotificationSet}
                options={{
                  tabBarLabel: '알림 설정',
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="alarm" color={color} size={size} />
                  ),
                }}
            />
        </BottomTab.Navigator>
    )
}

const Navigator = () => {
    return (
        <NavigationContainer>
            <BottomNavigator />
        </NavigationContainer>
    );
}

export default Navigator;
\`\`\`

**\`react-native-vector-icons\`** 를 프로젝트에 세팅하는 방법은 [여기](http://techblog.changhae.io/6)를 확인해주세요.

### 3. 앱 화면 전환 테스트

프로젝트 폴더 경로에서 ***react-native run-android*** 명령문으로 앱을 실행해볼께요.

![navaigator.tsx](/pages/5/2.gif)

하단 네비게이션 탭 버튼을 누름에 따라 화면이 잘 이동되는 것을 확인할 수 있어요. 😆
`;

const Page5 = () => {
    const postCards = useRecoilValue(postState);
    const post = postCards.filter(postCard => postCard.no === 5).pop();

    return (
        <PostLayout
            title={post.title}
            datetime={post.datetime}
            content={<Markdown content={content} />}
        />
    )
}

export default Page5;
