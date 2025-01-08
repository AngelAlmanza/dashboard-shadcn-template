import { AppSideBar } from "@/core/components/AppSideBar"
import { SidebarProvider, SidebarTrigger } from "@/core/components/ui/sidebar"

type Props = {
  children: React.ReactNode
}

export const PrivateLayout = ({ children }: Props) => {
  return (
    <SidebarProvider>
      <AppSideBar />
      <main className="w-full h-screen overflow-y-auto">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}