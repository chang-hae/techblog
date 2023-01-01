import * as React from 'react';
import PostLayout from '../components/layout/PostLayout';
import { useRecoilValue } from 'recoil';
import { postState } from '../store/atom';
import Markdown from '../components/markdown/Markdown';

const content = `

> 이번 글에서는 AWS SES(Simple Email Service) 를 생성하고 사용하는 방법에 대해 알아볼게요.

### 1. 서울 리전 선택

간혹 리전세팅이 버지니아 북부로 되어 있는 경우가 있는데요.

이런 경우에는 아시아 태평양(서울) ap-northeast-2 로 리전을 변경해주세요.

![aws ses region select](/pages/14/1.jpg)

### 2. 이메일 인증

먼저 SES 서비스 메인 페이지에서 **\`자격 증명 생성\`** 을 눌러주세요.

![aws ses email verify](/pages/14/2.jpg)

그리고 **\`이메일 인증\`** 을 선택하시고 앞서 만들었던 전용 도메인의 이메일 주소를 넣어주세요.

저는 *\`noreply@soham.care\`* 를 넣어줄게요.

![aws ses email verify](/pages/14/3.jpg)

그러면 아래와 같이 AWS 로부터 인증 요청 메일을 받게되요.

![aws ses email verify](/pages/14/4.jpg)

이미지에서는 가려져있는 인증 링크를 클릭한 후 다시 AWS SES 화면으로 돌아가면 아래와 같이 인증 완료됐다는 내용을 확인할 수 있어요.

![aws ses email verified](/pages/14/5.jpg)

### 3. 테스트 이메일 발송

이제 인증된 이메일을 사용해 테스트 메일을 발송해볼게요.

테스트 메일을 수신할 이메일도 자격 증명 생성이 필요해요.

그래서 앞에서 했던 것과 같이 이메일을 인증해주세요.

저는 제가 개인적으로 쓰는 네이버 메일을 사용해볼게요.

테스트 수신 이메일까지 인증이 완료되면 아래와 같이 총 2개의 이메일을 목록에서 확인할 수 있어요.

![aws ses send test email](/pages/14/6.jpg)

그러면 이제 **\`noreply@soham.care\`** 이메일을 눌러주세요.

이어서 테스트 이메일 전송 버튼을 눌러주세요.

![aws ses send test email](/pages/14/7.jpg)

그런 다음 아래와 같이 테스트 메일 발송 형식값을 입력해주세요.

![aws ses send test email](/pages/14/8.jpg)

여기서 사용자 지정 수신자에는 방금 자격 증명 생성을 한 자신의 개인 메일 계정을 넣어주시면 되요.

저의 경우는 네이버 메일 계정이 되는거죠.

그러면 아래와 같이 자신의 메일 계정에서 테스트 발송한 메일을 확인해보실 수 있어요.

![aws ses sent email](/pages/14/9.jpg)

그러면 이렇게 해서 AWS SES 에서 사용할 이메일 등록 및 테스트까지 알아봤어요.

다음 글에서는 SES 이메일을 발송을 위해 **역할** 과 **사용자** 를 생성하는 방법에 대해 알아보도록 할께요.😎
`;

const Page14 = () => {
    const postCards = useRecoilValue(postState);
    const post = postCards.filter(postCard => postCard.no === 14).pop();

    return (
        <PostLayout
            title={post.title}
            datetime={post.datetime}
            content={<Markdown content={content} />}
        />
    )
}

export default Page14;
