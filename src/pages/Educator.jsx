import React from 'react'
import  Layout  from '../roles/Layout'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Users, Calendar, BarChart2 } from 'lucide-react'

export default function EducatorDashboard() {
  return (
    <Layout role="Educator">
      <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-6 text-green-800">Educator Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <DashboardCard title="Your Content" value="23" icon={BookOpen} color="bg-blue-500" />
          <DashboardCard title="Student Reach" value="456" icon={Users} color="bg-green-500" />
          <DashboardCard title="Upcoming Events" value="3" icon={Calendar} color="bg-yellow-500" />
          <DashboardCard title="Avg. Engagement" value="82%" icon={BarChart2} color="bg-purple-500" />
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Student Activities</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>Sarah completed "US Constitution Basics" quiz</li>
                <li>Mike submitted feedback on "Voting Rights" article</li>
                <li>Emma joined "Constitutional Amendments" discussion</li>
                <li>Alex watched "Separation of Powers" video</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col space-y-2">
              <Button>Create New Content</Button>
              <Button>Schedule Event</Button>
              <Button>Review Student Progress</Button>
              <Button>Manage Discussions</Button>
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