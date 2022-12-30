import * as React from 'react';
import PostLayout from '../components/layout/PostLayout';
import { useRecoilValue } from 'recoil';
import { postState } from '../store/atom';
import Markdown from '../components/markdown/Markdown';

const content = `

> 이번 글에서는 스프링 부트에서 AWS SES SDK 를 이용하여 이메일을 발송하는 방법에 대해 알아볼게요.

### 1. AwsSesComponent 클래스 작성 

\`\`\`java
@Component
public class AwsSesComponent {

    @Value("\${aws.ses.access.key}")
    private String AWS_SES_ACCESS_KEY;

    @Value("\${aws.ses.secret.key}")
    private String AWS_SES_SECRET_KEY;

    private AWSSecurityTokenService awsSecurityTokenService;

    @PostConstruct
    public void init() {
        BasicAWSCredentials basicAWSCredentials = new BasicAWSCredentials(AWS_SES_ACCESS_KEY, AWS_SES_SECRET_KEY);
        awsSecurityTokenService = AWSSecurityTokenServiceClientBuilder.standard()
                .withCredentials(new AWSStaticCredentialsProvider(basicAWSCredentials))
                .withRegion("ap-northeast-2")
                .build();
    }

    public SendEmailResult send(String to, String subject, String content) {
        Destination destination = AwsUtil.Ses.createDestination(to);
        Message message = AwsUtil.Ses.createMessage(subject, content);
        SendEmailRequest sendEmailRequest = AwsUtil.Ses.createSendEmailRequest(destination, message);
        return createSesClient().sendEmail(sendEmailRequest);
    }

    private AmazonSimpleEmailService createSesClient() {
        return AmazonSimpleEmailServiceClientBuilder.standard()
                .withCredentials(new AWSStaticCredentialsProvider(createSessionCredential()))
                .withRegion("ap-northeast-2")
                .build();
    }

    private BasicSessionCredentials createSessionCredential() {
        AssumeRoleResult roleResponse = awsSecurityTokenService.assumeRole(createAssumeRoleRequest());
        Credentials sessionCredentials = roleResponse.getCredentials();
        return createBasicSessionCredentials(sessionCredentials);
    }

    private AssumeRoleRequest createAssumeRoleRequest() {
        return new AssumeRoleRequest()
                .withRoleArn(" --- ARN_AWS_IAM_ROLE --- ")
                .withRoleSessionName(String.valueOf(DateUtil.ZonedDT.now().toEpochSecond()));
    }

    private BasicSessionCredentials createBasicSessionCredentials(Credentials sessionCredentials) {
        return new BasicSessionCredentials(
                sessionCredentials.getAccessKeyId(),
                sessionCredentials.getSecretAccessKey(),
                sessionCredentials.getSessionToken()
        );
    }
\`\`\`

*AWS_SES_ACCESS_KEY* 와 *AWS_SES_SECRET_KEY* 값은 *[이전 글](http://techblog.changhae.io/15 "chang hae tech blog link")* 에서 만들어줬던 AWS IAM 사용자 정보를 넣어주면 되요.

한 부분씩 따로 살펴보면 아래 코드는 AWS IAM 사용자 인증정보를 사용해서 BasicAwsCredentials 객체를 만들고, 임시 자격 증명을 발급받기 위해 사용하게 될 STS(Aws Security Service) 객체를 생성해주는 부분이예요.

\`\`\`java
@PostConstruct
public void init() {
    BasicAWSCredentials basicAWSCredentials = new BasicAWSCredentials(AWS_SES_ACCESS_KEY, AWS_SES_SECRET_KEY);
    awsSecurityTokenService = AWSSecurityTokenServiceClientBuilder.standard()
            .withCredentials(new AWSStaticCredentialsProvider(basicAWSCredentials))
            .withRegion("ap-northeast-2")
            .build();
}
\`\`\`

다음은 이메일 발송처리를 하는 부분이예요.

to 는 이메일을 받는 사람, subject 는 이메일 제목 그리고 content 는 이메일 내용이예요.

\`\`\`java
public SendEmailResult send(String to, String subject, String content) {
    Destination destination = AwsUtil.Ses.createDestination(to);
    Message message = AwsUtil.Ses.createMessage(subject, content);
    SendEmailRequest sendEmailRequest = AwsUtil.Ses.createSendEmailRequest(destination, message);
    return createSesClient().sendEmail(sendEmailRequest);
}
\`\`\`

중간에 사용된 AwsUtil.Ses 의 내용은 아래와 같답니다.

\`\`\`java
public class AwsUtil {

    public static class Ses {
        public static final String SOURCE = "******";
        public static final String SUBJECT_EMAIL_CODE = "******";

        public static SendEmailRequest createSendEmailRequest(Destination destination, Message message) {
            SendEmailRequest sendEmailRequest = new SendEmailRequest();
            sendEmailRequest.setSource(Ses.SOURCE);
            sendEmailRequest.setDestination(destination);
            sendEmailRequest.setMessage(message);
            return sendEmailRequest;
        }

        public static Destination createDestination(String to) {
            Destination destination = new Destination();
            destination.setToAddresses(List.of(to));
            return destination;
        }

        public static Message createMessage(String subject, String content) {
            Message message = new Message();

            Content subjectContent = new Content();
            subjectContent.setCharset("UTF-8");
            subjectContent.setData(subject);
            message.setSubject(subjectContent);

            Content bodyContent = new Content();
            bodyContent.setCharset("UTF-8");
            bodyContent.setData(content);

            Body body = new Body();
            body.setHtml(bodyContent);
            message.setBody(body);

            return message;
        }
    }
}
\`\`\`

다음은 임시자격증명을 발급받아 AmazonSimpleEmailService 객체를 만드는 부분이예요.

\`\`\`java
private AmazonSimpleEmailService createSesClient() {
    return AmazonSimpleEmailServiceClientBuilder.standard()
            .withCredentials(new AWSStaticCredentialsProvider(createSessionCredential()))
            .withRegion("ap-northeast-2")
            .build();
}

private BasicSessionCredentials createSessionCredential() {
    AssumeRoleResult roleResponse = awsSecurityTokenService.assumeRole(createAssumeRoleRequest());
    Credentials sessionCredentials = roleResponse.getCredentials();
    return createBasicSessionCredentials(sessionCredentials);
}

private AssumeRoleRequest createAssumeRoleRequest() {
    return new AssumeRoleRequest()
            .withRoleArn(" --- ARN_AWS_IAM_ROLE --- ")
            .withRoleSessionName(String.valueOf(DateUtil.ZonedDT.now().toEpochSecond()));
}

private BasicSessionCredentials createBasicSessionCredentials(Credentials sessionCredentials) {
    return new BasicSessionCredentials(
            sessionCredentials.getAccessKeyId(),
            sessionCredentials.getSecretAccessKey(),
            sessionCredentials.getSessionToken()
    );
}
\`\`\`

ARN_AWS_IAM_ROLE 값은 AWS 에서 생성한 역할에 부여된 arn 값을 넣어주시면 되요.

### 2. SES 발송 테스트 코드 작성

그러면 이제 만들어준 *AwsSesComponent* 에 대한 테스트 코드를 작성해볼게요.

\`\`\`java
@ExtendWith(SpringExtension.class)
@SpringBootTest( classes = { AwsSesComponent.class })
public class AwsSesTest {

    @Autowired
    AwsSesComponent awsSesComponent;

    @Test
    public void 이메일발송테스트() {
        awsSesComponent.send(
                "******",
                "코드 인증 이메일 발송 테스트",
                "221230");
    }

}
\`\`\`

@SpringBootTest 애노테이션을 사용하면 모든 빈을 다 불러오기 때문에 테스트가 느려지게 되요.

그래서 테스트에 필요한 AwsSesComponent 만 불러오도록 명시해주었어요.

그리고 ****** 으로 블러처리한 부분에는 이메일을 받을 주소를 넣어주시면 되요.

그러면 테스트 발송을 해볼게요.

### 3. 이메일 발송 테스트

메일함에 들어가보니 메일이 정상적으로 수신되었네요.

![aws ses email send test](/pages/16/1.jpg)

메일 내용을 확인해보면 아래와 같이 설정해준 내용대로 잘 발송된 것을 확인해볼 수 있어요.

![aws ses email send test](/pages/16/2.jpg)

여기까지 Google Workspace, Aws SES/STS, Spring Boot 를 사용하여 이메일 발송하는 방법에 대해 알아보았어요.

긴 글 끝까지 읽어주셔서 감사해요. ✨🎉🎊
`;

const Page16 = () => {
    const postCards = useRecoilValue(postState);
    const post = postCards.filter(postCard => postCard.no === 16).pop();

    return (
        <PostLayout
            title={post.title}
            datetime={post.datetime}
            content={<Markdown content={content} />}
        />
    )
}

export default Page16;
