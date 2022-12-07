import * as React from 'react';
import PostLayout from '../components/layout/PostLayout';
import { useRecoilValue } from 'recoil';
import { postState } from '../store/atom';
import Markdown from '../components/markdown/Markdown';

const content = `

> 이번 글에서는 react native 앱에 스플래쉬 이미지를 적용하는 방법에 대해 알아볼게요.

### 1. react-native-make 설치

스플래쉬 이미지를 생성하기 위해서 *[react-native-make](https://github.com/bamlab/react-native-make "react-native-make link")* 를 사용하는데요.

먼저 라이브러리를 설치해주세요.

\`\`\`bash
yarn add -D @bam.tech/react-native-make
\`\`\`

### 2. 앱 스플래쉬 이미지 준비하기

react-native-make 를 이용해서 스플래쉬 이미지를 생성하려면 *[3000 x 3000 사이즈의 png](https://github.com/bamlab/react-native-make/blob/master/docs/set-splash.md "set-splash link")* 파일이 필요해요.

앱 아이콘이 준비되었다면 프로젝트로 돌아와 ./src/Assets/images/app_splash.png 경로에 아이콘 이미지 파일을 옮겨주세요.

![package.json](/pages/9/1.jpg)

![package.json](/pages/9/2.jpg)

### 3. 스플래쉬 이미지 앱 적용하기

\`\`\`bash
react-native set-splash --path ./src/Assets/Images/app_splash.png --resize contain --background "#FFFFFF"
\`\`\`

그러면 아래와 같이 android 및 ios 폴더 하위에 스플래쉬 이미지가 추가된 것을 확인할 수 있어요.

![package.json](/pages/9/3.jpg)
![package.json](/pages/9/4.jpg)

### 4. react-native-splash-screen 으로 스플래쉬 이미지 제어하기

스플래쉬 이미지를 추가한 뒤 이를 제어하는 코드를 함께 넣어주어야 정상적으로 스플래쉬 이미지를 보여줄 수 있는데요.

스플래쉬 이미지를 컨트롤하기 위해 *react-native-splash-screen* 라이브러리를 사용하는데요.

먼저 해당 라이브러리를 설치할게요.

\`\`\`bash
yarn add react-native-splash-screen
\`\`\`

라이브러리 설치 완료 후 앱을 빌드하여 실행해보려 하면 아래와 같이 에러가 나면서 실패하게 되는데요. ㅜㅜ

![package.json](/pages/9/5.jpg)

문제의 원인은 *'./android/app/src/main/java/com/app/MainActivity.java'* 에 잘못 추가된 *onCreate* 함수 때문이였어요.

![package.json](/pages/9/6.jpg)

그래서 이를 아래와 같이 코드를 수정해줍니다.

\`\`\`javascript
package com.app;

import android.os.Bundle;
import org.devio.rn.splashscreen.SplashScreen;
import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;

public class MainActivity extends ReactActivity {
  @Override
  protected void onCreate(Bundle savedInstanceState) {
      SplashScreen.show(this);
      super.onCreate(savedInstanceState);
  }
  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "app";
  }

  /**
   * Returns the instance of the {@link ReactActivityDelegate}. There the RootView is created and
   * you can specify the renderer you wish to use - the new renderer (Fabric) or the old renderer
   * (Paper).
   */
  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new MainActivityDelegate(this, getMainComponentName());
  }

  public static class MainActivityDelegate extends ReactActivityDelegate {
    public MainActivityDelegate(ReactActivity activity, String mainComponentName) {   
      super(activity, mainComponentName);
    }

    @Override
    protected ReactRootView createRootView() {
      ReactRootView reactRootView = new ReactRootView(getContext());
      // If you opted-in for the New Architecture, we enable the Fabric Renderer.
      reactRootView.setIsFabric(BuildConfig.IS_NEW_ARCHITECTURE_ENABLED);
      return reactRootView;
    }

    @Override
    protected boolean isConcurrentRootEnabled() {
      // If you opted-in for the New Architecture, we enable Concurrent Root (i.e. React 18).
      // More on this on https://reactjs.org/blog/2022/03/29/react-v18.html
      return BuildConfig.IS_NEW_ARCHITECTURE_ENABLED;
    }
  }
}
\`\`\`

이렇게 수정한 후 리액트 코드로 돌아와 *App.tsx* 에 아래와 같이 스플래쉬 이미지를 숨김처리해주는 코드를 추가해주면 끝이예요.

\`\`\`javascript
import { useEffect } from 'react';
import { StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Navigator from '~/Screens/Navigator';
import { CustomThemeContextProvider } from './Context/Theme';
import { UserContextProvider } from './Context/User';

const App = () => {

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);

  return (
    <UserContextProvider>
      <CustomThemeContextProvider>
        <Navigator />
        <StatusBar barStyle={'light-content'} />
      </CustomThemeContextProvider>
    </UserContextProvider>
  );
};

export default App;
\`\`\`

### 5. 앱 실행 테스트

![package.json](/pages/9/7.gif)

앱을 실행하면 스플래쉬 이미지가 잘 나오는 것을 확인할 수 있어요 😁
`;

const Page9 = () => {
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

export default Page9;
