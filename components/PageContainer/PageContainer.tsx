import { ReactNode } from "react"


interface PageContainerProps {
    children: ReactNode
}

export const PageContainer = ({ children }: PageContainerProps) => {
    return (
        <div className="container mx-auto px-2 md:px-4 lg:px-8">
            {children}
        </div>
    )
}