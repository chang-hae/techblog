import * as React from 'react';
import PostLayout from '../components/layout/PostLayout';
import { useRecoilValue } from 'recoil';
import { postState } from '../store/atom';
import Markdown from '../components/markdown/Markdown';

const content = `

> 이번 글에서는 윈도우에서 react-native 프로젝트를 만들고 앱을 실행해보는 과정에 대해 알아볼게요.

### 1. node.js 설치

*[node.js](https://nodejs.org/ko/ "node js link")* 공식 홈페이지에서 윈도우용 설치 프로그램을 다운받아 설치해주세요.

LTS 안정화된 버전으로 다운받으시는걸 추천드려요.

설치가 완료되고 나면 **\`npm\`** 도 함께 설치된답니다.

아래 명령어로 확인할 수 있어요.

![node version command](/pages/2/1.jpg)


### 2. react-native-cli 설치

**\`react-native-cli\`**  는 *react-native* 프로젝트를 손쉽게 만들어주는 도구인데요.

아래 명령문으로 *react-native-cli* 를 설치해주세요.

\`\`\`bash
npm install -g react-native-cli
\`\`\`

설치가 완료되면 아래 명령어를 통해 *react-native-cli* 버전을 확인하실 수 있어요.

![react native cli version command](/pages/2/2.jpg)

### 3. react-native 프로젝트 생성하기

*[reactnative.dev](https://reactnative.dev/docs/typescript "reactnative dev link")* 에서 프로젝트 생성에 관한 명령문을 확인할 수 있는데요.

저는 프로젝트에서 **\`typescript\`** 를 사용할 것이기 때문에 옵션을 추가할께요.

\`\`\`bash
npx react-native init app --template react-native-template-typescript
\`\`\`

명령문을 입력하면 프로젝트 생성이 진행되고 아래와 같이 파일들이 생성된 것을 확인할 수 있어요.

![react native cli version command](/pages/2/3.jpg)

### 4. android studio 설치

안드로이드 에뮬레이터를 사용하려면 안드로이드 스튜디오를 설치해야되요.

*[android studio](https://developer.android.com/studio?gclid=Cj0KCQjwyt-ZBhCNARIsAKH1176VbkgHi747-1_AnA-aMKGW0LLNGwY87hxnMwWKwB4oq0QbgM98WkYaAq_wEALw_wcB&gclsrc=aw.ds "android studio link")* 공식 홈페이지에서 안드로이드 스튜디오를 다운받고 설치해주세요.

기본 세팅대로 Next 를 눌러서 설치를 완료해주면 되요.

설치 완료 후 에뮬레이터 실행을 위해 환경변수를 세팅해주어야 해요.

먼저 ANDROID_HOME 경로를 세팅해줄께요.

안드로이드 sdk 경로는 아래와 같은데요.

\`\`\`bash
C:\\Users\\{사용자명}\\AppData\\Local\\Android\\Sdk
\`\`\`

![sdk path](/pages/2/4.jpg)

이 경로를 환경변수에 추가해주세요.

![react native cli version command](/pages/2/5.jpg)

![react native cli version command](/pages/2/6.jpg)

![react native cli version command](/pages/2/7.jpg)

이제 다음으로는 안드로이드 디버그 브리지 프로그램 경로를 *Path* 환경 변수에 추가해줍니다.

![react native cli version command](/pages/2/8.jpg)

*adb.exe* 프로그램은 안드로이드 sdk 폴더의 *platform-tools* 폴더 안에 있어요.

![react native cli version command](/pages/2/9.jpg)

![react native cli version command](/pages/2/10.jpg)

이렇게 환경변수를 세팅해준 후에 명령프롬프트 창으로 가서 *adb* 를 입력했을 때 아래와 같이 나오면 잘 세팅된거예요.

![react native cli version command](/pages/2/11.jpg)

이번에는 안드로이드 스튜디오를 실행시키고 에뮬레이터를 추가해보도록 할께요.

먼저 기존에 있는 에뮬레이터는 사용하지 않을거라 저는 삭제를 한 후 추가를 할께요.

*Create device* 버튼을 눌러주세요.

![react native cli version command](/pages/2/12.jpg)

에뮬레이터 목록에서 저는 Galaxy Nexus 를 선택했어요.

![react native cli version command](/pages/2/13.jpg)

*Tiramisu(API Level 33)* 을 선택하고 *Next* 를 눌러주세요.

![react native cli version command](/pages/2/14.jpg)

*Finish* 버튼을 눌러주면 에뮬레이터 생성이 완료되요.

![react native cli version command](/pages/2/15.jpg)

![react native cli version command](/pages/2/16.jpg)

### 5. java 설치하기

안드로이드 앱을 개발하기 위해서는 *java* 가 설치되어 있어야 하는데요.

저는 **\`openjdk\`** 를 설치하려해요.

*[ojdkbuild](https://github.com/ojdkbuild/ojdkbuild "open jdk link")* 에서 윈도우용 설치파일(msi)이 제공되는 것을 알게되어 다운받아 진행해볼께요.

저는 *java 11* 버전을 설치할께요.

![openjdk 11](/pages/2/17.jpg)

성공적으로 설치 되었는지 확인해보려면 **\`java -version\`** 명령어를 입력해보면 확인할 수 있어요.

![openjdk 11](/pages/2/18.jpg)

### 6. react native app 실행하기 

이제 명령 프롬프트에서 프로젝트 폴더로 이동하여 아래 명령어를 통해 앱을 실행해볼께요.

\`\`\`bash
npx react-native run-android
\`\`\`

그러면 빌드가 진행되면서 안드로이드 에뮬레이터가 자동 실행되는 것을 볼 수 있어요.

빌드가 끝나고 에뮬레이터의 앱이 실행되면 리액트 네이티브 앱이 실행되는 것을 볼 수 있어요.

![openjdk 11](/pages/2/19.jpg)

이번 글에서는 윈도우에서 react-native 프로젝트를 만들고 앱을 실행해보는 과정을 알아봤는데요.

다음 글에서는 폴더 구조세팅과 절대경로 설정방법에 대해 알아보도록 할께요.
`;

const Page2 = () => {
    const postCards = useRecoilValue(postState);
    const post = postCards.filter(postCard => postCard.no === 2).pop();

    return (
        <PostLayout
            title={post.title}
            datetime={post.datetime}
            content={<Markdown content={content} />}
        />
    )
}

export default Page2;
