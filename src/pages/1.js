import * as React from 'react';
import PostLayout from '../components/layout/PostLayout';
import { useRecoilValue } from 'recoil';
import { postState } from '../store/atom';
import Markdown from '../components/markdown/Markdown';

const content = `
### 1. React 에서 Context 가 뭡니까용?

![react component tree](/pages/1/1.jpg)

리액트는 위의 예시처럼 컴포넌트 트리 구조로 동작하는데요.

상위 컴포넌트에서 하위 컴포넌트를 호출하는 *Top-Down* 방식이예요.

이때 상위 컴포넌트에서 하위 컴포넌트에 넘겨주는 데이터를 **\`Props\`** 라고 해요.

그런데 만약에 *App.js* 에서 *Gen2* 컴포넌트로 Props 를 내려주고 싶다면 중간 컴포넌트에서 이를 계속 전달해줘야하는 불편함이 있어요.

이러한 불편을 해결해줄 수 있는 기능이 바로 **\`Context\`** 예요.

**\`ContextProvider\`** 로 *App.js* 에서 호출하는 하위 컴포넌트를 감싸주면 하부 컴포넌트 트리 전체에서 *Context* 가 제공하는 데이터를 편리하게 가져다 쓸 수 있어요.



### 2. material-ui 에서 제공되는 ThemeProvider

*[material-ui](https://mui.com/core/ "material ui link")* 를 써보면 내장 구현된 **\`ThemeProvider\`** 가 제공되는데요.

이 부분에 착안해서 **\`createContext\`** 를 활용한 *ThemeProvider* 를 한 번 만들어 볼께요.

![smile image](/pages/1/2.jpg "option")

롸쓰고우!

### 3. Theme.js 만들기

\`\`\`js
import * as React from 'react';
import { createContext } from 'react';

const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
    return (
        <ThemeContext.Provider
            value={{
                primary: "royalblue"
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}

export { ThemeContextProvider, ThemeContext };
\`\`\`

먼저 *Theme.js* 파일을 만들고 위와 같이 코드를 작성해주세요.

코드를 보면 *createContext* 를 이용해서 ThemeContext 를 생성해주는데요.

이 객체가 바로 하부 트리 컴포넌트에서 가져다 쓸 컨텍스트예요.

일종의 저장소라 생각하시면 되고 여기 저장소에 *primary* 프로퍼티와 그 값이 저장되어 있는거죠.

자, 이렇게 해서 컨텍스트 프로바이더 생성은 끝났어요.

이제 컴포넌트에서 사용할 수 있도록 적용해볼께요.

### 4. ThemeProvider 적용하기

### 5. Theme Context 값 사용하기
`;

const Page1 = () => {
    const postCards = useRecoilValue(postState);
    const post = postCards.filter(postCard => postCard.no === 1).pop();

    return (
        <PostLayout
            title={post.title}
            datetime={post.datetime}
            content={<Markdown content={content} />}
        />
    )
}

export default Page1;