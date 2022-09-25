import { atom } from "recoil";
import { divcode } from "../common/code";

export const postState = atom({
    key: "postState",
    default: [
        {
            no: 1,
            title: "createContext 로 CustomThemeProvider 만들어보기",
            division: divcode.react,
            datetime: "2022. 09. 25",
        },
    ]
})