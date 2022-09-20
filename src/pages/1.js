import * as React from 'react';
import styled from "styled-components";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { nord } from "react-syntax-highlighter/dist/esm/styles/prism";

const Wrapper = styled.div`
    width: 100vw;
    max-width: 900px;
    margin: 0 auto;
    min-height: 50vh;
`;

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const Header = styled.div``;

const Title = styled.div`
    font-size: 2.4rem;
    font-weight: bold;
    padding: 1rem 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const Author = styled.div`
    display: flex;
    align-items: center;
    padding: 0.8rem 0;
`;

const Datetime = styled.span`
    font-size: 1.1rem;
    padding: 0.4rem;
`;

const Name = styled.span`
    font-size: 1.1rem;
    padding: 0.4rem;
`;

const Profile = styled.img`
    width: 2.4rem;
    height: 2.4rem;
    padding: 0.4rem;
    border-radius: 100%;
`;

const Content = styled.div`
    font-size: 1.3rem;
    line-height: 2.5rem;
`;

const content = `
아 네이밍이 제일 어렵다 ㅜㅜ
`;

const markdown = `

This is an H1
=============

This is an H2
-------------

# This is a H1
## This is a H2
### This is a H3
#### This is a H4
##### This is a H5
###### This is a H6

**굵게**

*기울이기*

일반 텍스트

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

const code = ({ node, inline, className, children, ...props }) => {
    return inline ? (
        // 강조 (``)
        <code
            style={{
                background: "linear-gradient(to top, #FFE400 15%, transparent 15%)",
                padding: "4px 2px",
            }}
            {...props}
        >
            {children}
        </code>
    ) : (
        // 코드 (```)
        <SyntaxHighlighter
            style={nord}
            language="textile"
            PreTag="div"
            {...props}
        >
            {String(children).replace(/\n$/, "")}
        </SyntaxHighlighter>
    );
};

const blockqute = ({ node, children, ...props }) => {
    return (
        <blockquote
            style={{
                background: "#f0f0f0",
                padding: "0px 15px",
                borderRadius: "10px",
            }}
            {...props}
        >
            {children}
        </blockquote>
    );
}

const img = ({ node, ...props }) => {
    return (
        <img
            style={{ maxWidth: "60vw" }}
            src={props.src.replace("../../../../public/", "/")}
            alt="MarkdownRenderer__Image"
        />
    );
}

const em = ({ node, children, ...props }) => {
    return (
        <span style={{ fontStyle: "italic" }} {...props}>
            {children}
        </span>
    );
};

const Page1 = () => {
    return (
        <Wrapper>
            <FlexContainer>
                <Header>
                    <Title>우당탕탕 리액트로 만들어보는 기술블로그</Title>
                    <Author>
                        <Datetime>2022. 09. 12</Datetime>
                        <Name>ChangHae</Name>
                        <Profile src="https://images.unsplash.com/photo-1662914387418-3b93b1fd53db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                    </Author>
                </Header>
                <Content>
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{ code, blockqute, img, em }}>
                        {content}
                    </ReactMarkdown>
                </Content>
            </FlexContainer>
        </Wrapper>
    )
}

export default Page1;