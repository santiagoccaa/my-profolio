import { PageContainer } from "@/components"

export const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="py-8 bg-primary text-white">
      <PageContainer>
        <div className="flex justify-between w-full text-sm">
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
