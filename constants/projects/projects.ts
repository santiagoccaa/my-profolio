import { PROJECT_GLASSES, PROJECT_TASTENEST, PROJECT_VOYAGGI } from "../images/images"
import { LINK_GLASSES, LINK_TASTENEST, LINK_VOYAGGI } from "../images/links"

export interface ProjectPorfolio {
    image: string,
    name: string
    description: string
    tecnologis: string[]
    link: string
}

export const tasteNest: ProjectPorfolio = {
    image: PROJECT_GLASSES,
    name: "TasteNest",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ipsum ducimus adipisci est voluptatibus. Non odit repellat dignissimos fugit quis, debitis obcaecati maiores eveniet accusantium iusto consequuntur recusandae, saepe accusamus?",
    tecnologis: ["nextJs", "React"],
    link: LINK_GLASSES
}


export const voyaggi: ProjectPorfolio = {
    image: PROJECT_VOYAGGI,
    name: "Voyaggi",
    description: "Voyaggi es un planificador de viajes que utiliza inteligencia artificial para recomendar a los usuarios diferentes destinos a visitar y actividades de la ciudad a la que quieran ir con un coste aproximado, aunque no solo eso tambien puedes ajustar diferentes detalles como son hotel, transporte, preferencias, tours y mucho mas, ofrece una interfaz interactiva para que puedas modificar las actividades en el orden que desees y mucho mucho mas. Fue desarrollado diferentes tecnologias como:",
    tecnologis: ["nextJs", "React", "express", "mongodb"],
    link: LINK_VOYAGGI
}


export const taskFlowApi: ProjectPorfolio = {
    image: PROJECT_TASTENEST,
    name: "TaskFlow API",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ipsum ducimus adipisci est voluptatibus. Non odit repellat dignissimos fugit quis, debitis obcaecati maiores eveniet accusantium iusto consequuntur recusandae, saepe accusamus?",
    tecnologis: ["nextJs", "React"],
    link: LINK_TASTENEST
}
