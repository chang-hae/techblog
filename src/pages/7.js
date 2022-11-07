import * as React from 'react';
import PostLayout from '../components/layout/PostLayout';
import { useRecoilValue } from 'recoil';
import { postState } from '../store/atom';
import Markdown from '../components/markdown/Markdown';

const content = `

> 이번 글에서는 react native 앱에서 다크모드를 적용하는 방법에 대해 알아볼게요.

### 1. AsyncStorage 패키지 설치

다크모드 설정상태를 저장하기 위해 @react-native-community/async-storage 패키지를 설치해주어야 하는데요.

아래 명령어를 통해 패키지를 설치해주세요.

\`\`\`bash
yarn add @react-native-community/async-storage
\`\`\`

설치가 끝나고 나면 *package.json* 에 패키지가 추가된 것을 확인할 수 있어요.

![package.json](/pages/7/1.jpg)

### 2. CustomThemeContext 만들기

다크모드 사용과 관련한 컬러 테마를 하위 컴포넌트에 제공해주기 위해 전용 **\`Context\`** 를 만들어볼께요.

아래와 같이 **\`Theme\`** 폴더를 만들고 그 안에 ***index.tsx*** 와 ***@types/index.d.tsx*** 파일을 만들어주세요.

![package.json](/pages/7/2.jpg)

그리고 ***index.d.ts*** 에서는 *CustomThemeContext* 에서 사용할 타입을 정의해볼께요.

\`\`\`javascript
interface IThemeContext {
    theme: ITheme,
    isDarkMode: boolean,
    toggleMode: () => void,
}

interface ITheme {
    primary: string;
    symbol: string;
    point: string,
    subPoint: string,
    inversePoint: string,
}
\`\`\`

**\`IThemeContext\`** 는 *CustomThemeContextProvier* 에서 제공해주는 변수를 정의하고, **\`ITheme\`** 는 *theme* 변수에 담길 객체의 타입을 정의해주는 역할을 해요.

\`\`\`javascript
import { Appearance } from 'react-native';
import { getValue } from '~/Common/utils';
import { darkTheme, lightTheme } from '~/Common/theme';
import { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { COLOR_SCHEME, DARK_THEME, LIGHT_THEME } from '~/Common/constant';

const defaultContext: IThemeContext = {
    theme: {
        primary: "",
        symbol: "",
        point: "",
        subPoint: "",
        inversePoint: "",
    },
    isDarkMode: false,
    toggleMode: () => {},
};

const CustomThemeContext = createContext(defaultContext);

interface Props {
    children: React.ReactNode;
}

const CustomThemeContextProvider = ({ children }: Props) => {    
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
    const [theme, setTheme] = useState<ITheme>(lightTheme);
    
    const getThemeColor = async () => {
        const themeColor = getValue(await AsyncStorage.getItem(COLOR_SCHEME), Appearance.getColorScheme());

        if(themeColor === DARK_THEME) {
            setIsDarkMode(true);
            setTheme(darkTheme);
        }
    }

    useEffect(() => {
        getThemeColor();
    }, []);

    const toggleMode = () => {
        if(isDarkMode) {
            AsyncStorage.setItem(COLOR_SCHEME, LIGHT_THEME);
            setIsDarkMode(false);
            setTheme(lightTheme);
        } else {
            AsyncStorage.setItem(COLOR_SCHEME, DARK_THEME);
            setIsDarkMode(true);
            setTheme(darkTheme);
        }
    }

    return (
        <CustomThemeContext.Provider
            value={{
                theme,
                isDarkMode,
                toggleMode
            }}>
            {children}
        </CustomThemeContext.Provider>
    );
};

export { CustomThemeContextProvider, CustomThemeContext };
\`\`\`

앞서 만들어줬던 ***IThemeContext*** 타입을 이용해서 **\`createContext\`** 함수를 통해 *CustomThemeContext* 를 생성해주세요.

그리고 *CustomThemeContextProvier* 컴포넌트에서 *CustomThemeContext* 에서 제공할 변수에 대해 정의해주면 되요.

**\`isDarkMode\`** 와 **\`theme\`** 변수는 *useState* 로 정의하고 **\`toggleMode\`** 는 화살표 함수로 동작을 정의할께요.

***isDarkMode*** 와 ***theme*** 는 항상 같이 붙어 다니는 변수예요.

isDarkMode 가 true 이면 theme 의 값은 darkTheme 가 되고, isDarkMode 가 false 이면 theme 의 값은 lightTheme 가 되요.

darkTheme 와 lightTheme 는 아래 theme 공통 파일에 정의해줄게요.

![package.json](/pages/7/3.jpg)

\`\`\`javascript
import { GRAY_100, GRAY_200, GRAY_400, GRAY_50, GRAY_600, GRAY_900, TIFFANY_BLUE } from "./constant";

export const darkTheme = () => {
    return {
        primary: GRAY_900,
        symbol: TIFFANY_BLUE,
        point: GRAY_50,
        subPoint: GRAY_200,
        inversePoint: GRAY_400,
    };
}

export const lightTheme = () => {
    return {
        primary: GRAY_50,
        symbol: TIFFANY_BLUE,
        point: GRAY_900,
        subPoint: GRAY_600,
        inversePoint: GRAY_400,
    };
}
\`\`\`

그리고 사용자가 세팅한 다크모드 사용유무는 **\`AsyncStorage\`** 에 저장하여 *CustomThemeContextProvier* 초기화시 값을 불러와 앱을 껐다 켜도 다크모드 적용이 유지되도록 구현했어요.

\`\`\`javascript
const getThemeColor = async () => {
    const themeColor = getValue(await AsyncStorage.getItem(COLOR_SCHEME), Appearance.getColorScheme());

    if(themeColor === DARK_THEME) {
        setIsDarkMode(true);
        setTheme(darkTheme);
    }
}

useEffect(() => {
    getThemeColor();
}, []);
\`\`\`

### 3. 하위 컴포넌트에서 CustomThemeContext 사용하기

로그인 화면에서 사용하는 버튼에 *CustomThemeContext* 를 이용해서 다크모드가 적용되도록 구현해볼께요.

\`\`\`javascript
import { useContext } from 'react';
import { ThemeProvider } from 'styled-components/native';
import { CustomThemeContext } from '~/Context/Theme';
import { UserContext } from '~/Context/User';
import Button from '~/Components/Button';
import Container from '~/Components/Container';

const Login = () => {
  const { login } = useContext<IUserContext>(UserContext);
  const { theme } = useContext<IThemeContext>(CustomThemeContext);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Button theme={theme} label={"로그인"} disabled={false} onPress={login} />
      </Container>
    </ThemeProvider>
  );
}

export default Login;
\`\`\`

*Login* 컴포넌트에서 *CustomThemeContext* 를 불러와 *theme* 객체를 꺼내옵니다.

이렇게 꺼낸 *theme* 객체는 **\`Button\`** 컴포넌트에 ***Props*** 로 전달을 해주게 되요.

\`\`\`javascript
import React from 'react';
import Styled from "styled-components/native";
import { ThemeProvider } from 'styled-components/native';

const StyleButton = Styled.TouchableOpacity\`
  width: ${(props: any) => props.width};
  padding: 4px 8px;
  border: 1px solid ${(props: any) => props.theme.point};
  border-radius: 4px;
\`;

const StyleButtonLabel = Styled.Text\`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  color: ${(props: any) => props.theme.point};
\`;

interface Props {
  theme: ITheme;
  width: string;
  label: string;
  disabled?: boolean;
  onPress: () => void;
}

const Button = ({ theme, width, label, disabled, onPress }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <StyleButton width={width} disabled={disabled} onPress={onPress}>
        <StyleButtonLabel>{label}</StyleButtonLabel>
      </StyleButton>
    </ThemeProvider>
  );
};

Button.defaultProps = {
  width: "80%",
}

export default Button;
\`\`\`

***Props*** 로 전달받은 *theme* 객체는 *styled-components/native* 의 **\`ThemeProvider\`** 에 전달해주세요.

그러면 마법처럼 **Styled** 정의부에서 *theme* 객체의 변수를 꺼내어 쓸 수 있게되요. 

\`\`\`javascript
const StyleButton = Styled.TouchableOpacity\`
  width: ${(props: any) => props.width};
  padding: 4px 8px;
  border: 1px solid ${(props: any) => props.theme.point};
  border-radius: 4px;
\`;

const StyleButtonLabel = Styled.Text\`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  color: ${(props: any) => props.theme.point};
\`;
\`\`\`
`;

const Page7 = () => {
    const postCards = useRecoilValue(postState);
    const post = postCards.filter(postCard => postCard.no === 7).pop();

    return (
        <PostLayout
            title={post.title}
            datetime={post.datetime}
            content={<Markdown content={content} />}
        />
    )
}

export default Page7;
