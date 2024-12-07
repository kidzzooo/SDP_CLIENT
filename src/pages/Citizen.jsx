import React from 'react'
import  Layout  from '../roles/Layout'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, MessageSquare, Award, TrendingUp } from 'lucide-react'

export default function CitizenDashboard() {
  return (
    <Layout role="Citizen">
      <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-6 text-indigo-800">Citizen Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <DashboardCard title="Lessons Completed" value="12" icon={BookOpen} color="bg-blue-500" />
          <DashboardCard title="Discussions Joined" value="5" icon={MessageSquare} color="bg-green-500" />
          <DashboardCard title="Badges Earned" value="3" icon={Award} color="bg-yellow-500" />
          <DashboardCard title="Knowledge Score" value="720" icon={TrendingUp} color="bg-purple-500" />
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Recommended Content</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>Article: "The First Amendment Explained"</li>
                <li>Video: "How a Bill Becomes a Law"</li>
                <li>Quiz: "Test Your Knowledge on Civil Rights"</li>
                <li>Discussion: "Should the Electoral College be Abolished?"</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col space-y-2">
              <Button>Continue Learning</Button>
              <Button>Join a Discussion</Button>
              <Button>Take a Quiz</Button>
              <Button>View Your Progress</Button>
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