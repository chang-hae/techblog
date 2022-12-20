import * as React from 'react';
import PostLayout from '../components/layout/PostLayout';
import { useRecoilValue } from 'recoil';
import { postState } from '../store/atom';
import Markdown from '../components/markdown/Markdown';

const content = `

> 이번 글에서는 AWS SES(Simple Email Service) 를 사용하기 위해 전용 도메인을 구매하는 방법에 대해 알아볼게요.

### 1. AWS Route53

AWS Route53 에는 도메인 관리 기능이 있는데요.

여기서 도메인을 구입해볼께요.

![aws route53](/pages/12/1.jpg)

아래 도메인 등록란에 원하는 도메인을 입력한 후 확인을 누르면 해당 도메인을 사용할 수 있는지 알 수 있어요.

![domain search](/pages/12/2.jpg)

테스트로 **\`soham\`** 을 입력하고 확인을 눌러볼께요.

![soham.com domain](/pages/12/3.jpg)

이런... 사용중이네요. 이번엔 soham.band 로 조회해볼게요.

![soham.band domain](/pages/12/4.jpg)

Wow! 사용가능하네요! 😎 이런식으로 사용가능한 도메인을 적절히 찾아주시면 되요.

장바구니에 추가를 하고 **계속** 버튼을 누르면 도메인에 대한 연락처 세부정보를 입력하는 화면이 나와요.

![soham.band domain input detail](/pages/12/5.jpg)

각 항목에 영문으로 적절히 입력해주시면 되요.

그 다음 **계속** 버튼을 누르면 마지막 확인 및 구매 단계에 이르게 되는데요.

![soham.band domain purchase](/pages/12/6.jpg)

입력하신 내용이 맞는지 확인한 뒤, 동의 체크박스에 체크를 하고 주문 완료를 해주시면 도메인 구입이 정상적으로 끝나게 되요.

저는 아래와 같이 도메인을 구입했답니다.

![soham.care domain](/pages/12/7.jpg)

**주의**

아래와 같이 등록된 도메인에서 구입한 도메인의 등록 연락처가 **\`확인 완료\`** 되었는지 꼭 확인해주세요.

***확인 완료*** 되지 않으면 구글 워크스페이스 연동이 안되기 때문에 반드시 확인이 필요해요.

![domain caution](/pages/12/8.jpg)

다음 글에서는 생성한 도메인을 이용해서 구글 워크스페이스를 구성하는 방법에 대해 알아볼게요. 😁
`;

const Page12 = () => {
    const postCards = useRecoilValue(postState);
    const post = postCards.filter(postCard => postCard.no === 12).pop();

    return (
        <PostLayout
            title={post.title}
            datetime={post.datetime}
            content={<Markdown content={content} />}
        />
    )
}

export default Page12;
