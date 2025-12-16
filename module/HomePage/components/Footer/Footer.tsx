import { PageContainer } from "@/components"

export const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="py-8 bg-primary text-white">
      <PageContainer>
        <div className="flex flex-col md:flex-row items-center gap-y-4 justify-between w-full text-sm">
          <span>
            © {year} Santiago Contreras Arrieta
          </span>

          <span>
            Todos los derechos reservados
          </span>
        </div>
      </PageContainer>
    </footer>
  )
}
