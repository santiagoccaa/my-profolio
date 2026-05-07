import { EXPRESS, FIGMA, MONGODB, nextJs, react, typescript, openai, PRISMa, CLERK } from "../icons/icons"
import { MODAL_VOYAGGI, PROJECT_ACADEMY, PROJECT_TASTENEST } from "../images/images"
import { LINK_TASTENEST, LINK_VOYAGGI } from "../images/links"

export interface ProjectPorfolio {
    image: string,
    name: string
    description: string
    description2: string
    tecnologis: string[]
    link: string
}

export const tasteNest: ProjectPorfolio = {
    image: PROJECT_TASTENEST,
    name: "TasteNest",
    description: "tasteNest.text1",
    description2: "tasteNest.text2",
    tecnologis: [nextJs, react, typescript, FIGMA],
    link: LINK_TASTENEST
}


export const voyaggi: ProjectPorfolio = {
    image: MODAL_VOYAGGI,
    name: "Voyaggi",
    description: "voyaggi.text1",
    description2: "voyaggi.text2",
    tecnologis: [nextJs, react, EXPRESS, MONGODB, typescript, openai],
    link: LINK_VOYAGGI
} as const

export const academy: ProjectPorfolio = {
    image: PROJECT_ACADEMY,
    name: "Academy LMS",
    description: "academy.text1",
    description2: "academy.text2",
    tecnologis: [nextJs, typescript, react, PRISMa, CLERK],
    link: LINK_TASTENEST
}


