import { atom } from "recoil";
import { divcode } from "../common/code";

export const postState = atom({
    key: "postState",
    default: [
        {
            no: 1,
            title: "아무거나 막 써보는 창해 기술블로그 글 1",
            division: divcode.react,
            datetime: "2022. 09. 25",
        },
        {
            no: 2,
            title: "아무거나 막 써보는 창해 기술블로그 글 2",
            division: divcode.react,
            datetime: "2022. 09. 25",
        },
        {
            no: 3,
            title: "아무거나 막 써보는 창해 기술블로그 글 3",
            division: divcode.react,
            datetime: "2022. 09. 25",
        },
        {
            no: 4,
            title: "아무거나 막 써보는 창해 기술블로그 글 4",
            division: divcode.react,
            datetime: "2022. 09. 25",
        },
        {
            no: 5,
            title: "아무거나 막 써보는 창해 기술블로그 글 5",
            division: divcode.react,
            datetime: "2022. 09. 25",
        },
    ]
})