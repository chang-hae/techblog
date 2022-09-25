import * as React from 'react';
import PostLayout from '../components/layout/PostLayout';
import { useRecoilValue } from 'recoil';
import { postState } from '../store/atom';
import Markdown from '../components/markdown/Markdown';

const content = `
[material-ui](https://mui.com/core/ "material ui link") 를 써보면 ThemeProvider 가 제공되는데요.

### 1. Context 가 뭡니까용?

### 2. Theme.js 만들기

\`\`\`
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



### 3. ThemeProvider 적용하기

***

### 4. Theme Context 값 사용하기




\`\`\`
    String a = "aaa";
    String b = "bbb";
    log.info(a + b);
\`\`\`


글자 \`
String a = "aaa";
String b = "bbb";
log.info(a + b);
\`

> This is a first blockqute.
>	> This is a second blockqute.
>	>	> This is a third blockqute.

1. 첫번째
2. 두번째
3. 세번째

1. 첫번째
3. 세번째
2. 두번째

* 빨강
  * 녹색
    * 파랑

+ 빨강
  + 녹색
    + 파랑

- 빨강
  - 녹색
    - 파랑

* * *

***
    
*****
    
- - -
    
---------------------------------------

[link keyword][id]

[id]: URL "Optional Title here"

// code
Link: [Google][googlelink]

[googlelink]: https://google.com "Go google"

사용문법: [Title](link)
적용예: [Google](https://google.com, "google link")

일반적인 URL 혹은 이메일주소인 경우 적절한 형식으로 링크를 형성한다.

* 외부링크: <http://example.com/>
* 이메일링크: <address@example.com>

single asterisks   
*single asterisks*   
_single underscores_   
**double asterisks**   
__double underscores__   
~~cancelline~~   

![Alt text](https://images.unsplash.com/photo-1662914387418-3b93b1fd53db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)
![Alt text](https://images.unsplash.com/photo-1662914387418-3b93b1fd53db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80 "Optional title")

* 줄 바꿈을 하기 위해서는 문장 마지막에서 3칸이상을 띄어쓰기해야 한다.   
이렇게

* 줄 바꿈을 하기 위해서는 문장 마지막에서 3칸이상을 띄어쓰기해야 한다.___\\ 띄어쓰기
이렇게
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