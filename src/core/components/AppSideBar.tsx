import { Sidebar, SidebarContent, SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/core/components/ui/sidebar"
import { PrivateRoutes } from "@/core/enums/routes"
import { LayoutDashboard, Settings } from "lucide-react"
import { Link } from "react-router-dom"

const items = [
  {
    title: "Dashboard",
    url: PrivateRoutes.DASHBOARD,
    icon: LayoutDashboard,
  },
  {
    title: "Settings",
    url: PrivateRoutes.SETTINGS,
    icon: Settings,
  },
]

export const AppSideBar = () => {
  return (
    <Sidebar collapsible="icon" variant="sidebar">
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {
              items.map((item, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))
            }
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}