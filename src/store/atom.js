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
            title: "프로젝트 구조 및 절대경로 사용 세팅하기",
            division: divcode.reactNative,
            datetime: "2022. 10. 02",
        },
    ]
})
