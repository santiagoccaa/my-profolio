import { ReactNode } from "react"


interface PageContainerProps {
    children: ReactNode
}

export const PageContainer = ({ children }: PageContainerProps) => {
    return (
        <div className="container mx-auto px-4 md:px-12 lg:px-16 max-w-7xl relative">
            {children}
        </div>
    )
}