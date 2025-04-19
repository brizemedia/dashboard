import {ChevronsUpDown, Home, BookHeadphones} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
} from "@/components/ui/sidebar";
import Link from "next/link";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {Button} from "@/components/ui/button";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Warehouse</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem key="Home">
                <SidebarMenuButton asChild>
                  <Link href="/">
                    <Home />
                    <span>Home</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <Collapsible className="group/collapsible">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <BookHeadphones />
                      <span>Media</span>
                      <ChevronsUpDown className="h-4 w-4"/>
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>

                      <SidebarMenuItem key="Plex">
                        <SidebarMenuButton asChild>
                          <Link href="http://media.lan:32400/web/">
                            <span>Plex</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>

                      <SidebarMenuItem key="NzbGet">
                        <SidebarMenuButton asChild>
                          <Link href="http://media.lan:6789">
                            <span>NzbGet</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>

                      <SidebarMenuItem key="Soanrr">
                        <SidebarMenuButton asChild>
                          <Link href="http://media.lan:8989">
                            <span>Sonarr</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>

                      <SidebarMenuItem key="Readarr">
                        <SidebarMenuButton asChild>
                          <Link href="http://media.lan:8787">
                            <span>Readarr</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>

                      <SidebarMenuItem key="Radarr">
                        <SidebarMenuButton asChild>
                          <Link href="http://media.lan:7878">
                            <span>Radarr</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>

                      <SidebarMenuItem key="Lidarr">
                        <SidebarMenuButton asChild>
                          <Link href="http://media.lan:8686">
                            <span>Lidarr</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>

                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
