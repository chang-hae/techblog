import * as React from 'react';
import PostLayout from '../components/layout/PostLayout';
import { useRecoilValue } from 'recoil';
import { postState } from '../store/atom';
import Markdown from '../components/markdown/Markdown';

const content = `

> 이번 글에서는 react native 앱에서 react-native-vector-icons 로 아이콘을 사용하는 방법에 대해 알아볼께요.

### 1. react-native-vector-icons 패키지 설치

먼저 react-native-vector-icons 를 사용하려면 관련 패키지를 설치해주어야 하는데요.

아래 명령어를 통해 패키지를 설치해주세요.

만약 타입스크립트를 사용한다면 @types 패키지도 설치해주셔야해요.

\`\`\`bash
yarn add react-native-vector-icons
yarn add --dev @types/react-native-vector-icons
\`\`\`

설치가 끝나고 나면 *package.json* 에 패키지가 추가된 것을 확인할 수 있어요.

![package.json](/pages/6/1.jpg)


### 2. Android 아이콘 적용

**\`node_modules/react-native-vector-icons/Fonts\`** 폴더를 보면 ***.ttf*** 파일들이 있는데요.

![package.json](/pages/6/2.jpg)

이 파일들을 **\`android/app/src/main/assets/fonts\`** 폴더에 복사해주세요.

만약 ***assets/fonts*** 폴더가 없으면 만들어주시면 되요.

![package.json](/pages/6/3.jpg)

그리고나서 앱을 실행해보면 아이콘이 제대로 적용된 것을 확인할 수 있어요.

\`\`\`javascript
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
\`\`\`

![package.json](/pages/6/4.jpg)

### 3. IOS 아이콘 적용

만약 ***IOS*** 로 빌드가 처음이시라면 먼저 *ios* 폴더로 이동해서 **\`pod install\`** 명령을 실행해주세요.

그러면 *package.json* 에 명시된 패키지들을 ***ios*** 에서 사용할 수 있게 되요.

그런 다음 **\`Xcode\`** 에서 *ios/[프로젝트명].xcworkspace* 파일을 열어주세요.

![package.json](/pages/6/5.jpg)

그리고 빌드를 해보면 아래와 같은 화면을 만나게 되요.

**\`react-native-vector-icons/MaterialCommunityIcons\`** 를 찾지 못해서 발생하는 에러예요.

![package.json](/pages/6/6.jpg)

*Android* 와 마찬가지로 *IOS* 에서도 *.ttf* 파일을 추가해줘야해요.

이를 위해 *ios* 에 *Fonts* 폴더를 만들어볼께요.

![package.json](/pages/6/7.jpg)
![package.json](/pages/6/8.jpg)

그런 다음 **\`node_modules/react-native-vector-icons/Fonts\`** 에 있는 *.ttf* 파일들을 **\`ios/Fonts\`** 에 복사해주세요.

![package.json](/pages/6/9.jpg)
![package.json](/pages/6/10.jpg)

마지막으로 **\`ios/[프로젝트명]/Info.plist\`** 파일을 열고 아래 내용을 추가해주세요.

\`\`\`xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
\t...
\t<key>UIAppFonts</key>
  \t<array>
\t\t<string>AntDesign.ttf</string>
\t\t<string>Entypo.ttf</string>
\t\t<string>EvilIcons.ttf</string>
\t\t<string>Feather.ttf</string>
\t\t<string>FontAwesome.ttf</string>
\t\t<string>FontAwesome5_Brands.ttf</string>
\t\t<string>FontAwesome5_Regular.ttf</string>
\t\t<string>FontAwesome5_Solid.ttf</string>
\t\t<string>Foundation.ttf</string>
\t\t<string>Ionicons.ttf</string>
\t\t<string>MaterialCommunityIcons.ttf</string>
\t\t<string>MaterialIcons.ttf</string>
\t\t<string>Octicons.ttf</string>
\t\t<string>SimpleLineIcons.ttf</string>
\t\t<string>Zocial.ttf</string>
\t\t<string>Fontisto.ttf</string>
\t</array>
</dict>
</plist>
\`\`\`

수정 후에 다시 앱을 빌드해서 실행해보면 아이콘이 제대로 적용되서 표시되는 것을 확인할 수 있어요 😆

![package.json](/pages/6/11.jpg)
`;

const Page6 = () => {
    const postCards = useRecoilValue(postState);
    const post = postCards.filter(postCard => postCard.no === 6).pop();

    return (
        <PostLayout
            title={post.title}
            datetime={post.datetime}
            content={<Markdown content={content} />}
        />
    )
}

export default Page6;
