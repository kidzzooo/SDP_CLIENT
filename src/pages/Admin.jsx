import React from 'react'
import  Layout  from '../roles/Layout'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, BookOpen, MessageSquare, BarChart2 } from 'lucide-react'

export default function AdminDashboard() {
  return (
    <Layout role="Admin">
      <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-6 text-blue-800">Admin Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <DashboardCard title="Total Users" value="1,234" icon={Users} color="bg-purple-500" />
          <DashboardCard title="Content Pieces" value="567" icon={BookOpen} color="bg-green-500" />
          <DashboardCard title="Active Topics" value="89" icon={MessageSquare} color="bg-yellow-500" />
          <DashboardCard title="User Engagement" value="78%" icon={BarChart2} color="bg-blue-500" />
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activities</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>New user registered: John Doe</li>
                <li>Content updated: "Introduction to Constitution"</li>
                <li>New topic created: "Electoral College Debate"</li>
                <li>User role changed: Jane Smith (Citizen to Educator)</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col space-y-2">
              <Button>Create New User</Button>
              <Button>Manage Content</Button>
              <Button>View Reports</Button>
              <Button>System Settings</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  )
}

function DashboardCard({ title, value, icon: Icon, color }) {
  return (
    <Card>
      <CardContent className="flex items-center p-6">
        <div className={`${color} p-4 rounded-full mr-4`}>
          <Icon className="h-8 w-8 text-white" />
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <p className="text-2xl font-bold">{value}</p>
        </div>
      </CardContent>
    </Card>
  )
}