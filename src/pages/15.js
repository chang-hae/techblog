import * as React from 'react';
import PostLayout from '../components/layout/PostLayout';
import { useRecoilValue } from 'recoil';
import { postState } from '../store/atom';
import Markdown from '../components/markdown/Markdown';

const content = `

> 이번 글에서는 AWS SES 발송 '역할'과 '사용자' 를 생성하는 방법에 대해 알아볼게요.

### 1. SES 발송 역할 생성

먼저 스프링 부트에서 SES SDK 를 사용하여 발송하기 위해서 **\`역할\`** 을 만들어줄게요.

![aws role create](/pages/15/1.jpg)

**AWS 계정** 를 선택하고 **이 계정** 을 선택해주세요.

![aws role create](/pages/15/2.jpg)

다음으로 **\`SesEmailSendOnlyAccess\`** 권한을 추가해주세요.

![aws role create](/pages/15/3.jpg)

그리고 다음과 같이 **\`ses-assume-role\`** 이름으로 역할을 생성해주세요.

![aws role create](/pages/15/4.jpg)

그러면 아래와 같이 역할이 최종적으로 생성된 것을 확인하실 수 있어요.

![aws role create](/pages/15/5.jpg)

그러면 다음으로 만들어준 SES 발송 역할을 사용할 SES 발송 사용자를 생성해볼게요.

### 2. SES 발송 사용자 생성

사용자 탭으로 가셔서 **\`사용자 추가\`** 를 눌러주세요.

![aws user create](/pages/15/6.jpg)

사용자 이름을 입력하고 다음을 눌러주세요.

저는 **\`ses-assume-user\`** 로 설정했어요.

![aws user create](/pages/15/7.jpg)

다음으로 이 부분이 **중요**한데요. 스프링 부트 애플리케이션에서 AWS SES 발송 기능을 사용하기 위해서는 SDK 를 써야하는데요.

여기에 맞는 방식은 **\`액세스 키 - 프로그래밍 방식 액세스\`** 예요.

체크가 잘 되었는지 확인하신 후에 다음 눌러주세요.

![aws user create](/pages/15/8.jpg)

사용자의 권한을 설정하는 부분이예요. 앞에서 만들어준 ***ses-assume-role*** 을 지금 만들고 있는 사용자가 ***assume*** 할 것이기 떄문에 아무 권한도 부여하지 않아요.

다음 버튼을 눌러주세요.

![aws user create](/pages/15/9.jpg)

태그 추가 부분인데 저는 태그를 추가하지 않을 거라서 바로 다음버튼을 눌렀어요.

![aws user create](/pages/15/10.jpg)

사용자 추가 프로세스의 마지막 **확인** 단계예요.

잘못된 부분이 없다면 **사용자 만들기** 버튼을 눌러주세요.

**\`ses-assume-user\`** 사용자 생성이 성공적으로 완료되었어요. 🎉🎊✨

**액세스 키 ID** 와 **비밀 액세스 키** 는 AWS SES SDK 를 사용할 때 필요하니 꼭 별도의 안전한 곳에 저장해두셔야해요.

![aws user create](/pages/15/11.jpg)

### 3. SES 발송 사용자에 AssumeRole 권한 부여

SES 발송 사용자(ses-assume-user) 는 앞에서 만들어준 SES 발송 역할(ses-assume-role)을 **Assume** 하는 일만 수행하는데요.

이 **Assume** 을 할 수 있도록 AssumeRole 권한을 부여해줄게요.

먼저 사용자 화면에서 **ses-assume-user** 를 클릭해주세요.

![aws user create](/pages/15/12.jpg)

그런 다음 ***인라인 정책 추가*** 를 눌러주세요.

![aws user create](/pages/15/13.jpg)

서비스는 **STS**  
작업은 **쓰기 - AssumeRole**  
리소스는 **모든 리소스**  
로 지정해주고 **정책 검토** 를 눌러주세요.

![aws user create](/pages/15/14.jpg)

이름은 ***allow-assume-role*** 로 지정하고 **정책 생성** 버튼을 눌러주세요.

![aws user create](/pages/15/15.jpg)

그러면 ***allow-assume-role*** 권한이 추가된 것을 확인하실 수 있어요.

![aws user create](/pages/15/16.jpg)

다음 글에서는 스프링 부트 애플리케이션에서 ***AWS SES SDK*** 를 사용하여 이메일을 발송하는 부분에 대해 알아보도록 할게요.
`;

const Page15 = () => {
    const postCards = useRecoilValue(postState);
    const post = postCards.filter(postCard => postCard.no === 15).pop();

    return (
        <PostLayout
            title={post.title}
            datetime={post.datetime}
            content={<Markdown content={content} />}
        />
    )
}

export default Page15;
