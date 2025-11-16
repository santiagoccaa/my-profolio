import { PageContainer } from '@/components'
import { About, Hero, Projects } from './components'

export function HomePage() {
    return (
        <>
            <PageContainer>
                <Hero />
            </PageContainer>
            <About />
            <PageContainer>
                <Projects />
            </PageContainer>
        </>
    )
}
