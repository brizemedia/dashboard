import {
  ChevronsUpDown,
  Home,
  BookHeadphones,
  Server,
  Globe,
} from "lucide-react";
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
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";

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
              {/* Media */}
              <Collapsible className="group/collapsible">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <BookHeadphones />
                      <span>Media</span>
                      <ChevronsUpDown className="h-4 w-4" />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {/* Plex */}
                      <SidebarMenuItem key="Plex">
                        <SidebarMenuButton asChild>
                          <Link href="http://media.lan:32400/web/">
                            <span>Plex</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      {/* NZBGet */}
                      <SidebarMenuItem key="NzbGet">
                        <SidebarMenuButton asChild>
                          <Link href="http://media.lan:6789">
                            <span>NzbGet</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      {/* Sonarr */}
                      <SidebarMenuItem key="Sonarr">
                        <SidebarMenuButton asChild>
                          <Link href="http://media.lan:8989">
                            <span>Sonarr</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      {/* Readarr */}
                      <SidebarMenuItem key="Readarr">
                        <SidebarMenuButton asChild>
                          <Link href="http://media.lan:8787">
                            <span>Readarr</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      {/* Radarr */}
                      <SidebarMenuItem key="Radarr">
                        <SidebarMenuButton asChild>
                          <Link href="http://media.lan:7878">
                            <span>Radarr</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      {/* Lidarr */}
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
              {/* Systems */}
              <Collapsible className="group/collapsible">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <Server />
                      <span>Systems</span>
                      <ChevronsUpDown className="h-4 w-4" />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {/* SDN */}
                      <SidebarMenuItem key="SDN">
                        <SidebarMenuButton asChild>
                          <Link href="https://192.168.0.2/#dashboard">
                            <span>SDN</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      {/* UptimeKuma */}
                      <SidebarMenuItem key="UptimeKuma">
                        <SidebarMenuButton asChild>
                          <Link href="http://docker01.lan:3001/dashboard">
                            <span>Uptime Kuma</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      {/* Pihole01 */}
                      <SidebarMenuItem key="Pihole">
                        <SidebarMenuButton asChild>
                          <Link href="http://pihole.lan:8001/admin/">
                            <span>Pihole</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      {/* Pihole02 */}
                      <SidebarMenuItem key="Pihole02">
                        <SidebarMenuButton asChild>
                          <Link href="http://rpi02.lan/admin/">
                            <span>Pihole02</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>

              {/* Other Stuff */}
              <Collapsible className="group/collapsible">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <Globe />
                      <span>Other Stuff</span>
                      <ChevronsUpDown className="h-4 w-4" />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {/* FreshRss */}
                      <SidebarMenuItem key="FreshRss">
                        <SidebarMenuButton asChild>
                          <Link href="http://docker01.lan:8002/i/">
                            <span>FreshRSS</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      {/* Minecraft SMP */}
                      <SidebarMenuItem key="MinecraftSmp">
                        <SidebarMenuButton asChild>
                          <Link href="http://dev01.lan/bozo-world/unmined.index.html">
                            <span>Minecraft SMP</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      {/* Minecraft Creative */}
                      <SidebarMenuItem key="MinecraftCreative">
                        <SidebarMenuButton asChild>
                          <Link href="http://dev01.lan/hoppy-world/unmined.index.html">
                            <span>Minecraft Creative</span>
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
