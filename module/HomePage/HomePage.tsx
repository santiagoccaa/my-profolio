import { PageContainer } from '@/components'
import { About, Hero } from './components'

export function HomePage() {
    return (
        <>
            <PageContainer>
                <Hero />
            </PageContainer>
            <About />
        </>
    )
}
