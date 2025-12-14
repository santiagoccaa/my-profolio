import { Modal } from '@/components'
import { About, Hero, Projects } from './components'
import Skills from './components/Skills/Skills'

export function HomePage() {
    return (
        <>
            <Modal />
            <Hero />
            <Projects />
            <About />
            <Skills />
        </>
    )
}
