import { TitleSection } from '@/components'
import { CardProject } from './CardProject'

export const Projects = () => {
    return (
        <div className='py-16'>
            <TitleSection text='Projects' />
            <h2 className='text-3xl'>My personal <span className='text-secondary'>Projects</span></h2>
            <div className='flex items-center justify-center mt-8'>
                <div className='grid grid-cols-1 md:grid-cols-2 w-full max-w-80 md:w-fit md:min-w-fit sm:px-0 xl:grid-cols-3 gap-8'>
                    <CardProject />
                    <CardProject />
                    <CardProject />
                    <CardProject />
                </div>
            </div>
        </div>
    )
}
