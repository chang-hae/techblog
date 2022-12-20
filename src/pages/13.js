import * as React from 'react';
import PostLayout from '../components/layout/PostLayout';
import { useRecoilValue } from 'recoil';
import { postState } from '../store/atom';
import Markdown from '../components/markdown/Markdown';

const content = `

> 이번 글에서는 AWS Route53 과 구글 워크스페이스 Gmail을 연동하는 방법에 대해 알아볼게요.

### 1. 구글 워크스페이스 생성

[구글 워크스페이스](https://workspace.google.com "Google Workspace") 에 접속하셔서 **무료 평가판 시작** 을 눌러주세요.

![google workspace free trial](/pages/13/1.jpg)

그리고 **업체 이름**, **직원 수** 를 입력하고 **다음** 버튼을 눌러주세요.

![google workspace form](/pages/13/2.jpg)

다음으로 **성**, **이름**, **현재 이메일 주소** 를 입력하고 **다음** 버튼을 눌러주세요.

![google workspace form](/pages/13/3.jpg)

AWS Route53 에서 구입한 도메인이 있기 때문에 **예, 사용할 도메인이 있습니다.** 버튼을 눌러주세요.

![google workspace form](/pages/13/4.jpg)

저는 구입한 **\`soham.care\`** 도메인을 사용해 볼께요.

![google workspace form](/pages/13/5.jpg)

다음으로 새 도메인은 구입하지 않고 **\`soham.care\`** 도메인을 사용할 것이기 때문에 **다음** 버튼을 눌러주세요.

![google workspace form](/pages/13/6.jpg)

다음에 나오는 두 페이지는 기호에 맞게 **확인**, **아니오** 버튼을 눌러주세요.

그리고 이제 해당 도메인에서 사용할 계정 정보를 입력해주세요.

![google workspace form](/pages/13/7.jpg)

짝짝짝 😎!! 구글 워크스페이스 계정이 생성되었어요.

![google workspace form](/pages/13/8.jpg)

**설정으로 이동** 버튼을 눌러 이제 AWS Route53 도메인과 구글 워크스페이스를 연동해볼게요.

### 2. AWS Route53 도메인 연결

이제 생성한 **\`noreply@soham.care\`** 계정으로 로그인 해주세요.

**새 계정 시작** 화면에서 **동의** 버튼을 누르면 구글 워크스페이스 설정화면으로 이동하게 되요.

![google workspace form](/pages/13/9.jpg)

지금 설정해주는 이 부분은 *AWS SES* 를 통해 발송된 이메일을 수신자가 답장을 하였을 때 해당 이메일이 구글 워크스페이스 *Gmail* 에 쌓이도록 연동하는 작업이예요.

그러면 **활성화** 버튼을 눌러볼게요.

![google workspace form](/pages/13/10.jpg)

안내에 따라 AWS Route53에서 도메인 레코드 관리 페이지를 열고 **다음: 2단계로 이동** 버튼을 눌러주세요.

![google workspace form](/pages/13/11.jpg)

아래 내용대로 MX 레코드를 생성해볼게요.

![google workspace form](/pages/13/12.jpg)

**우선순위** 와 **메일서버 호스트** 사이에 공백을 하나 넣고 **메일서버 호스트** 끝에는 **.** 을 넣어주세요.

![google workspace form](/pages/13/13.jpg)

그러면 아래와 같이 레코드가 생성되실 거예요.

![google workspace form](/pages/13/14.jpg)

이제 거의 다왔어요.

다음으로는 다른 사용자가 **\`soham.care\`** 도메인으로 구글 워크스페이스에 가입하지 못하도록 막기 위한 작업이 필요한데요.

![google workspace form](/pages/13/15.jpg)

설명에 따라 MX 레코드에 인증코드를 추가해주세요.

MX 레코드는 앞에서 살펴봤으니 인증코드 추가부분은 생략할께요.

이제 **GMAIL 활성화** 버튼을 눌러주세요.

![google workspace form](/pages/13/16.jpg)

약 *3 ~ 5* 분간 도메인 확인작업을 기다리면 아래와 같이 *Gmail* 연동이 성공하는 것을 확인할 수 있어요.

![google workspace gmail success](/pages/13/17.jpg)
`;

const Page13 = () => {
    const postCards = useRecoilValue(postState);
    const post = postCards.filter(postCard => postCard.no === 13).pop();

    return (
        <PostLayout
            title={post.title}
            datetime={post.datetime}
            content={<Markdown content={content} />}
        />
    )
}

export default Page13;
