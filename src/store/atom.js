import { atom } from "recoil";
import { divcode } from "../common/code";

export const postState = atom({
    key: "postState",
    default: [
        {
            no: 1,
            title: "createContext 로 ThemeProvider 만들어보기",
            division: divcode.react,
            datetime: "2022. 09. 25",
        },
        {
            no: 2,
            title: "프로젝트 생성 및 앱 실행하기",
            division: divcode.reactNative,
            datetime: "2022. 10. 01",
        },
        {
            no: 3,
            title: "프로젝트 구조 및 스타일링, 절대경로 세팅하기",
            division: divcode.reactNative,
            datetime: "2022. 10. 02",
        },
        {
            no: 4,
            title: "@react-navigation 으로 화면 전환하기",
            division: divcode.reactNative,
            datetime: "2022. 10. 03",
        },
        {
            no: 5,
            title: "@react-navigation/bottom-tabs 사용하기",
            division: divcode.reactNative,
            datetime: "2022. 10. 19",
        },
        {
            no: 6,
            title: "react-native-vector-icons 사용하기",
            division: divcode.reactNative,
            datetime: "2022. 10. 22",
        },
        {
            no: 7,
            title: "다크모드 적용하기",
            division: divcode.reactNative,
            datetime: "2022. 11. 07",
        },
        {
            no: 8,
            title: "앱 아이콘 적용하기",
            division: divcode.reactNative,
            datetime: "2022. 12. 06",
        },
        {
            no: 9,
            title: "앱 스플래쉬 이미지 적용하기",
            division: divcode.reactNative,
            datetime: "2022. 12. 07",
        },
        {
            no: 10,
            title: "Github Actions 로 Spring Boot 빌드하기",
            division: divcode.cicd,
            datetime: "2022. 12. 10",
        },
        {
            no: 11,
            title: "Github Actions 로 Docker Image 생성 후 Docker Hub 에 푸시하기",
            division: divcode.cicd,
            datetime: "2022. 12. 11",
        },
        {
            no: 12,
            title: "AWS SES 사용법 (1) - 전용 도메인 준비하기",
            division: divcode.aws,
            datetime: "2022. 12. 18",
        },
        {
            no: 13,
            title: "AWS SES 사용법 (2) - AWS Route53 과 구글 워크스페이스 Gmail 연동하기",
            division: divcode.aws,
            datetime: "2022. 12. 19",
        },
        {
            no: 14,
            title: "AWS SES 사용법 (3) - AWS SES 생성하기",
            division: divcode.aws,
            datetime: "2022. 12. 25",
        },
        {
            no: 15,
            title: "AWS SES 사용법 (4) - AWS SES 발송 역할과 사용자 생성하기",
            division: divcode.aws,
            datetime: "2022. 12. 25",
        },
        {
            no: 16,
            title: "AWS SES 사용법 (5) - 스프링 부트에서 AWS SES SDK 로 이메일 발송하기",
            division: divcode.aws,
            datetime: "2022. 12. 30",
        },
    ]
})
