import { EXPRESS, FIGMA, MONGODB, nextJs, react, typescript, openai } from "../icons/icons"
import { MODAL_VOYAGGI, PROJECT_TASTENEST } from "../images/images"
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


export const taskFlowApi: ProjectPorfolio = {
    image: PROJECT_TASTENEST,
    name: "TaskFlow API",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ipsum ducimus adipisci est voluptatibus. Non odit repellat dignissimos fugit quis, debitis obcaecati maiores eveniet accusantium iusto consequuntur recusandae, saepe accusamus?",
    description2: "",
    tecnologis: [EXPRESS, typescript],
    link: LINK_TASTENEST
}
