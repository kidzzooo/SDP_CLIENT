import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, Users, BookOpen, MessageSquare, PlusCircle, Calendar, FileText, LogOut, User } from 'lucide-react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { useNavigate } from 'react-router-dom';
const menuItems = {
  Admin: [
    { icon: Home, label: 'Dashboard', href: '/admin' },
    { icon: Users, label: 'Manage Users', href: '/admin/manage-users' },
    { icon: BookOpen, label: 'Manage Content', href: '/admin/manage-content' },
    { icon: MessageSquare, label: 'Manage Topics', href: '/admin/manage-topics' },
  ],
  Educator: [
    { icon: Home, label: 'Dashboard', href: '/educator' },
    { icon: BookOpen, label: 'Manage Content', href: '/educator/manage-content' },
    { icon: Calendar, label: 'Manage Events', href: '/educator/manage-events' },
  ],
  Citizen: [
    { icon: Home, label: 'Dashboard', href: '/citizen' },
    { icon: BookOpen, label: 'Explore Content', href: '/citizen/explore-content' },
    { icon: MessageSquare, label: 'Join Discussions', href: '/citizen/join-discussions' },
    { icon: FileText, label: 'My Feedback', href: '/citizen/my-feedback' },
  ],
};

export default function RoleSidebar({ role = 'Citizen', userName = 'John Doe', userAvatar = '/placeholder.svg', children }) {
  const items = menuItems[role] || menuItems.Citizen;
  const navigate = useNavigate();
  const handlelogout = () => {
    sessionStorage.clear;
    navigate('/login');
  }
  return (
    <SidebarProvider>
      <Sidebar className="border-r border-gray-200 bg-white">
        <SidebarHeader className="p-4">
          <div className="bg-blue-600 text-white p-3 rounded-lg mb-4">
            <h1 className="text-2xl font-bold text-center">ConstitutionEDU</h1>
          </div>
          <h2 className="text-xl font-semibold text-gray-800">{role} Panel</h2>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {items.map((item, index) => (
              <SidebarMenuItem key={index}>
                <SidebarMenuButton asChild className="w-full justify-start">
                  <Link
                    to={item.href}
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      "hover:bg-blue-50 hover:text-blue-700",
                      "focus:bg-blue-100 focus:text-blue-800"
                    )}
                  >
                    <item.icon className="mr-2 h-4 w-4" />
                    <span className="truncate">{item.label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter className="p-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="w-full justify-start">
                <Avatar className="w-6 h-6 mr-2">
                  <AvatarImage src={userAvatar} alt={userName} />
                  <AvatarFallback>{userName.charAt(0)}</AvatarFallback>
                </Avatar>
                <span className="truncate">{userName}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">{userName}</p>
                  <p className="text-xs leading-none text-muted-foreground">{role}</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handlelogout}>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarFooter>
      </Sidebar>
      <div className="flex-1 overflow-auto">
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
          <SidebarTrigger />
          <div className="w-full flex-1">
            <h1 className="text-lg font-semibold">{role} Dashboard</h1>
          </div>
        </header>
        <main className="flex-1 p-4 md:p-6">{children}</main>
      </div>
    </SidebarProvider>
  );
}
