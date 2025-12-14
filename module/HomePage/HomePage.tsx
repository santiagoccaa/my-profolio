import { Modal, PageContainer } from '@/components'
import { About, Contact, Footer, Hero, Projects, Tools } from './components'
import Skills from './components/Skills/Skills'

export function HomePage() {
    return (
        <>
            <Modal />
            <Hero />
            <Projects />
            <About />
            <PageContainer >
                <Skills />
            </PageContainer>
            <Tools />
            <PageContainer>
                <Contact />
            </PageContainer>
            <Footer />
        </>
    )
}
