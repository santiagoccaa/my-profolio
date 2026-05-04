import { PageContainer } from "@/components"

export const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="py-8 bg-[#27282A] text-white">
      <PageContainer>
        <div className="flex flex-col md:flex-row items-center gap-y-4 justify-between w-full text-sm">
          <span className="text-white font-medium text-md">
            © {year} Santiago Contreras Arrieta
          </span>

          <span className="text-white font-medium text-md">
            Todos los derechos reservados
          </span>
        </div>
      </PageContainer>
    </footer>
  )
}
